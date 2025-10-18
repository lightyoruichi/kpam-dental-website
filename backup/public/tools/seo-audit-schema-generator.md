# SEO Audit & Schema Generator Prompt
*Discover SEO gaps and implement structured data for better search visibility*

---

## 🎯 What You'll Discover

You'll identify your biggest SEO opportunities and get specific schema markup that can boost your search rankings by 15-30%. This matters because most businesses miss easy SEO wins that could drive 2-3x more organic traffic without spending money on ads.

---

## 📊 Data Sources to Check

**Website Analytics:**
- Google Analytics (Acquisition > Organic Search)
- Google Search Console (Performance tab)
- Your website's current pages and content

**Technical SEO:**
- Your website's source code (right-click > View Source)
- Google PageSpeed Insights
- Your current meta titles and descriptions

**Competitor Intelligence:**
- Top 3 competitors' websites
- Their schema markup (view source on their pages)
- Their search rankings for your target keywords

---

## 📝 Data Collection Steps

**Step 1: SEO Foundation Audit (10 minutes)**
1. Check your top 10 pages in Google Search Console
2. Note which pages get clicks vs. impressions
3. List pages with good impressions but low click-through rates
4. Identify your top 5 target keywords

**Step 2: Technical SEO Check (10 minutes)**
1. Run your homepage through Google PageSpeed Insights
2. Check if your pages have meta descriptions (view source)
3. Look for existing schema markup on your key pages
4. Note any obvious technical issues (slow loading, mobile issues)

**Step 3: Competitor Schema Analysis (10 minutes)**
1. Visit your top 3 competitors' websites
2. View source on their key pages and search for "schema" or "application/ld+json"
3. Note what types of schema they're using (Organization, Product, FAQ, etc.)
4. Check their meta titles and descriptions

---

## 🧠 Analysis Questions

**SEO Opportunity Analysis:**
- Which pages have high impressions but low clicks? (CTR optimization opportunity)
- What keywords are you ranking 6-20 for? (quick win opportunity)  
- Which of your best pages lack meta descriptions? (easy fix)
- Where are competitors using schema that you're not?

**Schema Markup Priorities:**
- Do you have an FAQ section that could use FAQ schema?
- Are you a local business that needs Local Business schema?
- Do you have products/services that need Product schema?
- Should you implement Organization schema for brand recognition?

**Content Gap Identification:**
- What keywords do competitors rank for that you don't?
- Which of your pages could be optimized for better search intent match?
- What content types are missing from your top-performing pages?

---

## ⚡ Action Items

**Immediate Fixes (This Week):**
1. **Add Missing Meta Descriptions:** Write compelling 155-character descriptions for your top 10 pages
2. **Implement Basic Schema:** Add Organization schema to your homepage (copy template below)
3. **Optimize High-Impression Pages:** Improve titles and content for pages with low CTR
4. **Fix Technical Issues:** Address any critical speed or mobile issues found

**Schema Markup Templates:**

**Organization Schema (Add to homepage):**
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company Name",
  "url": "https://yourwebsite.com",
  "description": "Your company description",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-xxx-xxx-xxxx",
    "contactType": "customer service"
  }
}
</script>
```

**FAQ Schema (Add to FAQ pages):**
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Your Question Here?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Your answer here."
    }
  }]
}
</script>
```

**Quick Wins (Next 30 Days):**
1. **Content Optimization:** Create content targeting keywords you rank 6-20 for
2. **Schema Expansion:** Add Product, Service, or FAQ schema to relevant pages
3. **Internal Linking:** Link related pages to boost topical authority
4. **Competitor Gap Analysis:** Create content for high-value keywords competitors rank for

**Expected Results:**
- 20-40% improvement in click-through rates from search
- 15-25% increase in organic traffic within 2-3 months
- Better search result appearance with rich snippets
- Improved local search visibility (if applicable)

---

*Complete this audit in 30 minutes and implement the action items to see measurable SEO improvements within 30 days.*