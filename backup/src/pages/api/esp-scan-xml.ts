import type { APIRoute } from 'astro';
import { resolveTxt, resolveCname } from 'node:dns/promises';
import * as cheerio from 'cheerio';

// Import the same rules and functions from the main API
const selectors = ['k1','k2','s1','s2','selector1','selector2','m1','m2','kl','litesrv','sib','brevo','sendinblue'];

// EMAIL MARKETING PLATFORMS (Priority 1)
const emailMarketingRules = [
  { name: 'Mailchimp', spf: /servers\.mcsv\.net/i, dkim: /dkim\.mcsv\.net/i, web: /list-manage\.com|\.mcsv\.net|\.mailchimp\.com/i },
  { name: 'Klaviyo', spf: /klaviyo|klaviyodns\.com/i, dkim: /klaviyo|klaviyodns\.com/i, web: /static\.klaviyo\.com\/onsite\/js\/klaviyo\.js|\.klaviyo\.com/i },
  { name: 'SendGrid', spf: /sendgrid\.net/i, dkim: /\.wl\.sendgrid\.net/i, web: /sendgrid\.net/i },
  { name: 'HubSpot', spf: /hubspotemail\.net/i, dkim: /hubspotemail\.net/i, web: /js\.hs-analytics\.net|js\.hs-scripts\.com|hs-forms\.com/i },
  { name: 'Campaign Monitor', spf: /_spf\.createsend\.com|cmail\d+\.com/i, dkim: /createsend\.com|cmail\d+\.com/i, web: /\.createsend\.com|\.campaignmonitor\.com/i },
  { name: 'ActiveCampaign', spf: null, dkim: /acems|acemsrvc|em[sd]\d/i, web: /trackcmp\.net\/visit|prism\.app-us1\.com\/prism\.js|\.activecampaign\.com/i },
  { name: 'Marketo', spf: /mktomail\.com/i, dkim: /mktomail\.com|marketo/i, web: /munchkin\.js|\.marketo\.(net|com)/i },
  { name: 'SFMC', spf: /cust-spf\.exacttarget\.com/i, dkim: /exacttarget/i, web: /\.exacttarget\.com/i },
  { name: 'MailerLite', spf: /spf\.mailerlite/i, dkim: /mailerlite|litesrv\._domainkey/i, web: /\.mailerlite\.com/i },
  { name: 'ConvertKit', spf: null, dkim: /convertkit/i, web: /forms\.convertkit\.com|app\.convertkit\.com|\.convertkit\.com/i },
  { name: 'Drip', spf: null, dkim: /drip/i, web: /assets\.getdrip\.com|tag\.getdrip\.com|\.getdrip\.com/i },
  { name: 'Pardot', spf: null, dkim: /pardot/i, web: /pi\.pardot\.com|\.pardot\.com/i },
  { name: 'Constant Contact', spf: /constantcontact\.com/i, dkim: /constantcontact/i, web: /constantcontact\.com/i },
  { name: 'AWeber', spf: /aweber\.com/i, dkim: /aweber/i, web: /aweber\.com/i },
  { name: 'GetResponse', spf: /getresponse\.com/i, dkim: /getresponse/i, web: /getresponse\.com/i },
  { name: 'Sendinblue/Brevo', spf: /spf\.sendinblue\.com|spf\.brevo\.com/i, dkim: /sib|brevo|sendinblue/i, web: /\.sendinblue\.com|\.brevo\.com/i },
  { name: 'EngineMailer', spf: /enginemailer\.org/i, dkim: /enginemailer/i, web: /\.enginemailer\.org|\.enginemailer\.com/i }
];

// INTERNAL EMAIL SYSTEMS (Priority 2)
const internalEmailRules = [
  { name: 'Microsoft 365/Outlook', spf: /spf\.protection\.outlook\.com/i, dkim: /selector1|selector2|\.onmicrosoft\.com/i, web: /\.microsoft\.com|\.outlook\.com/i },
  { name: 'Google Workspace', spf: /_spf\.google\.com/i, dkim: /google|\.googleapis\.com/i, web: /\.googleapis\.com|\.google\.com/i }
];

// FALLBACK RULES (Priority 3)
const fallbackRules = [
  { name: 'Email Authentication Configured', spf: /v=spf1/i, dkim: /v=DKIM1/i, web: null }
];

// Combine rules with priority order
const rules = [...emailMarketingRules, ...internalEmailRules, ...fallbackRules];

async function getSPF(domain: string): Promise<string[]> {
  try {
    const records = await resolveTxt(domain);
    return records.flat().filter(record => record.includes('v=spf1'));
  } catch (error) {
    return [];
  }
}

async function getDKIM(domain: string): Promise<string[]> {
  const dkimRecords: string[] = [];
  
  for (const selector of selectors) {
    try {
      // Try TXT record first (standard for DKIM)
      const txtRecords = await resolveTxt(`${selector}._domainkey.${domain}`);
      dkimRecords.push(...txtRecords.flat());
    } catch (error) {
      try {
        // Fallback to CNAME
        const cnameRecords = await resolveCname(`${selector}._domainkey.${domain}`);
        dkimRecords.push(...cnameRecords);
      } catch (cnameError) {
        // Continue to next selector
      }
    }
  }
  
  return dkimRecords;
}

async function getWebSignals(domain: string): Promise<string> {
  try {
    const response = await fetch(`https://${domain}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ESP-Scanner/1.0)'
      },
      signal: AbortSignal.timeout(5000)
    });
    
    if (!response.ok) return '';
    
    const html = await response.text();
    const $ = cheerio.load(html);
    
    const urls: string[] = [];
    $('script[src], link[href], img[src]').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('href');
      if (src) urls.push(src);
    });
    
    return urls.join('\n');
  } catch (error) {
    return '';
  }
}

async function getTXTRecords(domain: string): Promise<string[]> {
  try {
    const records = await resolveTxt(domain);
    return records.flat();
  } catch (error) {
    return [];
  }
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
      webMatches: [] as string[],
      txtVerification: ''
    };
    
    // SPF scoring (3 points max)
    if (r.spf) {
      for (const spf of spfArr) {
        if (r.spf.test(spf)) {
          score += 3;
          evidence.spf = true;
          evidence.spfRecord = spf;
          break;
        }
      }
    }
    
    // DKIM scoring (4 points max)
    if (r.dkim && dkimArr.length > 0) {
      for (const dkim of dkimArr) {
        if (r.dkim.test(dkim)) {
          score += 4;
          evidence.dkim = true;
          evidence.dkimRecord = dkim;
          break;
        }
      }
    }
    
    // Web signals (2 points max)
    if (r.web && urlsJoined) {
      const matches = urlsJoined.match(r.web);
      if (matches) {
        score += 2;
        evidence.web = true;
        evidence.webMatches = matches;
      }
    }
    
    if (score > (best?.score || 0)) {
      best = { name: r.name, score, evidence };
    }
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
  const rawDomain = url.searchParams.get('domain')?.trim();
  const emailMarketingOnly = url.searchParams.get('email_marketing_only') === 'true';
  
  if (!rawDomain) {
    return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<error>Domain parameter is required</error>`, { 
      status: 400,
      headers: { 'Content-Type': 'application/xml' }
    });
  }

  // Sanitize the domain input
  const domain = sanitizeDomain(rawDomain);
  
  // Basic domain validation after sanitization
  if (!/^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?(\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?)*$/.test(domain)) {
    return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<error>Invalid domain format after sanitization: ${domain}</error>`, { 
      status: 400,
      headers: { 'Content-Type': 'application/xml' }
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

    // Return XML response
    const espName = result?.name ?? 'Not Detected';
    const confidenceScore = result?.score ?? 0;
    
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<esp_scan>
  <domain>${domain}</domain>
  <email_marketing_platform>${espName}</email_marketing_platform>
  <confidence_score>${confidenceScore}</confidence_score>
  <timestamp>${new Date().toISOString()}</timestamp>
</esp_scan>`;

    return new Response(xmlResponse, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });

  } catch (error) {
    return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<error>Failed to scan domain: ${error instanceof Error ? error.message : 'Unknown error'}</error>`, { 
      status: 500,
      headers: { 'Content-Type': 'application/xml' }
    });
  }
};
