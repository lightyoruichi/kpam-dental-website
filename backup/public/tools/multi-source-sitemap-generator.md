# Multi-Source Sitemap Generator Prompt
*Create comprehensive sitemaps from websites, videos, podcasts, and documents for AI training*

---

## 🎯 What You'll Discover

You'll build complete content inventories from multiple sources (websites, YouTube channels, podcasts, GitHub repos) and create structured sitemaps that can train AI chatbots or support systems with 90% less manual effort. This matters because most businesses have valuable content scattered across platforms that could power intelligent customer support or internal knowledge systems.

---

## 📊 Data Sources to Check

**Website Content:**
- Your main website and subdomains
- Help documentation and knowledge bases
- Blog posts and resource sections
- Product pages and feature descriptions

**Video & Audio Content:**
- YouTube channel videos and playlists
- Podcast episodes and transcripts
- Webinar recordings and presentations
- Training videos and tutorials

**Document & Code Sources:**
- GitHub repositories and documentation
- Google Drive or Dropbox document folders
- PDF guides, whitepapers, and resources
- Internal documentation and processes

---

## 📝 Data Collection Steps

**Step 1: Content Source Inventory (10 minutes)**
1. List all your content sources: website, YouTube, podcast, documents
2. Note which sources are publicly accessible vs. private/internal
3. Identify your most valuable content for potential AI training
4. Estimate content volume for each source (pages, videos, episodes)
5. Check which sources have existing sitemaps or RSS feeds

**Step 2: Content Quality Assessment (15 minutes)**
1. Review content quality and relevance for your use case
2. Identify outdated content that shouldn't be included
3. Note content that needs updating before inclusion
4. Mark premium/private content vs. public content
5. List content formats (text, video, audio, code, PDFs)

**Step 3: Use Case Definition (10 minutes)**
1. Define what you want to build: customer support bot, internal knowledge system, etc.
2. Identify primary users and their typical questions
3. Note content gaps that need to be filled
4. Plan how comprehensive vs. focused the sitemap should be
5. Consider content organization and categorization needs

---

## 🧠 Analysis Questions

**Content Coverage Assessment:**
- Which content sources contain your most valuable knowledge?
- What percentage of customer questions could your current content answer?
- Which content formats would be most useful for AI training?
- Where are the biggest gaps in your content coverage?

**Sitemap Scope Planning:**
- Should you include all content or focus on specific topics?
- Which sources need transcription or text extraction?
- What content organization would be most useful?
- How often will content need to be updated or refreshed?

**Implementation Strategy:**
- Which sitemap approach would provide the most value quickly?
- What tools and processes are needed for content extraction?
- How will you maintain and update the sitemap over time?
- What validation is needed to ensure content quality?

---

## ⚡ Action Items

**Multi-Source Sitemap Strategy:**

**Content Source Prioritization:**

**High-Priority Sources (Include First):**
1. **[Source 1]** - [Website/YouTube/Podcast] - [Volume] - [Why important]
2. **[Source 2]** - [Website/YouTube/Podcast] - [Volume] - [Why important]
3. **[Source 3]** - [Website/YouTube/Podcast] - [Volume] - [Why important]

**Medium-Priority Sources (Include Later):**
- [Source details and inclusion rationale]

**Website Sitemap Generation:**

**Method 1: Automated Crawling**
```
Tools to Use:
- Screaming Frog SEO Spider (free up to 500 URLs)
- Sitemap generators (XML-sitemaps.com)
- Custom scripts using Beautiful Soup (Python)

Process:
1. Input your website domain
2. Set crawl depth and filters
3. Export URL list with metadata
4. Clean and format for sitemap use
```

**Method 2: Manual URL Collection**
```
High-Value Pages to Include:
- Homepage and main navigation pages
- All blog posts and articles
- Product/service pages
- Help documentation
- FAQ sections
- Resource and download pages

Format:
URL, Title, Description, Last Modified, Priority
```

**YouTube Channel Sitemap:**

**Video Content Extraction:**
```
Information to Capture:
- Video title and description
- Upload date and duration
- Transcript (auto-generated or custom)
- Video tags and categories
- View count and engagement metrics

Tools:
- YouTube Data API for metadata
- YouTube transcript downloaders
- Manual export from YouTube Studio

Sitemap Format:
Video URL, Title, Transcript, Upload Date, Duration, Topics
```

**Podcast Sitemap Generation:**

**Episode Data Collection:**
```
Information to Extract:
- Episode title and description
- Audio transcript (if available)
- Publication date and duration
- Episode notes and show links
- Guest information and topics covered

Sources:
- RSS feed data extraction
- Podcast hosting platform exports
- Transcript services (Rev, Otter.ai)

Sitemap Structure:
Episode URL, Title, Transcript, Date, Duration, Topics, Guests
```

**GitHub Repository Sitemap:**

**Documentation Extraction:**
```
Content to Include:
- README files and documentation
- Code comments and docstrings
- Wiki pages and guides
- Issue discussions and solutions
- Release notes and changelogs

Tools:
- GitHub API for content extraction
- Manual documentation review
- Automated documentation parsers

Format:
File Path, Content Type, Text Content, Last Modified, Relevance Score
```

**Unified Sitemap Structure:**

**Master Sitemap Template:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/page1</loc>
    <lastmod>2024-01-15</lastmod>
    <priority>1.0</priority>
    <content_type>webpage</content_type>
    <category>product_info</category>
    <text_content>Extracted text content...</text_content>
  </url>
  <url>
    <loc>https://youtube.com/watch?v=abc123</loc>
    <lastmod>2024-01-10</lastmod>
    <priority>0.8</priority>
    <content_type>video_transcript</content_type>
    <category>tutorial</category>
    <text_content>Video transcript content...</text_content>
  </url>
</urlset>
```

**Content Validation Framework:**

**Quality Checklist:**
- [ ] All URLs are accessible and working
- [ ] Text content is clean and readable
- [ ] Duplicate content is identified and handled
- [ ] Content categories are consistently applied
- [ ] Last modified dates are accurate

**Content Processing Pipeline:**

**Step 1: Content Extraction**
- [ ] Website crawling and URL collection
- [ ] Video transcript extraction
- [ ] Podcast episode transcript gathering
- [ ] Document text extraction

**Step 2: Content Cleaning**
- [ ] Remove HTML tags and formatting
- [ ] Standardize text encoding
- [ ] Handle special characters and symbols
- [ ] Remove irrelevant content (navigation, ads)

**Step 3: Content Organization**
- [ ] Categorize content by topic/type
- [ ] Assign priority scores
- [ ] Add metadata and tags
- [ ] Create hierarchical structure

**Step 4: Sitemap Generation**
- [ ] Format content according to sitemap standards
- [ ] Validate XML structure
- [ ] Test with sample content
- [ ] Export in required format

**AI Training Applications:**

**Customer Support Chatbot:**
- Include FAQ content, help documentation, and common issue solutions
- Focus on customer-facing content and support knowledge
- Organize by customer journey stage and problem type

**Internal Knowledge System:**
- Include process documentation, training materials, and best practices
- Focus on employee-facing content and internal procedures
- Organize by department and function

**Product Information Assistant:**
- Include product descriptions, specifications, and feature explanations
- Focus on technical content and user guides
- Organize by product line and feature category

**Expected Results:**
- 90% reduction in manual content organization time
- Comprehensive content inventory across all sources
- AI-ready content structure for chatbot training
- Improved content discoverability and utilization

**Maintenance Strategy:**

**Regular Updates:**
- [ ] Monthly website content refresh
- [ ] Quarterly video/podcast content addition
- [ ] Automated monitoring for new content
- [ ] Content quality review and cleanup

**Version Control:**
- [ ] Track sitemap changes over time
- [ ] Maintain backup copies
- [ ] Document content source changes
- [ ] Monitor content performance and usage

---

*Complete this multi-source content inventory in 35 minutes and create a comprehensive sitemap that can power AI systems with your collective knowledge.*