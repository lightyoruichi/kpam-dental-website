import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  try {
    // Use hardcoded domain for production, fallback for development
    const domain = url.origin || 'https://mimrgrowthlab.com';
    
    // Fetch tools data from API
    const response = await fetch(`${domain}/api/tools.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch tools from API');
    }
    
    const tools = await response.json();
    
    // Generate URLs for all tools
    const toolUrls = tools.map((tool: any) => `/tools/${tool.id}`);
    
    // Base URLs
    const baseUrls = [
      '/',
      '/tools',
      '/privacy',
      '/services'
    ];
    
    // Combine all URLs
    const allUrls = [...baseUrls, ...toolUrls];
    
    // Generate sitemap XML
    const today = new Date().toISOString().split('T')[0];
    
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${domain}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;
    
    return new Response(sitemapXml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      }
    });
    
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  }
}; 