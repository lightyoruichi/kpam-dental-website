import type { APIRoute } from 'astro';
import toolsData from '../../../public/tools/tools.json';

export const GET: APIRoute = async ({ request }) => {
  const startTime = Date.now();
  
  try {
    // Create simplified version with only essential metadata for ChatGPT
    const simplifiedTools = toolsData.map((tool: any) => ({
      id: tool.id,
      title: tool.title,
      category: tool.category,
      description: tool.description,
      difficulty: tool.difficulty,
      estimatedTime: tool.estimatedTime,
      tags: tool.tags,
      url: `https://mimrgrowthlab.com/tools/${tool.id}`
    }));

    const response = new Response(JSON.stringify(simplifiedTools), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        'Access-Control-Allow-Origin': '*', // Allow ChatGPT access
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });

    // Track API usage in PostHog
    const responseTime = Date.now() - startTime;
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const referer = request.headers.get('referer') || 'direct';
    
    fetch('https://us.i.posthog.com/capture/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: 'phc_5S64abYV4L8jws3mhRRFnFjOFquFbOrPfQTtiMtD8Dy',
        event: 'api_usage',
        properties: {
          endpoint: '/api/gpt.json',
          method: 'GET',
          response_time: responseTime,
          status_code: 200,
          user_agent: userAgent,
          referer: referer,
          timestamp: Date.now(),
          tools_count: simplifiedTools.length,
          api_type: 'chatgpt_integration'
        }
      })
    }).catch(() => {});

    return response;
  } catch (error) {
    const responseTime = Date.now() - startTime;
    
    // Track error in PostHog
    fetch('https://us.i.posthog.com/capture/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: 'phc_5S64abYV4L8jws3mhRRFnFjOFquFbOrPfQTtiMtD8Dy',
        event: 'api_error',
        properties: {
          endpoint: '/api/gpt.json',
          method: 'GET',
          response_time: responseTime,
          status_code: 500,
          error: error instanceof Error ? error.message : 'Unknown error',
          timestamp: Date.now()
        }
      })
    }).catch(() => {});

    return new Response(JSON.stringify({ 
      error: 'Failed to load tools',
      message: 'Simplified tools API for ChatGPT'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
