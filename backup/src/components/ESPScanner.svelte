<script lang="ts">
  import Icon from './Icon.svelte';
  
  let domain = '';
  let loading = false;
  let data: any = null;
  let error = '';
  
  function sanitizeDomain(input: string): string {
    // Remove protocols
    let domain = input.replace(/^https?:\/\//i, '');
    
    // Remove www prefix
    domain = domain.replace(/^www\./i, '');
    
    // Remove trailing slash and path
    domain = domain.split('/')[0];
    
    // Remove port numbers
    domain = domain.split(':')[0];
    
    // Remove query parameters and fragments
    domain = domain.split('?')[0].split('#')[0];
    
    // Trim whitespace and convert to lowercase
    domain = domain.trim().toLowerCase();
    
    return domain;
  }

  async function scan(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    if (!domain.trim()) {
      error = 'Please enter a domain';
      return;
    }
    
    // Sanitize the domain input
    const sanitizedDomain = sanitizeDomain(domain);
    
    // Validate the sanitized domain
    if (!/^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?(\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?)*$/.test(sanitizedDomain)) {
      error = `Invalid domain format: ${sanitizedDomain}`;
      return;
    }
    
    // Update the input field with the sanitized domain
    domain = sanitizedDomain;
    
    loading = true;
    data = null;
    error = '';
    
    try {
      const timestamp = Date.now();
      const response = await fetch(`/api/esp-scan?domain=${encodeURIComponent(sanitizedDomain)}&t=${timestamp}`);
      const result = await response.json();
      
      // Track ESP scan usage in PostHog
      if (window.posthog) {
        window.posthog.capture('esp_scan_completed', {
          domain: sanitizedDomain,
          results_count: result.results?.length || 0,
          scan_type: result.scan_type || 'full_scan',
          response_time: Date.now() - timestamp,
          success: !result.error
        });
      }
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to scan domain');
      }
      
      data = result;
    } catch (err) {
      error = err instanceof Error ? err.message : 'An error occurred while scanning';
    } finally {
      loading = false;
    }
  }
  
  function clearResults() {
    data = null;
    error = '';
    domain = '';
  }
  
  function getConfidenceColor(score: number, maxScore: number) {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 70) return 'text-green-400';
    if (percentage >= 40) return 'text-yellow-400';
    return 'text-red-400';
  }
  
  function getConfidenceLabel(score: number, maxScore: number) {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 70) return 'High Confidence';
    if (percentage >= 40) return 'Medium Confidence';
    return 'Low Confidence';
  }
</script>

<div class="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
  <div class="text-center mb-8">
    <div class="inline-flex items-center gap-3 bg-red-500/20 rounded-full px-6 py-3 mb-4">
      <Icon icon="mdi:magnify" class="w-6 h-6 text-red-400" />
      <span class="text-sm font-medium text-red-400">ESP Detection Tool</span>
    </div>
    <h2 class="text-2xl font-bold text-white mb-2">Email Service Provider Scanner</h2>
    <p class="text-zinc-300 max-w-2xl mx-auto">
      Enter a domain to detect which email marketing platform they're using. 
      We'll analyze SPF records, DKIM signatures, and website signals to identify their ESP.
    </p>
  </div>

  <!-- Input Form -->
  <form on:submit={scan} class="max-w-2xl mx-auto mb-8">
    <div class="flex gap-3">
      <div class="flex-1">
        <label for="domain-input" class="block text-sm font-medium text-zinc-300 mb-2">
          Domain to Scan
        </label>
        <input
          id="domain-input"
          type="text"
          placeholder="example.com, https://example.com, www.example.com"
          bind:value={domain}
          on:keydown={(e) => e.key === 'Enter' && scan(e)}
          class="w-full bg-zinc-800 border border-zinc-600 text-white px-4 py-3 rounded-lg focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
          disabled={loading}
        />
        <p class="text-xs text-zinc-500 mt-2">
          💡 Tip: You can paste full URLs - we'll automatically clean them for you
        </p>
      </div>
      <div class="flex flex-col justify-end">
        <button
          type="button"
          on:click={scan}
          disabled={loading || !domain.trim()}
          class="bg-red-500 hover:bg-red-600 disabled:bg-zinc-600 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
        >
          {#if loading}
            <Icon icon="mdi:loading" class="w-4 h-4 animate-spin" />
            Scanning...
          {:else}
            <Icon icon="mdi:magnify" class="w-4 h-4" />
            Scan Domain
          {/if}
        </button>
      </div>
    </div>
    <p class="text-xs text-zinc-500 mt-2">
      Enter domain without http:// or https:// (e.g., example.com)
    </p>
  </form>

  <!-- Error Display -->
  {#if error}
    <div class="max-w-2xl mx-auto mb-6">
      <div class="bg-red-500/20 border border-red-500/50 rounded-lg p-4 flex items-center gap-3">
        <Icon icon="mdi:alert-circle" class="w-5 h-5 text-red-400 flex-shrink-0" />
        <div>
          <h3 class="text-red-400 font-medium">Scan Failed</h3>
          <p class="text-red-300 text-sm">{error}</p>
        </div>
      </div>
    </div>
  {/if}

  <!-- Results Display -->
  {#if data}
    <div class="max-w-4xl mx-auto">
      <div class="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
        <!-- Header -->
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-xl font-semibold text-white">Scan Results</h3>
            <p class="text-zinc-400 text-sm">Domain: {data.domain}</p>
          </div>
          <button
            on:click={clearResults}
            class="text-zinc-400 hover:text-white transition-colors"
            title="Clear results"
          >
            <Icon icon="mdi:close" class="w-5 h-5" />
          </button>
        </div>

        <!-- ESP Detection Result -->
        <div class="mb-6">
          {#if data.esp_guess}
            <div class="bg-green-500/20 border border-green-500/50 rounded-lg p-6">
              <div class="flex items-center gap-3 mb-3">
                <Icon icon="mdi:check-circle" class="w-6 h-6 text-green-400" />
                <h4 class="text-lg font-semibold text-green-400">ESP Detected</h4>
              </div>
              <div class="text-2xl font-bold text-white mb-2">{data.esp_guess}</div>
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                  <span class="text-sm text-zinc-300">Confidence:</span>
                  <span class="text-sm font-medium {getConfidenceColor(data.confidence_score, data.max_possible_score)}">
                    {getConfidenceLabel(data.confidence_score, data.max_possible_score)}
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-sm text-zinc-300">Score:</span>
                  <span class="text-sm font-medium text-white">
                    {data.confidence_score}/{data.max_possible_score}
                  </span>
                </div>
              </div>
            </div>
          {:else}
            <div class="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-6">
              <div class="flex items-center gap-3 mb-3">
                <Icon icon="mdi:help-circle" class="w-6 h-6 text-yellow-400" />
                <h4 class="text-lg font-semibold text-yellow-400">No ESP Detected</h4>
              </div>
              <p class="text-yellow-300">
                We couldn't identify a specific email service provider for this domain. 
                This could mean they're using a custom solution or the signals aren't publicly visible.
              </p>
            </div>
          {/if}
        </div>

        <!-- Evidence Details -->
        {#if data.evidence}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <!-- SPF Evidence -->
            <div class="bg-zinc-700/50 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-3">
                <Icon icon="mdi:shield-check" class="w-5 h-5 {data.evidence.spf ? 'text-green-400' : 'text-zinc-500'}" />
                <h5 class="font-medium text-white">SPF Record</h5>
              </div>
              {#if data.evidence.spf}
                <p class="text-green-400 text-sm mb-2">✓ Found</p>
                <code class="text-xs text-zinc-300 bg-zinc-800 p-2 rounded block break-all">
                  {data.evidence.spfRecord}
                </code>
              {:else}
                <p class="text-zinc-500 text-sm">No matching SPF record found</p>
              {/if}
            </div>

            <!-- DKIM Evidence -->
            <div class="bg-zinc-700/50 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-3">
                <Icon icon="mdi:key" class="w-5 h-5 {data.evidence.dkim ? 'text-green-400' : 'text-zinc-500'}" />
                <h5 class="font-medium text-white">DKIM Record</h5>
              </div>
              {#if data.evidence.dkim}
                <p class="text-green-400 text-sm mb-2">✓ Found</p>
                <code class="text-xs text-zinc-300 bg-zinc-800 p-2 rounded block break-all">
                  {data.evidence.dkimRecord}
                </code>
              {:else}
                <p class="text-zinc-500 text-sm">No matching DKIM record found</p>
              {/if}
            </div>

            <!-- Web Evidence -->
            <div class="bg-zinc-700/50 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-3">
                <Icon icon="mdi:web" class="w-5 h-5 {data.evidence.web ? 'text-green-400' : 'text-zinc-500'}" />
                <h5 class="font-medium text-white">Web Signals</h5>
              </div>
              {#if data.evidence.web}
                <p class="text-green-400 text-sm mb-2">✓ Found {data.evidence.webMatches.length} matches</p>
                <div class="space-y-1">
                  {#each data.evidence.webMatches.slice(0, 3) as match}
                    <code class="text-xs text-zinc-300 bg-zinc-800 p-1 rounded block break-all">
                      {match}
                    </code>
                  {/each}
                  {#if data.evidence.webMatches.length > 3}
                    <p class="text-xs text-zinc-500">+{data.evidence.webMatches.length - 3} more</p>
                  {/if}
                </div>
              {:else}
                <p class="text-zinc-500 text-sm">No web signals found</p>
              {/if}
            </div>
          </div>
        {/if}

        <!-- Raw Data Summary -->
        <div class="bg-zinc-700/30 rounded-lg p-4">
          <h5 class="font-medium text-white mb-3">Scan Summary</h5>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span class="text-zinc-400">SPF Records:</span>
              <span class="text-white ml-2">{data.raw_data.spf_records.length}</span>
            </div>
            <div>
              <span class="text-zinc-400">DKIM Records:</span>
              <span class="text-white ml-2">{data.raw_data.dkim_records.length}</span>
            </div>
            <div>
              <span class="text-zinc-400">Web URLs:</span>
              <span class="text-white ml-2">{data.raw_data.web_urls_found}</span>
            </div>
          </div>
          <p class="text-xs text-zinc-500 mt-3">
            Scanned at: {new Date(data.timestamp).toLocaleString()}
          </p>
        </div>

        <!-- B2B Marketing Intelligence -->
        {#if data.marketing_intelligence}
          <div class="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <div class="flex items-center gap-2 mb-4">
              <Icon icon="mdi:chart-line" class="w-6 h-6 text-blue-400" />
              <h4 class="text-lg font-semibold text-white">B2B Marketing Intelligence</h4>
            </div>

            <!-- ESP Analysis -->
            {#if data.marketing_intelligence.esp_analysis}
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="bg-zinc-700/50 rounded-lg p-4">
                  <h5 class="font-medium text-white mb-2">ESP Maturity</h5>
                  <p class="text-blue-400 text-sm">{data.marketing_intelligence.esp_analysis.maturity}</p>
                </div>
                <div class="bg-zinc-700/50 rounded-lg p-4">
                  <h5 class="font-medium text-white mb-2">Estimated Adoption</h5>
                  <p class="text-blue-400 text-sm">{data.marketing_intelligence.esp_analysis.estimatedAdoption}</p>
                </div>
              </div>

              <!-- ESP Insights -->
              {#if data.marketing_intelligence.esp_analysis.insights.length > 0}
                <div class="mb-6">
                  <h5 class="font-medium text-white mb-3">ESP Insights</h5>
                  <div class="space-y-2">
                    {#each data.marketing_intelligence.esp_analysis.insights as insight}
                      <div class="flex items-start gap-2">
                        <Icon icon="mdi:lightbulb" class="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <p class="text-zinc-300 text-sm">{insight}</p>
                      </div>
                    {/each}
                  </div>
                </div>
              {/if}
            {/if}

            <!-- Marketing Tech Stack -->
            {#if Object.keys(data.marketing_intelligence.marketing_tech_stack).length > 0}
              <div class="mb-6">
                <h5 class="font-medium text-white mb-3">Marketing Technology Stack</h5>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {#each Object.entries(data.marketing_intelligence.marketing_tech_stack) as [category, tools]}
                    <div class="bg-zinc-700/50 rounded-lg p-3">
                      <h6 class="text-sm font-medium text-blue-400 mb-2 capitalize">{category}</h6>
                      <div class="space-y-1">
                        {#each tools as tool}
                          <p class="text-xs text-zinc-300 bg-zinc-800 px-2 py-1 rounded">{tool}</p>
                        {/each}
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            {/if}

            <!-- Competitive Insights -->
            {#if data.marketing_intelligence.competitive_insights}
              <div class="mb-6">
                <h5 class="font-medium text-white mb-3">Competitive Insights</h5>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-zinc-700/50 rounded-lg p-4">
                    <h6 class="text-sm font-medium text-white mb-2">Marketing Sophistication</h6>
                    <p class="text-green-400 text-sm">{data.marketing_intelligence.competitive_insights.marketing_sophistication}</p>
                  </div>
                  <div class="bg-zinc-700/50 rounded-lg p-4">
                    <h6 class="text-sm font-medium text-white mb-2">ESP Maturity</h6>
                    <p class="text-green-400 text-sm">{data.marketing_intelligence.competitive_insights.esp_maturity}</p>
                  </div>
                </div>
              </div>
            {/if}

            <!-- Upsell Opportunities -->
            {#if data.marketing_intelligence.competitive_insights?.potential_upsell_opportunities?.length > 0}
              <div>
                <h5 class="font-medium text-white mb-3">EngineMailer Upsell Opportunities</h5>
                <div class="space-y-2">
                  {#each data.marketing_intelligence.competitive_insights.potential_upsell_opportunities as opportunity}
                    <div class="flex items-start gap-2">
                      <Icon icon="mdi:target" class="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <p class="text-zinc-300 text-sm">{opportunity}</p>
                    </div>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  {/if}

  <!-- Loading State -->
  {#if loading}
    <div class="max-w-2xl mx-auto">
      <div class="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 text-center">
        <Icon icon="mdi:loading" class="w-8 h-8 text-red-400 animate-spin mx-auto mb-4" />
        <h3 class="text-lg font-semibold text-white mb-2">Scanning Domain</h3>
        <p class="text-zinc-300 text-sm">
          Analyzing SPF records, DKIM signatures, and website signals...
        </p>
        <div class="mt-4 bg-zinc-700 rounded-full h-2">
          <div class="bg-red-500 h-2 rounded-full animate-pulse" style="width: 60%"></div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-spin {
    animation: spin 1s linear infinite;
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }
</style>
