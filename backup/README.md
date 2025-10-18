# MIMR Growth Lab

**"We interrogate, fix, and scale."**

[Site](https://mimrgrowthlab.com) | [Email](mailto:hari@mimrgrowthlab.com) | Founded by [Harinder Singh](https://github.com/lightyoruichi)

---

MIMR Growth Lab is a **tactical growth deployment website** that serves as a high-converting landing page and client acquisition funnel. It's designed with a military/tactical aesthetic to appeal to founders who need immediate, surgical growth interventions.

## 🏗️ Architecture Overview

### **Project Purpose**
A production-ready, scalable growth platform that combines:
- **Lead Generation** - High-converting landing pages with embedded forms
- **Tool Distribution** - 17+ AI marketing tools with multi-platform integration
- **Competitive Intelligence** - ESP detection and marketing tech stack analysis
- **SEO Performance** - Optimized for search visibility in growth marketing space

### **Core Tech Stack**

#### **Frontend Framework**
- **Astro 5.12.0** - Static site generator with server-side rendering
- **Svelte 5.25.7** - Interactive components (Icon system, ESP Scanner)
- **TypeScript 5.9.2** - Type-safe development

#### **Styling & UI**
- **TailwindCSS 3.4.17** - Utility-first CSS framework
- **DaisyUI 5.0.46** - Component library built on TailwindCSS
- **Custom Design System** - Military/tactical aesthetic with dark theme

#### **Deployment & Infrastructure**
- **Vercel** - Hosting platform with edge functions
- **Cloudflare** - CDN and performance optimization
- **Server-side rendering** - `output: 'server'` with Vercel adapter

## 📁 Project Structure

```
mimrgrowthlab.com/
├── src/
│   ├── pages/              # Astro pages (routes)
│   │   ├── index.astro     # Main landing page
│   │   ├── tools.astro     # Tools listing page
│   │   ├── tools/
│   │   │   └── [toolId].astro  # Individual tool pages
│   │   ├── api/
│   │   │   ├── tools.json.ts   # Tools data API
│   │   │   ├── esp-scan.ts     # ESP detection API
│   │   │   ├── esp-scan-xml.ts # ESP scan XML format
│   │   │   ├── bulk-esp-scan.ts # Bulk ESP scanning
│   │   │   └── gpt.json.ts     # GPT configuration
│   │   └── sitemap.xml.ts  # Dynamic sitemap generation
│   ├── components/         # Reusable components
│   │   ├── BaseLayout.astro    # Main layout wrapper
│   │   ├── Header.astro        # Navigation header
│   │   ├── StructuredData.astro # JSON-LD structured data
│   │   ├── MarkdownRenderer.astro # Custom markdown processor
│   │   ├── FloatingTOC.astro   # Table of contents sidebar
│   │   ├── Icon.svelte         # Custom icon system
│   │   └── ESPScanner.svelte   # Interactive ESP detection tool
│   └── styles/
│       └── globals.css     # Global styles and custom CSS
├── public/
│   ├── tools/
│   │   ├── tools.json      # Master tools database
│   │   └── *.md            # Individual tool markdown files
│   ├── assets/             # Static assets (logos, favicons)
│   └── robots.txt          # SEO configuration
├── docs/                   # Documentation
├── astro.config.mjs        # Astro configuration
├── tailwind.config.cjs     # Tailwind CSS configuration
├── svelte.config.js        # Svelte configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🔧 Key Features

### **1. Lead Generation System**
- **Tally.so Integration** - Embedded contact forms
- **Google Tag Manager** - Event tracking and analytics
- **Structured Data** - Rich snippets for SEO
- **Conversion Optimization** - A/B testing ready

### **2. Tools Platform**
- **17 AI Marketing Tools** - Complete business frameworks
- **Real-time Search** - Client-side filtering and search
- **Multi-platform Integration** - ChatGPT, Claude, Gemini, Perplexity
- **Copy-to-Clipboard** - One-click tool copying
- **Dynamic Routing** - Individual tool pages

### **3. ESP Detection Tool**
- **Domain Analysis** - SPF, DKIM, web signal detection
- **Marketing Intelligence** - Tech stack analysis
- **B2B Insights** - Competitive analysis and upsell opportunities
- **Multiple Output Formats** - JSON, XML, CSV

### **4. SEO & Performance**
- **Dynamic Sitemap** - Auto-generated with all pages
- **Structured Data** - Organization, Website, Service schemas
- **Meta Tags** - Complete Open Graph and Twitter Cards
- **Performance Optimized** - Static generation with edge functions

## 🎨 Design System

### **Color Palette**
- **Primary**: Black (#000000) background
- **Text**: White (#ffffff) primary text
- **Accent**: Red (#ef4444) for CTAs and highlights
- **Secondary**: Zinc grays for UI elements

### **Typography**
- **Headers**: Libertinus Sans (serif)
- **Body**: IBM Plex Mono (monospace)
- **Fallbacks**: System fonts for performance

### **Component Library**
- **Standardized Buttons** - Primary, secondary, tertiary styles
- **Card Components** - Base, hover, service, tool variants
- **Form Elements** - Enhanced inputs with focus states
- **Interactive Elements** - Toast notifications, loading states

## 🛠️ API Architecture

### **1. Tools API (`/api/tools.json`)**
```typescript
// Returns complete tools database
{
  id: string,
  title: string,
  category: string,
  description: string,
  difficulty: string,
  estimatedTime: string,
  tags: string[],
  content: string
}[]
```

### **2. ESP Scan API (`/api/esp-scan`)**
```typescript
// Domain analysis with marketing intelligence
{
  domain: string,
  esp_guess: string | null,
  confidence_score: number,
  evidence: {
    spf: boolean,
    dkim: boolean,
    web: boolean,
    spfRecord: string,
    dkimRecord: string,
    webMatches: string[]
  },
  marketing_intelligence: {
    esp_analysis: object,
    marketing_tech_stack: object,
    competitive_insights: object
  }
}
```

### **3. Dynamic Sitemap (`/sitemap.xml`)**
- Auto-generates from tools database
- Includes all pages with proper SEO metadata
- Cached for performance

## 🚀 Services Framework

### Month 1 – Foundations + Diagnosis
- Full-stack audit: funnel, analytics, CRM, ad/data setup
- Fix broken tracking, UX bottlenecks, and marketing messaging
- Deliver a tactical report with actionable next steps

### Month 2 – Growth Loop Design
- Architect a scalable, compounding growth loop (SEO, referral, paid → retention)
- Implement automation and internal process optimizations
- Build assets, frameworks, and documentation

### Month 3 – Experiments + Leverage Discovery
- Design and run rapid experiments (ads, landing pages, channel pivots)
- Analyze results, double down on high-ROI plays
- Systemize for handoff or scale

## ✅ Recent Updates (January 2025)

### Icon System Overhaul
- **Replaced problematic astro-icon**: Fixed "local" icon set errors that were preventing icons from loading
- **Implemented custom Icon component**: Created a Svelte-based icon system using real Simple Icons SVG paths
- **Added authentic brand icons**: OpenAI, Anthropic, Google Gemini, and Perplexity logos now display correctly
- **Enhanced icon reliability**: Icons now load consistently across all pages with proper fallbacks
- **Improved user experience**: Professional brand recognition on tools and platform selection buttons

### Previous Fixes
- **Fixed Astro compiler crash**: Resolved corrupted `services.astro` file that was causing build failures
- **Improved build stability**: Cleaned up malformed frontmatter and escape characters in Astro components
- **Updated component structure**: Corrected import paths and ensured proper Astro component patterns
- **Build verification**: All services now compile and render correctly

## 🛠️ Development

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
```bash
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build
npm run astro    # Astro CLI commands
```

### Code Quality
- **TypeScript** - Type safety throughout
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Git Hooks** - Pre-commit validation

## 📊 Analytics & Tracking

### Google Tag Manager Integration
- **Container ID**: GTM-TZVBZM6N
- **Event Tracking**: Tool views, form submissions, platform launches
- **Conversion Tracking**: Lead generation and tool usage

### PostHog Integration
- **Project Key**: phc_5S64abYV4L8jws3mhRRFnFjOFquFbOrPfQTtiMtD8Dy
- **API Host**: https://us.i.posthog.com
- **Features**: Product analytics, feature flags, user insights, session recordings
- **Custom Events**: Tool usage, ESP scans, form submissions, page views
- **Utility Functions**: Available in `src/utils/posthog.ts` for custom event tracking

### Structured Data
- **Organization Schema** - Company information
- **Service Schema** - 90-day growth intensive details
- **FAQ Schema** - Common questions for rich snippets
- **Tool Schema** - Individual tool metadata

## 🚀 Deployment

### Vercel Configuration
```bash
# Build Command
npm run build

# Output Directory
dist

# Environment Variables
NODE_VERSION=18
```

### Performance Features
- **Static Generation** - Pre-built pages for fast loading
- **Edge Functions** - Server-side API endpoints
- **CDN Delivery** - Global content distribution
- **Image Optimization** - Automatic compression
- **CSS Purging** - TailwindCSS optimization

### Security Headers
```javascript
// Configured in astro.config.mjs
headers: {
  'X-Robots-Tag': 'index, follow',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin'
}
```

## 🎯 Business Logic

### Lead Generation Funnel
1. **Landing Page** - Tactical positioning and value prop
2. **Tools Platform** - Free value delivery
3. **Contact Form** - Tally.so integration
4. **Follow-up** - Email automation ready

### Tool Distribution Strategy
- **Free Access** - No sign-up required
- **Multi-platform** - Works with any AI platform
- **Copy-paste Ready** - One-click copying
- **SEO Optimized** - Individual tool pages

### ESP Detection Business Model
- **Lead Qualification** - Identify potential clients
- **Competitive Intelligence** - Market analysis
- **Upsell Opportunities** - EngineMailer integration
- **B2B Insights** - Marketing sophistication analysis

## 🔧 Tools Page: Technical Architecture & User Journey

### **Data Flow Architecture**

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Markdown      │    │   Static JSON    │    │   API Endpoint  │
│   Files         │───▶│   tools.json     │───▶│   /api/tools    │
│   /public/tools │    │   /public/tools  │    │   .json.ts      │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                         │
                                                         ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Individual    │    │   Tools List     │    │   Server-Side   │
│   Tool Pages    │◀───│   /tools.astro   │◀───│   Rendering     │
│   /tools/[id]   │    │   (SSR)          │    │   (Astro)       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### **Component Architecture**

```
BaseLayout.astro
├── Header.astro
├── StructuredData.astro
├── FloatingTOC.astro (on detail pages)
├── MarkdownRenderer.astro (on detail pages)
├── Icon.svelte (interactive elements)
└── Footer.astro
```

### **Complete User Journey Flow**

#### **Phase 1: Landing & Discovery**
1. **User Arrives at `/tools`**
   - Server-Side Rendering (SSR): Astro fetches tools data from `/api/tools.json`
   - Data Validation: Tools are validated and sanitized for display
   - SEO Optimization: Structured data, meta tags, and breadcrumbs generated
   - Performance: 1-hour cache on API responses

2. **Tools List Page Renders**
   - Hero Section: Clear value proposition and search functionality
   - Search Bar: Real-time client-side filtering with debouncing (200ms)
   - Tool Cards: Each tool displayed with metadata, tags, and quick actions
   - AI Platform Buttons: Direct integration with ChatGPT, Claude, Gemini, Perplexity

#### **Phase 2: Search & Filtering**
- **Multi-field Search**: Title, description, category, tags
- **Keyboard Shortcuts**: `⌘K` to focus search, `Escape` to clear
- **Visual Feedback**: Real-time results count and highlighting
- **Performance**: Debounced input with 200ms delay

#### **Phase 3: Tool Selection & Interaction**
- **Click Navigation**: Cards navigate to `/tools/{toolId}`
- **Quick Launch Buttons**: Direct AI platform integration
- **Hover Effects**: Visual feedback and metadata display

#### **Phase 4: Individual Tool Page**
- **Dynamic Route Handling**: `[toolId].astro` with 404 handling
- **Content Processing**: Custom MarkdownRenderer with heading IDs
- **Floating TOC**: Auto-generated with intersection observer
- **Multi-Platform Launch**: Individual buttons for each AI platform
- **Related Tools**: Cross-linking to similar tools

### **Data Structure & API Flow**

#### **Tools JSON Structure**
```json
{
  "id": "icp-analyzer",
  "title": "ICP Analyzer",
  "category": "Research Tools",
  "description": "Identify and validate ideal customer profiles",
  "difficulty": "Intermediate",
  "estimatedTime": "20-30 minutes",
  "tags": ["customer", "research", "validation"],
  "related_tools": ["audience-list-builder", "pain-point-extractor"],
  "content": "# ICP Analyzer Tool\n\n## What This Tool Does\n..."
}
```

#### **API Endpoint Implementation**
```typescript
// /api/tools.json.ts
export const GET: APIRoute = async () => {
  try {
    return new Response(JSON.stringify(toolsData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600' // 1 hour cache
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to load tools' }), {
      status: 500
    });
  }
};
```

### **UX Design Patterns**

#### **1. Progressive Disclosure**
- **List View**: Overview with key metadata
- **Detail View**: Full framework content with TOC
- **AI Integration**: Contextual platform selection

#### **2. Multi-Modal Interaction**
- **Keyboard Navigation**: Full keyboard support
- **Touch-Friendly**: Mobile-optimized interactions
- **Visual Feedback**: Loading states, success indicators, error handling

#### **3. Performance Optimization**
- **Server-Side Rendering**: Fast initial page loads
- **Client-Side Search**: Instant filtering without server requests
- **Lazy Loading**: Components load as needed
- **Caching Strategy**: API responses cached for 1 hour

### **Complete User Flow Example**

#### **Scenario: User wants to analyze their ICP**

1. **Landing** (`/tools`)
   - User sees tools list with search functionality
   - Types "ICP" in search bar
   - ICP Analyzer tool appears in results

2. **Selection** 
   - User clicks on ICP Analyzer card
   - Navigates to `/tools/icp-analyzer`

3. **Tool Page** (`/tools/icp-analyzer`)
   - Full framework content loads
   - Floating TOC appears on desktop
   - Multiple AI platform options available

4. **AI Integration**
   - User clicks ChatGPT button
   - Command copied to clipboard
   - ChatGPT opens in new tab
   - User pastes command and gets guided experience

5. **Content Access**
   - User can copy full framework content
   - Navigate using TOC
   - View related tools
   - Return to tools list

### **Technical Implementation Details**

#### **Markdown Processing**
```typescript
// Custom markdown renderer with heading IDs
function processMarkdown(content: string): string {
  return content
    .replace(/^(#{1,6})\s+(.+)$/gm, (match, hashes, text) => {
      const level = hashes.length;
      const id = generateHeadingId(text);
      return `<h${level} id="${id}">${text}</h${level}>`;
    })
    // ... additional processing
}
```

#### **Search Implementation**
```javascript
// Debounced search with multiple field matching
const debounceTimer = window.setTimeout(() => {
  performSearch(query);
}, 200);
```

#### **AI Platform Integration**
```javascript
// Platform-specific commands and URLs
const platformData = {
  chatgpt: {
    url: 'https://chat.openai.com/g/g-688d0d2733948191bc9f2f79cfc0aba2',
    command: `Run tool: ${toolId}`
  },
  claude: {
    url: 'https://claude.ai',
    command: `Load and execute this business framework: https://mimrgrowthlab.com/tools/${toolId}...`
  }
  // ... other platforms
};
```

### **Performance & SEO Features**

#### **Performance Optimizations**
- **SSR**: Server-side rendering for fast initial loads
- **Caching**: API responses cached for 1 hour
- **Debouncing**: Search input debounced to prevent excessive filtering
- **Lazy Loading**: Components load as needed

#### **SEO Features**
- **Structured Data**: Rich snippets for tools and FAQs
- **Meta Tags**: Dynamic title, description, keywords
- **Breadcrumbs**: Clear navigation hierarchy
- **Semantic HTML**: Proper heading structure and ARIA labels

#### **Accessibility**
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators
- **Color Contrast**: WCAG compliant color schemes

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
- **Email**: hari@mimrgrowthlab.com

---

**MIMR OPERATIONS** - Built to Exit. Fix it. Leave.

*Last Updated: January 2025*
