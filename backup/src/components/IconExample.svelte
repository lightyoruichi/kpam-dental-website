<script>
  import Icon from './Icon.svelte';
</script>

<!-- Example usage of custom SVG icons -->
<div class="flex items-center gap-4 p-4">
  <!-- Available icons -->
  <Icon icon="mdi:arrow-right" className="w-6 h-6 text-blue-500" />
  <Icon icon="mdi:chevron-left" className="w-6 h-6 text-green-500" />
  <Icon icon="mdi:chevron-right" className="w-6 h-6 text-red-500" />
  <Icon icon="mdi:content-copy" className="w-6 h-6 text-purple-500" />
  
  <!-- Brand icons -->
  <Icon icon="simple-icons:openai" className="w-6 h-6 text-blue-400" />
  <Icon icon="simple-icons:anthropic" className="w-6 h-6 text-orange-500" />
  <Icon icon="simple-icons:googlegemini" className="w-6 h-6 text-yellow-500" />
  <Icon icon="simple-icons:perplexity" className="w-6 h-6 text-gray-600" />
</div>

<!-- Custom sizing -->
<div class="flex items-center gap-2 p-4">
  <Icon icon="mdi:arrow-right" width="32" height="32" className="text-green-500" />
  <span>Custom sized icon</span>
</div>

<!-- With click handlers -->
<button 
  on:click={() => alert('Icon clicked!')}
  class="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
>
  <Icon icon="mdi:content-copy" className="w-5 h-5" />
  Copy Item
</button>
