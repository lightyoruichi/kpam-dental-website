import type { APIRoute } from 'astro';
import { resolveTxt, resolveCname } from 'node:dns/promises';
import * as cheerio from 'cheerio';

// Common DKIM selectors to check
const selectors = ['k1','k2','s1','s2','selector1','selector2','m1','m2','kl','litesrv','mail','default','sib','brevo','sendinblue'];

// Marketing technology detection patterns
const marketingTechPatterns = {
  analytics: [
    /google-analytics\.com|googletagmanager\.com|gtag\.js/i,
    /hotjar\.com|hotjar\.js/i,
    /mixpanel\.com|mixpanel\.js/i,
    /amplitude\.com|amplitude\.js/i,
    /segment\.com|segment\.js/i
  ],
  forms: [
    /typeform\.com|typeform\.embed/i,
    /jotform\.com|jotform\.net/i,
    /wufoo\.com/i,
    /gravityforms\.com/i,
    /contact-form-7/i
  ],
  chat: [
    /intercom\.io|intercom\.js/i,
    /zendesk\.com|zendesk-chat/i,
    /drift\.com|drift\.js/i,
    /tawk\.to/i,
    /crisp\.chat/i
  ],
  crm: [
    /salesforce\.com|salesforce\.js/i,
    /hubspot\.com|hubspot\.js/i,
    /pipedrive\.com/i,
    /zoho\.com/i,
    /freshworks\.com/i
  ],
  social: [
    /facebook\.com\/tr|fbq\(/i,
    /twitter\.com\/i\/adsct/i,
    /linkedin\.com\/li\.lms/i,
    /pinterest\.com\/tag/i,
    /tiktok\.com\/i18n\/pixel/i
  ],
  advertising: [
    /googleadservices\.com|googleads\.g\.doubleclick\.net/i,
    /facebook\.com\/tr|fbq\(/i,
    /bing\.com\/ads/i,
    /adsystem\.amazon\.com/i
  ]
};

// ESP detection rules with SPF, DKIM, and web patterns
// EMAIL MARKETING PLATFORMS (Priority 1)
const emailMarketingRules = [
  { 
    name: 'Mailchimp', 
    spf: /servers\.mcsv\.net/i, 
    dkim: /dkim\.mcsv\.net/i, 
    web: /list-manage\.com|\.mcsv\.net|\.mailchimp\.com/i 
  },
  { 
    name: 'Klaviyo', 
    spf: /klaviyo|klaviyodns\.com/i, 
    dkim: /klaviyo|klaviyodns\.com/i, 
    web: /static\.klaviyo\.com\/onsite\/js\/klaviyo\.js|\.klaviyo\.com/i 
  },
  { 
    name: 'SendGrid', 
    spf: /sendgrid\.net/i, 
    dkim: /\.wl\.sendgrid\.net|sendgrid/i, 
    web: /sendgrid\.net/i 
  },
  { 
    name: 'HubSpot', 
    spf: /hubspotemail\.net/i, 
    dkim: /hubspotemail\.net/i, 
    web: /js\.hs-analytics\.net|js\.hs-scripts\.com|hs-forms\.com/i 
  },
  { 
    name: 'Campaign Monitor', 
    spf: /_spf\.createsend\.com|cmail\d+\.com/i, 
    dkim: /createsend\.com|cmail\d+\.com/i, 
    web: /\.createsend\.com|\.campaignmonitor\.com/i 
  },
  { 
    name: 'ActiveCampaign', 
    spf: null, 
    dkim: /acems|acemsrvc|em[sd]\d/i, 
    web: /trackcmp\.net\/visit|prism\.app-us1\.com\/prism\.js|\.activecampaign\.com/i 
  },
  { 
    name: 'Marketo', 
    spf: /mktomail\.com/i, 
    dkim: /mktomail\.com|marketo/i, 
    web: /munchkin\.js|\.marketo\.(net|com)/i 
  },
  { 
    name: 'Salesforce Marketing Cloud', 
    spf: /cust-spf\.exacttarget\.com/i, 
    dkim: /exacttarget/i, 
    web: /\.exacttarget\.com/i 
  },
  { 
    name: 'MailerLite', 
    spf: /spf\.mailerlite/i, 
    dkim: /mailerlite|litesrv\._domainkey/i, 
    web: /\.mailerlite\.com/i 
  },
  { 
    name: 'ConvertKit', 
    spf: null, 
    dkim: /convertkit/i, 
    web: /forms\.convertkit\.com|app\.convertkit\.com|\.convertkit\.com/i 
  },
  { 
    name: 'Drip', 
    spf: null, 
    dkim: /drip/i, 
    web: /assets\.getdrip\.com|tag\.getdrip\.com|\.getdrip\.com/i 
  },
  { 
    name: 'Pardot', 
    spf: null, 
    dkim: /pardot/i, 
    web: /\.pardot\.com/i 
  },
  { 
    name: 'EngineMailer', 
    spf: /enginemailer\.com/i, 
    dkim: /enginemailer/i, 
    web: /\.enginemailer\.com/i 
  },
  { 
    name: 'Constant Contact', 
    spf: /constantcontact\.com/i, 
    dkim: /constantcontact/i, 
    web: /\.constantcontact\.com/i 
  },
  { 
    name: 'AWeber', 
    spf: /aweber\.com/i, 
    dkim: /aweber/i, 
    web: /\.aweber\.com/i 
  },
  { 
    name: 'Sendinblue/Brevo', 
    spf: /spf\.sendinblue\.com/i, 
    dkim: /sendinblue|brevo/i, 
    web: /\.sendinblue\.com|\.brevo\.com/i 
  },
  { 
    name: 'GetResponse', 
    spf: /getresponse\.com/i, 
    dkim: /getresponse/i, 
    web: /\.getresponse\.com/i 
  },
  { 
    name: 'EngineMailer', 
    spf: /enginemailer\.org/i, 
    dkim: /enginemailer/i, 
    web: /\.enginemailer\.org|\.enginemailer\.com/i 
  }
];

// INTERNAL EMAIL SYSTEMS (Priority 2)
const internalEmailRules = [
  { 
    name: 'Microsoft 365/Outlook', 
    spf: /spf\.protection\.outlook\.com/i, 
    dkim: /outlook\.com|microsoft/i, 
    web: /\.outlook\.com|\.microsoft\.com/i 
  },
  { 
    name: 'Google Workspace', 
    spf: /_spf\.google\.com/i, 
    dkim: /google/i, 
    web: /\.google\.com|\.googleapis\.com/i 
  }
];

// FALLBACK RULES (Priority 3)
const fallbackRules = [
  { 
    name: 'Custom/Hosting Provider', 
    spf: /mschosting|hosting|server/i, 
    dkim: /default|mail/i, 
    web: null 
  }
];

// Combine all rules with email marketing platforms first
const rules = [...emailMarketingRules, ...internalEmailRules, ...fallbackRules];

async function getSPF(domain: string) {
  try {
    const txt = await resolveTxt(domain);
    // Join chunks and keep only v=spf1 records
    const spfRecords = txt.map(parts => parts.join('')).filter(t => t.toLowerCase().includes('v=spf1'));
    console.log(`SPF records for ${domain}:`, spfRecords);
    return spfRecords;
  } catch (error) { 
    console.log(`SPF lookup failed for ${domain}:`, error);
    return []; 
  }
}

async function getTXTRecords(domain: string) {
  try {
    const txt = await resolveTxt(domain);
    return txt.map(parts => parts.join(''));
  } catch (error) { 
    console.log(`TXT lookup failed for ${domain}:`, error);
    return []; 
  }
}

async function getDKIM(domain: string) {
  const hits: string[] = [];
  for (const s of selectors) {
    try {
      // Try TXT records first (most common for DKIM)
      const txt = await resolveTxt(`${s}._domainkey.${domain}`);
      if (txt.length > 0) {
        hits.push(`${s}._domainkey.${domain} -> ${txt.map(parts => parts.join('')).join('; ')}`);
      }
    } catch {
      try {
        // Fallback to CNAME records
        const cn = await resolveCname(`${s}._domainkey.${domain}`);
        if (cn[0]) {
          hits.push(`${s}._domainkey.${domain} -> ${cn[0]}`);
        }
      } catch {
        // Continue to next selector
      }
    }
  }
  return hits;
}

async function getWebSignals(domain: string) {
  try {
    const res = await fetch(`https://${domain}`, { 
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ESP-Scanner/1.0)'
      }
    });
    const html = await res.text();
    const $ = cheerio.load(html);
    const urls: string[] = [];
    
    // Extract URLs from script src, link href, form action, and other attributes
    $('script[src], link[href], a[href], form[action], img[src], iframe[src]').each((_, el) => {
      const v = $(el).attr('src') || $(el).attr('href') || $(el).attr('action');
      if (v) {
        urls.push(v);
      }
    });
    
    return urls.join('\n');
  } catch { 
    return ''; 
  }
}

// Detect marketing technology stack from web content
function detectMarketingTech(webUrls: string): Record<string, string[]> {
  const detected: Record<string, string[]> = {};
  
  Object.entries(marketingTechPatterns).forEach(([category, patterns]) => {
    const matches: string[] = [];
    patterns.forEach(pattern => {
      if (pattern.test(webUrls)) {
        // Extract the specific service name from the match
        const match = webUrls.match(pattern);
        if (match) {
          matches.push(match[0]);
        }
      }
    });
    if (matches.length > 0) {
      detected[category] = [...new Set(matches)]; // Remove duplicates
    }
  });
  
  return detected;
}

// Estimate domain age from WHOIS data (simplified approach)
async function estimateDomainAge(domain: string): Promise<{ age: string; confidence: string }> {
  try {
    // This is a simplified approach - in production you'd use a WHOIS API
    // For now, we'll return a placeholder that could be enhanced with actual WHOIS lookup
    return {
      age: "Unknown (WHOIS lookup required)",
      confidence: "Low"
    };
  } catch {
    return {
      age: "Unknown",
      confidence: "Low"
    };
  }
}

// Analyze ESP adoption timeline based on domain and tech stack
function analyzeESPAdoption(esp: string, domainAge: string, marketingTech: Record<string, string[]>): {
  estimatedAdoption: string;
  maturity: string;
  insights: string[];
} {
  const insights: string[] = [];
  let maturity = "Unknown";
  let estimatedAdoption = "Unknown";
  
  // Analyze based on marketing tech stack complexity
  const techCount = Object.keys(marketingTech).length;
  const hasAdvancedTech = marketingTech.analytics?.length > 0 || marketingTech.crm?.length > 0;
  
  if (techCount >= 4 && hasAdvancedTech) {
    maturity = "Advanced";
    estimatedAdoption = "Likely 2+ years";
    insights.push("Sophisticated marketing stack suggests long-term ESP usage");
  } else if (techCount >= 2) {
    maturity = "Intermediate";
    estimatedAdoption = "Likely 1-2 years";
    insights.push("Moderate marketing tech stack suggests established ESP usage");
  } else if (techCount >= 1) {
    maturity = "Basic";
    estimatedAdoption = "Likely < 1 year";
    insights.push("Basic marketing setup suggests recent ESP adoption");
  } else {
    maturity = "Minimal";
    estimatedAdoption = "Unknown";
    insights.push("Limited marketing tech detected - may be new to email marketing");
  }
  
  // Add ESP-specific insights
  if (esp === 'Sendinblue/Brevo') {
    insights.push("Using cost-effective ESP - good for budget-conscious businesses");
  } else if (esp === 'Mailchimp') {
    insights.push("Popular choice - indicates mainstream marketing approach");
  } else if (esp === 'Klaviyo') {
    insights.push("E-commerce focused ESP - likely B2C or e-commerce business");
  } else if (esp === 'HubSpot') {
    insights.push("Enterprise-grade ESP - indicates sophisticated marketing operations");
  }
  
  return { estimatedAdoption, maturity, insights };
}

// Generate upsell opportunities for EngineMailer based on detected tech stack
function generateUpsellOpportunities(marketingTech: Record<string, string[]>, currentESP: string | null): string[] {
  const opportunities: string[] = [];
  
  // Check for missing marketing tools that EngineMailer could provide
  if (!marketingTech.analytics?.length) {
    opportunities.push("No analytics detected - offer email analytics and tracking");
  }
  
  if (!marketingTech.forms?.length) {
    opportunities.push("No form tools detected - offer lead capture forms");
  }
  
  if (!marketingTech.chat?.length) {
    opportunities.push("No live chat detected - offer customer support integration");
  }
  
  if (!marketingTech.crm?.length) {
    opportunities.push("No CRM detected - offer customer relationship management");
  }
  
  // ESP-specific opportunities
  if (currentESP === 'Sendinblue/Brevo') {
    opportunities.push("Using basic ESP - offer advanced automation and segmentation");
  } else if (currentESP === 'Mailchimp') {
    opportunities.push("Popular ESP user - offer competitive pricing and better deliverability");
  } else if (currentESP === 'Klaviyo') {
    opportunities.push("E-commerce focused - offer B2B specific features and integrations");
  }
  
  // General opportunities based on tech stack maturity
  const techCount = Object.keys(marketingTech).length;
  if (techCount < 2) {
    opportunities.push("Basic marketing setup - offer comprehensive marketing automation");
  } else if (techCount >= 3) {
    opportunities.push("Advanced setup - offer enterprise features and custom integrations");
  }
  
  return opportunities;
}

function score(spfArr: string[], dkimArr: string[], urlsJoined: string, customRules?: any[]) {
  const rulesToUse = customRules || rules;
  let best: { name: string; score: number; evidence: any } | null = null;
  
  for (const r of rulesToUse) {
    let score = 0;
    const evidence = {
      spf: false,
      dkim: false,
      web: false,
      spfRecord: '',
      dkimRecord: '',
      webMatches: [] as string[]
    };
    
    // Check SPF records
    if (r.spf && spfArr.some(t => r.spf!.test(t))) {
      score += 3;
      evidence.spf = true;
      evidence.spfRecord = spfArr.find(t => r.spf!.test(t)) || '';
    }
    
    // Check DKIM records
    if (r.dkim && dkimArr.some(t => r.dkim!.test(t))) {
      score += 4;
      evidence.dkim = true;
      evidence.dkimRecord = dkimArr.find(t => r.dkim!.test(t)) || '';
    }
    
    // Check web signals
    if (r.web && r.web.test(urlsJoined)) {
      score += 2;
      evidence.web = true;
      const matches = urlsJoined.match(r.web) || [];
      evidence.webMatches = Array.from(new Set(matches));
    }
    
    if (score > 0 && (!best || score > best.score)) {
      best = { name: r.name, score, evidence };
    }
  }
  
  // If no specific ESP detected but we have SPF/DKIM records, suggest generic email setup
  if (!best && (spfArr.length > 0 || dkimArr.length > 0)) {
    best = {
      name: 'Email Authentication Configured',
      score: 1,
      evidence: {
        spf: spfArr.length > 0,
        dkim: dkimArr.length > 0,
        web: false,
        spfRecord: spfArr[0] || '',
        dkimRecord: dkimArr[0] || '',
        webMatches: []
      }
    };
  }
  
  return best;
}

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

export const GET: APIRoute = async ({ url }) => {
  const startTime = Date.now();
  const rawDomain = url.searchParams.get('domain')?.trim();
  const emailMarketingOnly = url.searchParams.get('email_marketing_only') === 'true';
  const format = url.searchParams.get('format') || 'json'; // json, xml, csv
  
  if (!rawDomain) {
    return new Response(JSON.stringify({ 
      error: 'Domain parameter is required' 
    }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Sanitize the domain input
  const domain = sanitizeDomain(rawDomain);
  
  // Basic domain validation after sanitization
  if (!/^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?(\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?)*$/.test(domain)) {
    return new Response(JSON.stringify({ 
      error: `Invalid domain format after sanitization: ${domain}` 
    }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const [spf, dkim, web, txtRecords] = await Promise.all([
      getSPF(domain), 
      getDKIM(domain), 
      getWebSignals(domain),
      getTXTRecords(domain)
    ]);
    
    const urlsJoined = web;
    let result = emailMarketingOnly ? score(spf, dkim, urlsJoined, emailMarketingRules) : score(spf, dkim, urlsJoined);
    
    // Check for email marketing verification codes in TXT records
    const txtJoined = txtRecords.join(' ');
    
    // Sendinblue/Brevo verification codes
    if ((txtJoined.includes('brevo-code:') || txtJoined.includes('Sendinblue-code:')) && (!result || result.name === 'Microsoft 365/Outlook' || result.name === 'Google Workspace' || emailMarketingOnly)) {
      result = {
        name: 'Sendinblue/Brevo',
        score: 5,
        evidence: {
          spf: false,
          dkim: false,
          web: false,
          spfRecord: '',
          dkimRecord: '',
          webMatches: [],
          txtVerification: txtRecords.find(r => r.includes('brevo-code:') || r.includes('Sendinblue-code:')) || ''
        }
      };
    }
    
    // Mailchimp verification codes
    else if (txtJoined.includes('mailchimp-verification:') && (!result || result.name === 'Microsoft 365/Outlook' || result.name === 'Google Workspace' || emailMarketingOnly)) {
      result = {
        name: 'Mailchimp',
        score: 5,
        evidence: {
          spf: false,
          dkim: false,
          web: false,
          spfRecord: '',
          dkimRecord: '',
          webMatches: [],
          txtVerification: txtRecords.find(r => r.includes('mailchimp-verification:')) || ''
        }
      };
    }
    
    // Klaviyo verification codes
    else if (txtJoined.includes('klaviyo-verification:') && (!result || result.name === 'Microsoft 365/Outlook' || result.name === 'Google Workspace' || emailMarketingOnly)) {
      result = {
        name: 'Klaviyo',
        score: 5,
        evidence: {
          spf: false,
          dkim: false,
          web: false,
          spfRecord: '',
          dkimRecord: '',
          webMatches: [],
          txtVerification: txtRecords.find(r => r.includes('klaviyo-verification:')) || ''
        }
      };
    }
    
    // HubSpot verification codes
    else if (txtJoined.includes('hubspot-verification:') && (!result || result.name === 'Microsoft 365/Outlook' || result.name === 'Google Workspace' || emailMarketingOnly)) {
      result = {
        name: 'HubSpot',
        score: 5,
        evidence: {
          spf: false,
          dkim: false,
          web: false,
          spfRecord: '',
          dkimRecord: '',
          webMatches: [],
          txtVerification: txtRecords.find(r => r.includes('hubspot-verification:')) || ''
        }
      };
    }
    
    // ActiveCampaign verification codes
    else if (txtJoined.includes('activecampaign-verification:') && (!result || result.name === 'Microsoft 365/Outlook' || result.name === 'Google Workspace' || emailMarketingOnly)) {
      result = {
        name: 'ActiveCampaign',
        score: 5,
        evidence: {
          spf: false,
          dkim: false,
          web: false,
          spfRecord: '',
          dkimRecord: '',
          webMatches: [],
          txtVerification: txtRecords.find(r => r.includes('activecampaign-verification:')) || ''
        }
      };
    }
    
    // ConvertKit verification codes
    else if (txtJoined.includes('convertkit-verification:') && (!result || result.name === 'Microsoft 365/Outlook' || result.name === 'Google Workspace' || emailMarketingOnly)) {
      result = {
        name: 'ConvertKit',
        score: 5,
        evidence: {
          spf: false,
          dkim: false,
          web: false,
          spfRecord: '',
          dkimRecord: '',
          webMatches: [],
          txtVerification: txtRecords.find(r => r.includes('convertkit-verification:')) || ''
        }
      };
    }
    
    // MailerLite verification codes
    else if (txtJoined.includes('mailerlite-verification:') && (!result || result.name === 'Microsoft 365/Outlook' || result.name === 'Google Workspace' || emailMarketingOnly)) {
      result = {
        name: 'MailerLite',
        score: 5,
        evidence: {
          spf: false,
          dkim: false,
          web: false,
          spfRecord: '',
          dkimRecord: '',
          webMatches: [],
          txtVerification: txtRecords.find(r => r.includes('mailerlite-verification:')) || ''
        }
      };
    }
    
    // Constant Contact verification codes
    else if (txtJoined.includes('constantcontact-verification:') && (!result || result.name === 'Microsoft 365/Outlook' || result.name === 'Google Workspace' || emailMarketingOnly)) {
      result = {
        name: 'Constant Contact',
        score: 5,
        evidence: {
          spf: false,
          dkim: false,
          web: false,
          spfRecord: '',
          dkimRecord: '',
          webMatches: [],
          txtVerification: txtRecords.find(r => r.includes('constantcontact-verification:')) || ''
        }
      };
    }
    
    // AWeber verification codes
    else if (txtJoined.includes('aweber-verification:') && (!result || result.name === 'Microsoft 365/Outlook' || result.name === 'Google Workspace' || emailMarketingOnly)) {
      result = {
        name: 'AWeber',
        score: 5,
        evidence: {
          spf: false,
          dkim: false,
          web: false,
          spfRecord: '',
          dkimRecord: '',
          webMatches: [],
          txtVerification: txtRecords.find(r => r.includes('aweber-verification:')) || ''
        }
      };
    }
    
    // GetResponse verification codes
    else if (txtJoined.includes('getresponse-verification:') && (!result || result.name === 'Microsoft 365/Outlook' || result.name === 'Google Workspace' || emailMarketingOnly)) {
      result = {
        name: 'GetResponse',
        score: 5,
        evidence: {
          spf: false,
          dkim: false,
          web: false,
          spfRecord: '',
          dkimRecord: '',
          webMatches: [],
          txtVerification: txtRecords.find(r => r.includes('getresponse-verification:')) || ''
        }
      };
    }
    
    // EngineMailer verification codes
    else if (txtJoined.includes('enginemailer-verification:') && (!result || result.name === 'Microsoft 365/Outlook' || result.name === 'Google Workspace' || emailMarketingOnly)) {
      result = {
        name: 'EngineMailer',
        score: 5,
        evidence: {
          spf: false,
          dkim: false,
          web: false,
          spfRecord: '',
          dkimRecord: '',
          webMatches: [],
          txtVerification: txtRecords.find(r => r.includes('enginemailer-verification:')) || ''
        }
      };
    }

    // Return simplified response for email marketing only
    if (emailMarketingOnly) {
      const responseData = {
        domain,
        email_marketing_platform: result?.name ?? null,
        confidence_score: result?.score ?? 0,
        timestamp: new Date().toISOString()
      };

      // Handle different output formats
      if (format === 'xml') {
        const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<esp_scan>
  <domain>${domain}</domain>
  <email_marketing_platform>${responseData.email_marketing_platform || 'Not Detected'}</email_marketing_platform>
  <confidence_score>${responseData.confidence_score}</confidence_score>
  <timestamp>${responseData.timestamp}</timestamp>
</esp_scan>`;
        
        return new Response(xmlResponse, { 
          headers: { 
            'Content-Type': 'application/xml',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
          }
        });
      } else if (format === 'csv') {
        const csvResponse = `domain,email_marketing_platform,confidence_score,timestamp\n${domain},"${responseData.email_marketing_platform || 'Not Detected'}",${responseData.confidence_score},"${responseData.timestamp}"`;
        
        return new Response(csvResponse, { 
          headers: { 
            'Content-Type': 'text/csv',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
          }
        });
      }

      return new Response(JSON.stringify(responseData), { 
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      });
    }

    // Enhanced B2B Marketing Intelligence
    const marketingTech = detectMarketingTech(web);
    const domainAge = await estimateDomainAge(domain);
    const espAnalysis = result?.name ? analyzeESPAdoption(result.name, domainAge.age, marketingTech) : null;

    return new Response(JSON.stringify({
      domain,
      esp_guess: result?.name ?? null,
      confidence_score: result?.score ?? 0,
      max_possible_score: 9, // 3 (SPF) + 4 (DKIM) + 2 (Web)
      evidence: result?.evidence ?? null,
      raw_data: {
        spf_records: spf,
        dkim_records: dkim,
        web_urls_found: urlsJoined.split('\n').filter(url => url.trim()).length
      },
      // B2B Marketing Intelligence
      marketing_intelligence: {
        esp_analysis: espAnalysis,
        marketing_tech_stack: marketingTech,
        domain_age: domainAge,
        competitive_insights: {
          esp_maturity: espAnalysis?.maturity || "Unknown",
          estimated_adoption_time: espAnalysis?.estimatedAdoption || "Unknown",
          marketing_sophistication: Object.keys(marketingTech).length >= 3 ? "Advanced" : 
                                   Object.keys(marketingTech).length >= 1 ? "Intermediate" : "Basic",
          potential_upsell_opportunities: generateUpsellOpportunities(marketingTech, result?.name || null)
        }
      },
      timestamp: new Date().toISOString()
    }), { 
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate' // No caching
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: 'Failed to scan domain',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
