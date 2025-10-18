import type { APIRoute } from 'astro';
import toolsData from '../../../public/tools/tools.json';

export const GET: APIRoute = async ({ request }) => {
  const startTime = Date.now();
  
  try {
    const response = new Response(JSON.stringify(toolsData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      }
    });

    // Track API usage in PostHog
    const responseTime = Date.now() - startTime;
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const referer = request.headers.get('referer') || 'direct';
    
    // Send to PostHog (async, don't block response)
    fetch('https://us.i.posthog.com/capture/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: 'phc_5S64abYV4L8jws3mhRRFnFjOFquFbOrPfQTtiMtD8Dy',
        event: 'api_usage',
        properties: {
          endpoint: '/api/tools.json',
          method: 'GET',
          response_time: responseTime,
          status_code: 200,
          user_agent: userAgent,
          referer: referer,
          timestamp: Date.now(),
          data_size: JSON.stringify(toolsData).length
        }
      })
    }).catch(() => {}); // Ignore errors to not block API response

    return response;
  } catch (error) {
    const responseTime = Date.now() - startTime;
    
    // Track error in PostHog
    fetch('https://us.i.posthog.com/capture/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: 'phc_5S64abYV4L8jws3mhRRFnFjOFquFbOrPfQTtiMtD8Dy',
        event: 'api_error',
        properties: {
          endpoint: '/api/tools.json',
          method: 'GET',
          response_time: responseTime,
          status_code: 500,
          error: error instanceof Error ? error.message : 'Unknown error',
          timestamp: Date.now()
        }
      })
    }).catch(() => {});

    return new Response(JSON.stringify({ error: 'Failed to load tools' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 