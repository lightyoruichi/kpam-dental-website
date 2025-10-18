# MIMR Growth Lab - Content Management Guide

> **Non-Technical Guide for Content Updates**

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Page Content Updates](#page-content-updates)
3. [Tools Management](#tools-management)
4. [SEO Content](#seo-content)
5. [Images & Assets](#images--assets)
6. [Form Management](#form-management)
7. [Analytics & Tracking](#analytics--tracking)
8. [Common Tasks](#common-tasks)

---

## 🚀 Quick Start

### What You Need
- **GitHub Account**: To access the repository
- **Basic Text Editor**: VS Code, Notepad++, or similar
- **Image Editor**: For resizing/optimizing images (optional)

### Getting Started
1. **Access Repository**: Go to the GitHub repository
2. **Find Files**: Navigate to `src/pages/` for page content
3. **Make Changes**: Edit files directly in GitHub or clone locally
4. **Save Changes**: Commit and push changes
5. **Deploy**: Changes automatically deploy to live site

---

## 📄 Page Content Updates

### Main Landing Page (`src/pages/index.astro`)

#### Hero Section
```html
<!-- Find this section in the file -->
<h3 class="text-4xl mb-4">Deploy me when it's too late for strategy.</h3>
<p class="text-lg leading-relaxed">
  I'm not an agency. I'm your last call before things break for good...
</p>
```

**What You Can Change**:
- Main headline (text-4xl class)
- Subtitle paragraph
- Call-to-action button text

#### Operator Profile Section
```html
<h3 class="text-3xl mb-4">Growth doesn't need vision boards. It needs violence.</h3>
<p class="text-lg leading-relaxed mb-6">
  I'm the kind of operator you call when the funnel's leaking...
</p>
```

**What You Can Change**:
- Section headlines
- Personal background text
- Service descriptions
- LinkedIn profile link

#### Mission Scope Section
```html
<ul class="space-y-4 text-lg">
  <li>> Repair broken funnels bleeding cash</li>
  <li>> Rebuild your offer to actually convert</li>
  <!-- Add more services here -->
</ul>
```

**What You Can Change**:
- Service list items
- Add/remove services
- Update service descriptions

#### Case Files Section
```html
<div class="border border-gray-600 p-6">
  <p><strong>CLIENT:</strong> <span class="redacted">Med-tech SaaS</span></p>
  <p><strong>SITUATION:</strong> Product strong, pipeline weak...</p>
  <p><strong>INTERVENTION:</strong> Rebuilt funnel logic...</p>
  <p><strong>RESULT:</strong> <span class="redacted">5x MQL volume...</span></p>
</div>
```

**What You Can Change**:
- Client industry/type
- Situation description
- Intervention details
- Results (keep redacted for privacy)

---

## 🛠 Tools Management

### Current Tools Page Structure

The tools page displays all 17 AI marketing tools with the following features:

#### Key Features
- **Tool Grid**: All tools displayed in responsive grid layout
- **Search Functionality**: Find tools by name, description, or tags
- **Category Filtering**: Filter by tool type (Business Strategy, Market Analysis, etc.)
- **Tag Filtering**: Filter by specific tags
- **Pagination**: 12 tools per page for performance
- **AI Platform Integration**: Direct links to Claude, ChatGPT, and Perplexity
- **Tool Metadata**: Display category, difficulty, time estimate, and tags

### Adding New Tools

#### Step 1: Add Tool to JSON File
```bash
# Navigate to tools directory
cd public/tools/

# Edit the tools.json file
```

#### Step 2: Add Tool Data
```json
{
  "id": "new-tool-name",
  "title": "Your Tool Name",
  "category": "Business Strategy",
  "description": "What this tool does in one sentence",
  "difficulty": "Beginner",
  "estimatedTime": "15-30 minutes",
  "tags": ["marketing", "strategy", "analysis"],
  "content": "# Your Tool Name\n\n## What This Tool Does\n[Tool description and purpose]\n\n## How to Use This Tool\n[Step-by-step instructions]\n\n## Input Fields\n[Required information and examples]\n\n## Analysis Framework\n[Methodology and assessment criteria]\n\n## Example Output\n[Sample results and insights]\n\n## Implementation Checklist\n[Action items and next steps]"
}
```

#### Step 3: Tool Categories
Choose from these categories:
- **Business Strategy**: Business models, planning, validation
- **Market Analysis**: Market research, competitive analysis
- **Growth Strategy**: Experiment planning, scaling strategies
- **Research Tools**: Customer research, data analysis
- **Product Strategy**: Product development, feature planning
- **Technical Strategy**: Technical architecture, development
- **Go-to-Market**: GTM strategy, launch planning

#### Step 4: Create Tool Markdown File
```bash
# Create markdown file for the tool
touch public/tools/new-tool-name.md
```

#### Step 5: Add Tool Content
```markdown
# Your Tool Name

## What This Tool Does
[Tool description and purpose]

## How to Use This Tool
[Step-by-step instructions]

## Input Fields
[Required information and examples]

## Analysis Framework
[Methodology and assessment criteria]

## Example Output
[Sample results and insights]

## Implementation Checklist
[Action items and next steps]
```

### Updating Existing Tools

#### Edit Tool Content
1. **Find Tool File**: Navigate to `public/tools/tool-name.md`
2. **Edit Markdown**: Update content directly in the file
3. **Update JSON**: Modify metadata in `public/tools/tools.json` if needed
4. **Test Changes**: Verify updates display correctly
5. **Deploy**: Changes automatically deploy

#### Tool Content Guidelines
- **Clear Structure**: Follow the standard markdown format
- **Actionable Content**: Provide specific, actionable outputs
- **Examples**: Include real examples and use cases
- **Next Steps**: Always include implementation checklist
- **Professional Tone**: Maintain the tactical, direct tone

### Tools Page Features

#### Search & Filter
- **Search Input**: Users can search by tool name or keywords
- **Category Dropdown**: Filter by tool category
- **Tag Filters**: Filter by specific tags
- **Clear Filters**: Easy reset functionality
- **Results Counter**: Show filtered results count

#### AI Platform Integration
- **Claude AI**: Direct link to execute tool in Claude
- **ChatGPT**: Direct link to execute tool in ChatGPT
- **Perplexity**: Direct link to execute tool in Perplexity
- **URL Format**: `https://[platform].com/?q=Execute the [Tool] prompt at https://mimrgrowthlab.com/tools/[toolId].md`

#### Individual Tool Pages
- **Dynamic Routing**: Each tool has its own page at `/tools/[toolId]`
- **Content Display**: Full tool content with formatting
- **Copy Functionality**: Copy tool content to clipboard
- **Content Toggle**: Expand/collapse tool content
- **Toast Notifications**: User feedback for actions

### API Data Management

#### Tools API Endpoint
- **URL**: `/api/tools.json`
- **Purpose**: Serves tools data to all pages
- **Data Source**: `public/tools/tools.json`
- **Caching**: 1-hour cache for performance
- **Format**: JSON with all tool metadata and content

#### Data Flow
1. **JSON File**: `public/tools/tools.json` contains all tool data
2. **API Endpoint**: `/api/tools.json` serves the data
3. **Pages**: All pages fetch data from the API endpoint
4. **Consistency**: Single source of truth for all tool data

---

## 🔍 SEO Content

### Meta Tags
```html
<!-- Update these for each page -->
<title>Page Title || MIMR Growth Lab</title>
<meta name="description" content="Page description for search engines">
<meta name="keywords" content="relevant, keywords, for, SEO">
```

### Open Graph Tags
```html
<!-- Social media sharing -->
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Social media description">
<meta property="og:image" content="https://mimrgrowthlab.com/og.png">
```

### Structured Data
```html
<!-- JSON-LD structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mimr Growth Lab",
  "url": "https://mimrgrowthlab.com"
}
</script>
```

### What to Update
- **Page titles**: Keep under 60 characters
- **Meta descriptions**: Keep under 160 characters
- **Keywords**: Use relevant search terms
- **Open Graph**: Optimize for social sharing

---

## 🖼 Images & Assets

### Image Locations
```
public/
├── assets/              # Main image directory
│   ├── logo.svg        # Main logo
│   ├── logo.png        # PNG version
│   ├── logo@2x.png     # High-resolution version
│   ├── favicon.ico     # Site favicon
│   └── tools/          # AI platform icons
│       ├── claude-ai-icon.svg
│       ├── openai.svg
│       └── perplexity.svg
├── og-image.png        # Social media image
└── og.png             # Alternative OG image
```

### Image Guidelines
- **Logo**: SVG format preferred for scalability
- **Favicons**: Multiple sizes for different devices
- **Social Images**: 1200x630px for optimal sharing
- **File Sizes**: Keep under 500KB for web performance

### Adding New Images
1. **Upload image** to appropriate directory
2. **Update HTML** to reference new image
3. **Optimize** for web (compress if needed)
4. **Test** on different devices

### Image Optimization
```html
<!-- Optimized image tag -->
<img 
  src="/assets/new-image.jpg" 
  alt="Descriptive alt text"
  loading="lazy"
  class="responsive-class"
/>
```

---

## 📝 Form Management

### Tally.so Form
```html
<!-- Form embed code -->
<iframe
  data-tally-src="https://tally.so/r/mZggx5"
  width="100%"
  height="500"
  frameborder="0"
  title="MIMR // Client Extraction Briefing">
</iframe>
```

### Updating Form
1. **Create new form** in Tally.so
2. **Copy embed code** from Tally.so
3. **Replace iframe** in the page
4. **Update form ID** in analytics tracking

### Form Fields to Consider
- **Contact Information**: Name, email, phone
- **Business Details**: Company, industry, size
- **Problem Description**: Current challenges
- **Budget Range**: Service tier selection
- **Timeline**: Urgency of need

---

## 📊 Analytics & Tracking

### Google Tag Manager
```html
<!-- GTM container ID -->
GTM-TZVBZM6N
```

### Enhanced Tracking Events
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

### What to Monitor
- **Page Views**: Which pages get most traffic
- **Tool Usage**: Most popular tools and features
- **AI Platform Clicks**: Which AI platforms are most used
- **Search Terms**: What users are looking for
- **Form Submissions**: Lead generation success
- **Mobile vs Desktop**: Device usage patterns

---

## 🔧 Common Tasks

### Updating Contact Information
1. **Find contact details** in page content
2. **Update email addresses**
3. **Update LinkedIn profile links**
4. **Update phone numbers** (if applicable)

### Changing Service Offerings
1. **Update Mission Scope section**
2. **Modify case studies** if needed
3. **Update pricing information**
4. **Adjust call-to-action text**

### Adding New Pages
1. **Create new file** in `src/pages/`
2. **Copy structure** from existing pages
3. **Update navigation** if needed
4. **Add SEO meta tags**
5. **Test on live site**

### Updating External Links
1. **Find link in HTML**
2. **Update href attribute**
3. **Test link functionality**
4. **Update analytics tracking** if needed

### Content Calendar
- **Monthly**: Review and update case studies
- **Quarterly**: Update service offerings
- **Annually**: Refresh testimonials and results
- **As Needed**: Update contact information

---

## 🚨 Important Notes

### Content Guidelines
- **Tone**: Keep the tactical, direct tone
- **Length**: Keep paragraphs concise
- **Accuracy**: Verify all claims and results
- **Privacy**: Use redacted text for sensitive data

### Technical Limitations
- **File Size**: Keep images under 500KB
- **Text Length**: Meta descriptions under 160 characters
- **Links**: Always use `target="_blank"` for external links
- **Images**: Include alt text for accessibility

### Backup Strategy
- **Version Control**: All changes tracked in Git
- **Regular Backups**: Repository serves as backup
- **Testing**: Test changes before publishing
- **Rollback**: Can revert to previous versions

---

## 📞 Support

### When You Need Help
- **Technical Issues**: Contact developer
- **Content Questions**: Review this guide
- **Emergency Changes**: Use GitHub's edit feature
- **Training**: Schedule content management training

### Useful Resources
- **GitHub Help**: github.com/help
- **Markdown Guide**: markdownguide.org
- **HTML Basics**: w3schools.com/html
- **Image Optimization**: tinypng.com

---

**MIMR OPERATIONS** - Content Management

*Last Updated: {new Date().toLocaleDateString()}* 