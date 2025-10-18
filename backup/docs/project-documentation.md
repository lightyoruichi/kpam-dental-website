# MIMR Growth Lab - Project Documentation

> **Growth isn't a department. It's a kill chain.**

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture & Tech Stack](#architecture--tech-stack)
3. [File Structure](#file-structure)
4. [Page Documentation](#page-documentation)
5. [Tools Implementation](#tools-implementation)
6. [Styling & Design System](#styling--design-system)
7. [SEO & Analytics](#seo--analytics)
8. [Deployment](#deployment)
9. [Development Workflow](#development-workflow)
10. [Troubleshooting](#troubleshooting)

## ✅ TODO List

- Complete refactor of services and tool pages with `BaseLayout`
- Add more tests for the new components
- Review SEO optimizations and structured data
- Perform a final UX/UI review with user testing 

---

## 🎯 Project Overview

MIMR Growth Lab is a tactical growth deployment website that serves as a high-converting landing page and client acquisition funnel. The site is designed with a military/tactical aesthetic to appeal to founders who need immediate, surgical growth interventions.

### Key Objectives
- **Lead Generation**: Capture high-quality leads through embedded Tally.so form
- **Brand Positioning**: Establish MIMR as a tactical, execution-focused growth operator
- **Tool Distribution**: Provide direct access to AI marketing tools with enhanced UX
- **SEO Performance**: Optimize for search visibility in growth marketing space

### Target Audience
- **Primary**: Founders with broken funnels and revenue systems
- **Secondary**: Marketing teams needing surgical growth interventions
- **Tertiary**: Startups looking for tactical growth expertise

---

## 🏗 Architecture & Tech Stack

### Core Technologies
- **Framework**: [Astro](https://astro.build/) v5.12.0 - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4.17 - Utility-first CSS
- **JavaScript**: [Svelte](https://svelte.dev/) v5.25.7 - Interactive components
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) - CDN hosting

### External Integrations
- **Forms**: [Tally.so](https://tally.so/) - Lead capture forms
- **Analytics**: [Google Tag Manager](https://tagmanager.google.com/) - Event tracking
- **Fonts**: [Google Fonts](https://fonts.google.com/) - Xanh Mono typography

### Development Tools
- **Package Manager**: npm
- **Build Tool**: Astro CLI
- **Version Control**: Git
- **Code Quality**: ESLint (recommended)

---

## 📁 File Structure

```
mimrgrowthlab.com/
├── src/
│   ├── pages/              # Astro pages (routes)
│   │   ├── index.astro     # Main landing page
│   │   ├── tools.astro     # Tools listing page
│   │   ├── tools/
│   │   │   └── [toolId].astro  # Individual tool pages
│   │   ├── api/
│   │   │   └── tools.json.ts   # API endpoint for tools data
│   │   └── sitemap.xml.ts  # Dynamic sitemap generation
│   └── styles/
│       └── globals.css     # Global styles and custom CSS
├── public/
│   ├── assets/             # Static assets
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon.ico
│   │   ├── logo.png
│   │   ├── logo.svg
│   │   ├── logo@2x.png
│   │   ├── site.webmanifest
│   │   └── tools/          # Tool icons
│   │       ├── claude-ai-icon.svg
│   │       ├── openai.svg
│   │       └── perplexity.svg
│   ├── tools/
│   │   ├── tools.json      # Tools data file
│   │   └── *.md            # Individual tool markdown files
│   ├── favicon.svg         # Site favicon
│   ├── logo.png            # Main logo
│   ├── logo@2x.png         # High-res logo
│   ├── og-image.png        # Open Graph image
│   ├── og.png              # Alternative OG image
│   ├── robots.txt          # SEO robots file
│   └── llms.txt            # LLM context file
├── docs/
│   ├── readme.md           # Project overview
│   ├── project-documentation.md  # This file
│   ├── content-management-guide.md  # Content management
│   ├── technical-api.md    # Technical reference
│   └── OPTIMIZATION-SUMMARY.md  # Optimization details
├── astro.config.mjs        # Astro configuration
├── tailwind.config.cjs     # Tailwind CSS configuration
├── svelte.config.js        # Svelte configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── package-lock.json       # Locked dependencies
```

---

## 📄 Page Documentation

### 1. Main Landing Page (`/`)

**File**: `src/pages/index.astro`

**Purpose**: Primary lead generation and brand positioning page

**Key Sections**:
- **Hero Section**: "Deploy me when it's too late for strategy"
- **Operator Profile**: Personal background and approach
- **Mission Scope**: Specific services offered
- **Case Files**: Redacted client success stories
- **Cold Truths**: FAQ-style objections handling
- **CTA Section**: Embedded Tally.so form

**SEO Features**:
- Complete meta tag implementation
- Structured data (JSON-LD) for rich snippets
- Open Graph and Twitter Card meta tags
- Canonical URL configuration

**Analytics Tracking**:
- Google Tag Manager integration
- Form submission tracking
- Page view tracking

**Form Integration**:
- Tally.so embedded form
- Responsive iframe implementation
- Form submission tracking via GTM

---

### 2. Tools Listing Page (`/tools`)

**File**: `src/pages/tools.astro`

**Purpose**: Display all available AI marketing tools with search and filtering

**Key Features**:
- **Tool Grid**: Display all 17 tools in responsive grid
- **Search Functionality**: Real-time search by tool name, description, or tags
- **Category Filtering**: Filter tools by category (Business Strategy, Market Analysis, etc.)
- **Tag Filtering**: Filter by specific tags
- **Pagination**: 12 tools per page with navigation
- **AI Platform Integration**: Direct links to Claude, ChatGPT, and Perplexity
- **Tool Metadata**: Display category, difficulty, estimated time, and tags

**Technical Implementation**:
- **Data Source**: API endpoint at `/api/tools.json`
- **Search**: Client-side filtering with URL parameter preservation
- **Filtering**: Multiple filter types with clear/reset functionality
- **Pagination**: Server-side pagination with URL state management
- **Responsive Design**: Mobile-optimized grid layout

**Tool Data Structure**:
```javascript
{
  id: "tool-slug",
  title: "Tool Name",
  category: "Category",
  description: "Tool description",
  difficulty: "Beginner/Intermediate/Advanced",
  estimatedTime: "15-30 minutes",
  tags: ["tag1", "tag2"],
  content: "Full tool content as string"
}
```

**AI Platform Integration**:
- **Claude**: Links to `https://claude.ai/new?q=Execute the [Tool] prompt at https://mimrgrowthlab.com/tools/[toolId].md`
- **ChatGPT**: Links to `https://chatgpt.com/?q=Execute the [Tool] prompt at https://mimrgrowthlab.com/tools/[toolId].md`
- **Perplexity**: Links to `https://www.perplexity.ai/?q=Execute the [Tool] prompt at https://mimrgrowthlab.com/tools/[toolId].md`

---

### 3. Individual Tool Pages (`/tools/[toolId]`)

**File**: `src/pages/tools/[toolId].astro`

**Purpose**: Display individual tool content with interactive features

**Key Features**:
- **Dynamic Routing**: Generate pages for each tool based on URL parameter
- **Tool Content Display**: Show full tool content with formatting
- **AI Platform Integration**: Direct links to AI platforms with tool URLs
- **Copy Functionality**: Copy tool content to clipboard
- **Content Toggle**: Expand/collapse tool content
- **Toast Notifications**: User feedback for actions
- **Keyboard Shortcuts**: Cmd/Ctrl + C to copy content

**Technical Implementation**:
- **Data Loading**: API endpoint at `/api/tools.json`
- **404 Handling**: Redirect to 404 page for invalid tool IDs
- **Content Processing**: Extract prompt content from full tool content
- **Interactive Features**: Client-side JavaScript for copy and toggle functionality
- **Analytics Tracking**: Track tool views and interactions

**Content Processing**:
- Extracts content starting from "### Step 1:" 
- Stops before "## Example" or "## Implementation"
- Falls back to full content if Step 1 not found

**Interactive Features**:
- **Copy Button**: Copy tool content to clipboard with visual feedback
- **Toggle Button**: Show/hide tool content with smooth animations
- **Toast System**: Display success/error messages
- **Keyboard Support**: Keyboard shortcuts for common actions

---

### 4. API Endpoints

#### Tools API (`/api/tools.json`)

**File**: `src/pages/api/tools.json.ts`

**Purpose**: Serve tools data as JSON API

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

#### Dynamic Sitemap (`/sitemap.xml`)

**File**: `src/pages/sitemap.xml.ts`

**Purpose**: Generate dynamic sitemap with all tool pages

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

## 🛠 Tools Implementation

### Tools Data Management

**Data Source**: `public/tools/tools.json`
- Contains all 17 tools with complete metadata
- Structured JSON format for easy maintenance
- Served via API endpoint for consistent access

**Tool Categories**:
- Business Strategy (4 tools)
- Market Analysis (3 tools)
- Growth Strategy (3 tools)
- Research Tools (2 tools)
- Product Strategy (2 tools)
- Technical Strategy (2 tools)
- Go-to-Market (1 tool)

**Tool Features**:
- **Search**: Real-time search across title, description, and tags
- **Filtering**: Category and tag-based filtering
- **Pagination**: 12 tools per page for performance
- **Metadata**: Difficulty, time estimate, category, tags
- **AI Integration**: Direct links to AI platforms

### AI Platform Integration

**Supported Platforms**:
- **Claude AI**: Direct integration with tool URLs
- **ChatGPT**: Direct integration with tool URLs
- **Perplexity AI**: Direct integration with tool URLs

**URL Format**:
```
https://[platform].com/?q=Execute the [Tool Name] prompt at https://mimrgrowthlab.com/tools/[toolId].md
```

**Benefits**:
- Users can execute tools directly in their preferred AI platform
- No need to copy/paste content manually
- Maintains tool context and structure
- Tracks usage through URL parameters

---

## 🎨 Styling & Design System

### Color Palette
```css
/* Primary Colors */
--color-black: #000000;      /* Background */
--color-white: #ffffff;      /* Text */
--color-red: #ef4444;        /* Accent (red-500) */
--color-gray-400: #9ca3af;   /* Secondary text */
--color-gray-500: #6b7280;   /* Borders */
--color-gray-600: #4b5563;   /* Dark borders */
--color-gray-700: #374151;   /* Darker elements */
--color-gray-800: #1f2937;   /* Input backgrounds */
--color-gray-900: #111827;   /* Card backgrounds */
```

### Typography
- **Primary Font**: Xanh Mono (Google Fonts)
- **Font Weights**: 400 (normal), 700 (bold)
- **Font Sizes**: Responsive scale (text-sm to text-4xl)

### Design Principles
1. **Tactical Aesthetic**: Military-inspired design language
2. **High Contrast**: Black background with white text
3. **Minimal Decoration**: Focus on content over ornamentation
4. **Responsive Design**: Mobile-first approach
5. **Accessibility**: Proper contrast ratios and semantic HTML

### CSS Classes
```css
/* Common Utility Classes */
.bg-black          /* Black background */
.text-white        /* White text */
.text-red-500      /* Red accent text */
.border-gray-600   /* Gray borders */
.hover:border-red-500 /* Red border on hover */
.transition-colors /* Smooth color transitions */

/* Tools Specific */
.tool-card         /* Tool card styling */
.ai-platform-btn   /* AI platform button styling */
.search-input      /* Search input styling */
.filter-select     /* Filter dropdown styling */
```

---

## 🔍 SEO & Analytics

### Meta Tags Implementation
```html
<!-- Basic SEO -->
<title>Page Title || MIMR Growth Lab</title>
<meta name="description" content="Page description">
<meta name="keywords" content="relevant, keywords">
<link rel="canonical" href="https://mimrgrowthlab.com/page">

<!-- Open Graph -->
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:image" content="https://mimrgrowthlab.com/og.png">
<meta property="og:url" content="https://mimrgrowthlab.com/page">
```

### Structured Data (JSON-LD)
- **Organization Schema**: Company information
- **WebSite Schema**: Site navigation
- **WebPage Schema**: Page-specific data
- **Service Schema**: Service offerings and pricing
- **FAQ Schema**: FAQ sections for rich snippets

### Analytics Setup
```javascript
// Google Tag Manager
GTM-TZVBZM6N

// Enhanced Tracking Events
- Page views
- Tool views
- Tool interactions
- Search actions
- Form submissions
- Button clicks
- External link clicks
```

### SEO Files
- **robots.txt**: Search engine crawling rules with AI bot allowances
- **sitemap.xml**: Dynamic sitemap generation with all pages
- **llms.txt**: LLM context file for AI platforms
- **Favicons**: Complete favicon set for all devices

---

## 🚀 Deployment

### Cloudflare Pages
```bash
# Build Command
npm run build

# Output Directory
dist

# Environment Variables
NODE_VERSION=18
```

### Build Process
1. **Install Dependencies**: `npm install`
2. **Build Project**: `npm run build`
3. **Preview Build**: `npm run preview`
4. **Deploy**: Automatic via Git integration

### Performance Optimization
- **Static Generation**: All pages pre-built for fast loading
- **Image Optimization**: Automatic image compression
- **CSS Minification**: Tailwind CSS purged and minified
- **JavaScript**: Minimal client-side code
- **CDN Delivery**: Global content delivery via Cloudflare

---

## 🔧 Development Workflow

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Local Development
```bash
# Clone repository
git clone <repository-url>
cd mimrgrowthlab.com

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
http://localhost:4321
```

### Available Scripts
```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  }
}
```

### Code Quality
- **Formatting**: Prettier (recommended)
- **Linting**: ESLint (recommended)
- **Type Checking**: TypeScript configuration available

### Git Workflow
1. Create feature branch
2. Make changes
3. Test locally
4. Commit with descriptive messages
5. Push and create pull request
6. Review and merge

---

## 🛠 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node version
node --version  # Should be 18+
```

#### Tools Page Issues
- Verify `public/tools/tools.json` exists and is valid JSON
- Check that API endpoint `/api/tools.json` is accessible
- Verify search and filter functionality in browser console
- Test pagination with different filter combinations

#### Individual Tool Page Issues
- Verify tool ID in URL matches tool ID in JSON file
- Check that tool content is properly formatted
- Test copy functionality and keyboard shortcuts
- Verify AI platform links are working

#### API Endpoint Issues
- Check that `/api/tools.json` returns valid JSON
- Verify CORS headers if accessing from different domain
- Test sitemap generation at `/sitemap.xml`
- Check error handling for invalid requests

#### Form Issues
- Verify Tally.so form URL is correct
- Check iframe permissions and loading
- Test form submission tracking in GTM

#### Analytics Issues
- Verify GTM container ID
- Check browser console for errors
- Test event tracking in GTM preview mode

### Performance Optimization
- **Image Optimization**: Use WebP format where possible
- **Font Loading**: Preconnect to Google Fonts
- **CSS Minification**: Automatic in production builds
- **JavaScript**: Minimal client-side code
- **Lazy Loading**: Load tools as needed

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful degradation for older browsers

---

## 📞 Support & Maintenance

### Regular Maintenance
- **Dependencies**: Update monthly
- **Security**: Monitor for vulnerabilities
- **Performance**: Regular Lighthouse audits
- **Analytics**: Monthly performance reviews
- **Content**: Regular tool content updates

### Contact Information
- **Website**: [mimrgrowthlab.com](https://mimrgrowthlab.com)
- **LinkedIn**: [Harinder Singh](https://www.linkedin.com/in/lightyoruichi/)
- **Email**: hello@mimrgrowthlab.com

### Documentation Updates
- Update this file when making significant changes
- Keep README.md current with project status
- Document new features and components
- Maintain changelog for version history

---

**MIMR OPERATIONS** - Built to Exit. Fix it. Leave.

*Last Updated: {new Date().toLocaleDateString()}* 