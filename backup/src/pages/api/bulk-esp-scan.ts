import type { APIRoute } from 'astro';

interface GoogleSheetsResponse {
  values: string[][];
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const { spreadsheetId, range, sheetId, apiKey } = await request.json();
    
    if (!spreadsheetId || !range || !apiKey) {
      return new Response(JSON.stringify({ 
        error: 'Missing required parameters: spreadsheetId, range, apiKey' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Fetch data from Google Sheets
    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
    const sheetsResponse = await fetch(sheetsUrl);
    
    if (!sheetsResponse.ok) {
      return new Response(JSON.stringify({ 
        error: 'Failed to fetch from Google Sheets',
        details: await sheetsResponse.text()
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const sheetsData: GoogleSheetsResponse = await sheetsResponse.json();
    const domains = sheetsData.values?.flat().filter(domain => 
      domain && 
      typeof domain === 'string' && 
      domain.trim() && 
      !domain.startsWith('http') &&
      domain.includes('.')
    ) || [];

    if (domains.length === 0) {
      return new Response(JSON.stringify({ 
        error: 'No valid domains found in the specified range' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Scan each domain using our ESP API
    const results = await Promise.allSettled(
      domains.map(async (domain) => {
        try {
          const espResponse = await fetch(`${request.url.split('/api/')[0]}/api/esp-scan?domain=${encodeURIComponent(domain.trim())}&email_marketing_only=true`);
          const espData = await espResponse.json();
          
          return {
            domain: domain.trim(),
            email_marketing_platform: espData.email_marketing_platform || 'Not Detected',
            confidence_score: espData.confidence_score || 0,
            status: 'success'
          };
        } catch (error) {
          return {
            domain: domain.trim(),
            email_marketing_platform: 'Error',
            confidence_score: 0,
            status: 'error',
            error: error instanceof Error ? error.message : 'Unknown error'
          };
        }
      })
    );

    const processedResults = results.map((result, index) => {
      if (result.status === 'fulfilled') {
        return result.value;
      } else {
        return {
          domain: domains[index] || 'Unknown',
          email_marketing_platform: 'Error',
          confidence_score: 0,
          status: 'error',
          error: result.reason?.message || 'Promise rejected'
        };
      }
    });

    // Group results by ESP for summary
    const espSummary = processedResults.reduce((acc, result) => {
      const esp = result.email_marketing_platform;
      if (!acc[esp]) {
        acc[esp] = { count: 0, domains: [] };
      }
      acc[esp].count++;
      acc[esp].domains.push(result.domain);
      return acc;
    }, {} as Record<string, { count: number; domains: string[] }>);

    return new Response(JSON.stringify({
      summary: {
        total_domains: domains.length,
        successful_scans: processedResults.filter(r => r.status === 'success').length,
        failed_scans: processedResults.filter(r => r.status === 'error').length,
        esp_breakdown: espSummary
      },
      results: processedResults,
      timestamp: new Date().toISOString()
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// GET endpoint for instructions
export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({
    instructions: {
      method: 'POST',
      description: 'Bulk ESP scanning from Google Sheets',
      required_parameters: {
        spreadsheetId: 'Google Sheets spreadsheet ID (from URL)',
        range: 'Sheet range (e.g., "Sheet1!A:A" or "A1:A100")',
        apiKey: 'Google Sheets API key'
      },
      optional_parameters: {
        sheetId: 'Specific sheet ID (if not using range)'
      },
      example_request: {
        spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
        range: 'Sheet1!A:A',
        apiKey: 'your-google-sheets-api-key'
      },
      response_format: {
        summary: 'Overview of scan results',
        results: 'Array of individual domain results',
        timestamp: 'Scan completion time'
      }
    },
    setup_instructions: {
      step1: 'Enable Google Sheets API in Google Cloud Console',
      step2: 'Create API key with Sheets API access',
      step3: 'Make your Google Sheet publicly readable or share with API key',
      step4: 'Extract spreadsheet ID from Google Sheets URL',
      step5: 'Send POST request with domains in specified range'
    }
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
