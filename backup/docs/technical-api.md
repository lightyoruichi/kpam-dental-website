# MIMR Growth Lab - Technical API Documentation

> **Developer Reference for MIMR Growth Lab Website**

## 📋 Table of Contents

1. [Configuration Files](#configuration-files)
2. [Astro Configuration](#astro-configuration)
3. [Tailwind CSS Configuration](#tailwind-css-configuration)
4. [Tools Implementation](#tools-implementation)
5. [API Endpoints](#api-endpoints)
6. [Build System](#build-system)
7. [Deployment Configuration](#deployment-configuration)
8. [External Integrations](#external-integrations)
9. [Performance Optimization](#performance-optimization)
10. [Security Considerations](#security-considerations)

---

## ⚙️ Configuration Files

### Package.json
```json
{
  "name": "mmir-web",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/cloudflare": "^12.6.0",
    "@astrojs/svelte": "^7.1.0",
    "@astrojs/tailwind": "^6.0.2",
    "astro": "^5.12.0",
    "svelte": "^5.25.7",
    "tailwindcss": "^3.4.17"
  }
}
```

### TypeScript Configuration
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

---

## 🚀 Astro Configuration

### astro.config.mjs
```javascript
// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	site: 'https://mimrgrowthlab.com',
	integrations: [
		svelte(), 
		tailwind()
	],
	output: 'server',
	adapter: cloudflare(),
	server: {
		headers: {
			'X-Robots-Tag': 'index, follow',
			'X-Content-Type-Options': 'nosniff',
			'X-Frame-Options': 'DENY',
			'X-XSS-Protection': '1; mode=block',
			'Referrer-Policy': 'strict-origin-when-cross-origin'
		}
	}
});
```

### Key Configuration Options

#### Site Configuration
- **site**: Base URL for the website
- **output**: Server-side rendering for dynamic content
- **adapter**: Cloudflare Pages deployment

#### Integrations
- **@astrojs/tailwind**: Tailwind CSS integration
- **@astrojs/svelte**: Svelte component support
- **@astrojs/cloudflare**: Cloudflare Pages deployment

#### Security Headers
- **X-Robots-Tag**: Allow search engine indexing
- **X-Content-Type-Options**: Prevent MIME type sniffing
- **X-Frame-Options**: Prevent clickjacking
- **X-XSS-Protection**: XSS protection
- **Referrer-Policy**: Control referrer information

---

## 🎨 Tailwind CSS Configuration

### tailwind.config.cjs
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Xanh Mono', 'monospace'],
      },
      colors: {
        'redacted': '#000000',
      },
    },
  },
  plugins: [],
};
```

### Custom CSS Classes

#### Global Styles (globals.css)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Styles */
.redacted {
  background-color: #000000;
  color: #000000;
  user-select: none;
}

.redacted:hover {
  background-color: #ffffff;
  color: #000000;
}

/* Tools Specific Styles */
.tool-card {
  @apply border border-gray-600 p-6 hover:border-red-500 transition-colors bg-gray-900;
}

.ai-platform-btn {
  @apply bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition-all duration-200 text-sm flex items-center gap-2;
}

.search-input {
  @apply w-full bg-gray-800 border border-gray-600 text-white px-4 py-3 rounded-lg focus:border-red-500 focus:outline-none;
}

.filter-select {
  @apply bg-gray-800 border border-gray-600 text-white px-3 py-2 rounded-lg focus:border-red-500 focus:outline-none;
}
```

---

## 🛠 Tools Implementation

### Tools Data Structure

**Data Source**: `public/tools/tools.json`
```javascript
[
  {
    "id": "tool-slug",
    "title": "Tool Name",
    "category": "Category",
    "description": "Tool description",
    "difficulty": "Beginner/Intermediate/Advanced",
    "estimatedTime": "15-30 minutes",
    "tags": ["tag1", "tag2"],
    "content": "Full tool content as string"
  }
]
```

### Tools Listing Page (`src/pages/tools.astro`)

#### Data Loading
```javascript
// Fetch tools data from API
let tools = [];
try {
  const response = await fetch(`${Astro.url.origin}/api/tools.json`);
  if (response.ok) {
    tools = await response.json();
  } else {
    console.error('Failed to fetch tools from API');
  }
} catch (error) {
  console.error('Error fetching tools:', error);
}

// Ensure tools have required properties
const validatedTools = tools.map((tool: any) => ({
  id: tool.id || '',
  title: tool.title || '',
  description: tool.description || '',
  category: tool.category || '',
  difficulty: tool.difficulty || '',
  estimatedTime: tool.estimatedTime || '',
  tags: Array.isArray(tool.tags) ? tool.tags : [],
  content: tool.content || ''
}));
```

#### Search & Filter Implementation
```javascript
// URL parameter handling
const searchParams = Astro.url.searchParams;
const searchTerm = searchParams.get('search') || '';
const selectedCategory = searchParams.get('category') || '';
const selectedTags = searchParams.getAll('tag');

// Filter logic
const filteredTools = validatedTools.filter(tool => {
  const searchLower = searchTerm.toLowerCase().trim();
  const matchesSearch = !searchTerm || 
    (tool.title && tool.title.toLowerCase().includes(searchLower)) ||
    (tool.description && tool.description.toLowerCase().includes(searchLower)) ||
    (Array.isArray(tool.tags) && tool.tags.some(tag => tag && tag.toLowerCase().includes(searchLower)));
  
  const matchesCategory = !selectedCategory || tool.category === selectedCategory;
  const matchesTags = selectedTags.length === 0 || 
    (Array.isArray(tool.tags) && selectedTags.some(tag => tool.tags.includes(tag)));
  
  return matchesSearch && matchesCategory && matchesTags;
});
```

#### Pagination
```javascript
// Pagination settings
const ITEMS_PER_PAGE = 12;
const currentPage = parseInt(searchParams.get('page') || '1');

// Pagination logic
const totalPages = Math.max(1, Math.ceil(filteredTools.length / ITEMS_PER_PAGE));
const startIndex = Math.max(0, (currentPage - 1) * ITEMS_PER_PAGE);
const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredTools.length);
const paginatedTools = filteredTools.slice(startIndex, endIndex);
```

#### AI Platform Integration
```javascript
// AI platform URLs
const aiPlatformUrls = {
  claude: `https://claude.ai/new?q=${encodeURIComponent(`Execute the ${tool.title} prompt at https://mimrgrowthlab.com/tools/${tool.id}.md`)}`,
  chatgpt: `https://chatgpt.com/?q=${encodeURIComponent(`Execute the ${tool.title} prompt at https://mimrgrowthlab.com/tools/${tool.id}.md`)}`,
  perplexity: `https://www.perplexity.ai/?q=${encodeURIComponent(`Execute the ${tool.title} prompt at https://mimrgrowthlab.com/tools/${tool.id}.md`)}`
};
```

### Individual Tool Pages (`src/pages/tools/[toolId].astro`)

#### Data Loading
```javascript
// Get the tool ID from the URL
const { toolId } = Astro.params;

// Fetch tools data from API
let tools = [];
let tool = null;

try {
  const response = await fetch(`${Astro.url.origin}/api/tools.json`);
  if (response.ok) {
    tools = await response.json();
    // Find the specific tool
    tool = tools.find((t: any) => t.id === toolId);
  } else {
    console.error('Failed to fetch tools from API');
  }
} catch (error) {
  console.error('Error fetching tools:', error);
}

// If tool doesn't exist, return 404
if (!tool) {
  return Astro.redirect('/404');
}
```

#### Content Processing
```javascript
// Extract prompt content from tool.content
let promptContent = tool.content;

// Try to extract the prompt content starting from "Step 1" if available
const step1Index = promptContent.indexOf('### Step 1:');
if (step1Index !== -1) {
  // Get content from Step 1 onwards, but stop before "## Example" or "## Implementation"
  const exampleIndex = promptContent.indexOf('## Example');
  const implementationIndex = promptContent.indexOf('## Implementation');
  
  let endIndex = promptContent.length;
  if (exampleIndex !== -1 && exampleIndex > step1Index) {
    endIndex = exampleIndex;
  }
  if (implementationIndex !== -1 && implementationIndex > step1Index && implementationIndex < endIndex) {
    endIndex = implementationIndex;
  }
  
  promptContent = promptContent.substring(step1Index, endIndex).trim();
}
```

#### Client-side JavaScript
```javascript
// Copy functionality
const copyContentBtn = document.getElementById('copyContent') as HTMLButtonElement;

if (copyContentBtn) {
  copyContentBtn.addEventListener('click', async () => {
    const content = copyContentBtn.dataset.content || '';
    const originalText = copyContentBtn.innerHTML;
    
    copyContentBtn.innerHTML = `
      <svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
      </svg>
      Copying...
    `;
    copyContentBtn.disabled = true;
    
    try {
      await navigator.clipboard.writeText(content);
      copyContentBtn.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        Copied!
      `;
      showToast('Content copied to clipboard!', 'success');
      
      setTimeout(() => {
        copyContentBtn.innerHTML = originalText;
        copyContentBtn.disabled = false;
      }, 2000);
    } catch (err) {
      copyContentBtn.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        Failed
      `;
      showToast('Failed to copy content.', 'error');
      
      setTimeout(() => {
        copyContentBtn.innerHTML = originalText;
        copyContentBtn.disabled = false;
      }, 2000);
    }
  });
}
```

---

## 🔌 API Endpoints

### Tools API (`/api/tools.json`)

**File**: `src/pages/api/tools.json.ts`

**Purpose**: Serve tools data as JSON API

**Implementation**:
```typescript
import type { APIRoute } from 'astro';
import toolsData from '../../../public/tools/tools.json';

export const GET: APIRoute = async () => {
  try {
    return new Response(JSON.stringify(toolsData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to load tools' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
```

**Features**:
- **Data Source**: Reads from `public/tools/tools.json`
- **Caching**: 1-hour cache headers for performance
- **Error Handling**: Graceful error responses
- **Content-Type**: Proper JSON headers

**Response Format**:
```json
[
  {
    "id": "tool-slug",
    "title": "Tool Name",
    "category": "Category",
    "description": "Tool description",
    "difficulty": "Beginner/Intermediate/Advanced",
    "estimatedTime": "15-30 minutes",
    "tags": ["tag1", "tag2"],
    "content": "Full tool content as string"
  }
]
```

### Dynamic Sitemap (`/sitemap.xml`)

**File**: `src/pages/sitemap.xml.ts`

**Purpose**: Generate dynamic sitemap with all tool pages

**Implementation**:
```typescript
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
    const baseUrls = ['/', '/tools'];
    
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
```

**Features**:
- **Dynamic Generation**: Fetches tools from API endpoint
- **Complete Coverage**: Includes homepage, tools page, and all individual tool pages
- **SEO Optimized**: Proper XML format with lastmod, changefreq, and priority
- **Caching**: 1-hour cache for performance
- **Cloudflare Compatible**: No filesystem operations

**Sitemap Structure**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mimrgrowthlab.com/</loc>
    <lastmod>2025-08-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <!-- Additional URLs for tools page and individual tools -->
</urlset>
```

---

## 🔧 Build System

### Build Process
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Build Output
```
dist/
├── assets/          # Compiled assets
├── _astro/          # Astro generated files
├── _worker.js/      # Cloudflare worker files
├── index.html       # Main page
├── tools/           # Tools pages
│   ├── index.html   # Tools listing page
│   └── [toolId]/    # Individual tool pages
└── api/             # API endpoints
    └── tools.json   # Tools API endpoint
```

### Asset Optimization
- **Images**: Automatic optimization via Astro
- **CSS**: Minification and purging
- **JavaScript**: Tree shaking and minification
- **Fonts**: Preloading and optimization

---

## 🌐 Deployment Configuration

### Cloudflare Pages
```toml
# Build settings
[build]
command = "npm run build"
publish = "dist"

# Environment variables
[env]
NODE_VERSION = "18"
```

### Environment Variables
```bash
# Production
NODE_VERSION=18
NPM_FLAGS=--production

# Development
NODE_ENV=development
```

---

## 🔗 External Integrations

### Google Tag Manager
```html
<!-- GTM Script -->
<script>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TZVBZM6N');
</script>

<!-- GTM NoScript -->
<noscript>
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZVBZM6N"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
```

### Enhanced Analytics Tracking
```javascript
// Tool view tracking
dataLayer.push({
  'event': 'tool_view',
  'tool_name': toolName,
  'tool_category': category
});

// AI platform click tracking
dataLayer.push({
  'event': 'ai_platform_click',
  'tool_name': toolName,
  'ai_platform': 'claude'
});

// Search tracking
dataLayer.push({
  'event': 'tool_search',
  'search_term': searchTerm,
  'results_count': resultsCount
});

// Form submissions
dataLayer.push({
  'event': 'form_submit',
  'form_name': 'client_intake'
});
```

### Tally.so Form Integration
```html
<iframe
  data-tally-src="https://tally.so/r/mZggx5"
  width="100%"
  height="500"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
  title="MIMR // Client Extraction Briefing">
</iframe>
```

### Google Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Xanh+Mono:ital@0;1&display=swap"
  rel="stylesheet"
/>
```

---

## ⚡ Performance Optimization

### Image Optimization
```html
<!-- Optimized image loading -->
<img 
  src="/assets/logo.svg" 
  alt="MIMR Logo" 
  class="h-12"
  loading="lazy"
  decoding="async"
/>
```

### Font Optimization
```css
/* Font display optimization */
@font-face {
  font-family: 'Xanh Mono';
  font-display: swap;
  src: url('https://fonts.googleapis.com/css2?family=Xanh+Mono&display=swap');
}
```

### Resource Hints
```html
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://tally.so" />
<link rel="preconnect" href="https://www.googletagmanager.com" />
```

### Tools Performance
```javascript
// Debounced search
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const debouncedSearch = debounce(updateFilters, 300);
searchInput.addEventListener('input', debouncedSearch);
```

---

## 🔒 Security Considerations

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self'; 
           script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://tally.so;
           style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
           font-src 'self' https://fonts.gstatic.com;
           img-src 'self' data: https:;
           frame-src https://tally.so;">
```

### Security Headers
```javascript
// Security headers for production
const securityHeaders = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};
```

### External Link Security
```html
<!-- Secure external links -->
<a href="https://claude.ai" 
   target="_blank" 
   rel="noopener noreferrer"
   class="external-link">
  External Link
</a>
```

### Clipboard API Security
```javascript
// Secure clipboard access
const copyToClipboard = async (text) => {
  try {
    // Check if clipboard API is available
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for non-secure contexts
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    }
  } catch (err) {
    console.error('Failed to copy: ', err);
    return false;
  }
};
```

---

## 📊 Analytics & Tracking

### Event Tracking
```javascript
// Enhanced GTM Event Tracking
dataLayer.push({
  'event': 'tool_view',
  'tool_name': toolName,
  'tool_category': category,
  'page_location': window.location.href
});

// AI platform click tracking
dataLayer.push({
  'event': 'ai_platform_click',
  'tool_name': toolName,
  'ai_platform': 'claude',
  'click_success': true
});

// Search tracking
dataLayer.push({
  'event': 'tool_search',
  'search_term': searchTerm,
  'results_count': resultsCount,
  'search_duration': searchDuration
});
```

### Performance Monitoring
```javascript
// Core Web Vitals tracking
window.addEventListener('load', () => {
  // LCP (Largest Contentful Paint)
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    dataLayer.push({
      'event': 'web_vitals',
      'metric_name': 'LCP',
      'value': lastEntry.startTime
    });
  }).observe({ entryTypes: ['largest-contentful-paint'] });
});

// Tool usage analytics
const trackToolUsage = (toolId, action) => {
  dataLayer.push({
    'event': 'tool_interaction',
    'tool_id': toolId,
    'action': action,
    'timestamp': Date.now()
  });
};
```

---

## 🧪 Testing & Quality Assurance

### Lighthouse Testing
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run Lighthouse audit
lighthouse https://mimrgrowthlab.com --output html --output-path ./lighthouse-report.html
```

### Performance Budgets
```javascript
// Performance budget configuration
const performanceBudget = {
  'first-contentful-paint': 1000,
  'largest-contentful-paint': 2500,
  'first-input-delay': 100,
  'cumulative-layout-shift': 0.1,
};
```

### Browser Testing
```javascript
// Browser support matrix
const supportedBrowsers = {
  chrome: '>=90',
  firefox: '>=88',
  safari: '>=14',
  edge: '>=90'
};
```

### Tools Testing
```javascript
// Test search functionality
const testSearch = () => {
  const searchInput = document.getElementById('searchInput');
  searchInput.value = 'test';
  searchInput.dispatchEvent(new Event('input'));
  
  // Check if results are filtered
  const results = document.querySelectorAll('.tool-card');
  return results.length > 0;
};

// Test copy functionality
const testCopy = async () => {
  const copyBtn = document.querySelector('#copyContent');
  copyBtn.click();
  
  // Wait for copy to complete
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Check if button text changed
  return copyBtn.textContent === 'Copied!';
};
```

---

## 🔄 Maintenance & Updates

### Dependency Updates
```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Update specific package
npm install package-name@latest
```

### Security Audits
```bash
# Run security audit
npm audit

# Fix security issues
npm audit fix

# Force fix (may break things)
npm audit fix --force
```

### Performance Monitoring
```javascript
// Performance monitoring script
const performanceMetrics = {
  measurePageLoad: () => {
    const navigation = performance.getEntriesByType('navigation')[0];
    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      totalTime: navigation.loadEventEnd - navigation.fetchStart
    };
  },
  
  measureToolPerformance: () => {
    const toolLoadTimes = [];
    document.querySelectorAll('.tool-card').forEach(card => {
      const loadTime = card.dataset.loadTime;
      if (loadTime) toolLoadTimes.push(parseFloat(loadTime));
    });
    return {
      averageLoadTime: toolLoadTimes.reduce((a, b) => a + b, 0) / toolLoadTimes.length,
      totalTools: toolLoadTimes.length
    };
  }
};
```

---

## 📞 Developer Support

### Common Commands
```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview build

# Maintenance
npm audit               # Security audit
npm outdated            # Check outdated packages
npm update              # Update packages

# Debugging
npm run build --debug   # Debug build
npm run dev --verbose   # Verbose dev server
```

### Useful Tools
- **Astro Dev Tools**: Browser extension for debugging
- **Tailwind CSS IntelliSense**: VS Code extension
- **Lighthouse**: Performance auditing
- **WebPageTest**: Detailed performance analysis

### Contact Information
- **Technical Issues**: hello@mimrgrowthlab.com
- **Documentation**: Update this file for changes
- **Repository**: Git issues and pull requests

---

**MIMR OPERATIONS** - Technical Documentation

*Last Updated: {new Date().toLocaleDateString()}* 