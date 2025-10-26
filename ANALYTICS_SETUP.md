# Analytics Setup Guide

This template supports **7 major analytics platforms** with automatic event tracking for short links.

## 🎯 Supported Analytics Platforms

1. **Google Analytics 4** (GA4)
2. **Google Tag Manager** (GTM)
3. **Meta Pixel** (Facebook)
4. **LinkedIn Insight Tag**
5. **TikTok Pixel**
6. **Pinterest Tag**
7. **Reddit Pixel**

## ⚡ Quick Setup

### Step 1: Get Your Analytics IDs

You only need to add the analytics platforms you want to use. Get your IDs from:

- **Google Analytics**: https://analytics.google.com → Admin → Data Streams
- **Google Tag Manager**: https://tagmanager.google.com → Container ID
- **Meta Pixel**: https://business.facebook.com/events_manager
- **LinkedIn**: https://www.linkedin.com/campaignmanager → Insight Tag
- **TikTok**: https://ads.tiktok.com → Events → Web Pixel
- **Pinterest**: https://ads.pinterest.com → Conversion tracking
- **Reddit**: https://ads.reddit.com → Pixel settings

### Step 2: Add Environment Variables

Create a `.env` file in your project root (copy from `env.example`):

```bash
# Add only the analytics you want to use
PUBLIC_GA_ID=G-XXXXXXXXXX              # Google Analytics 4
PUBLIC_GTM_ID=GTM-XXXXXXX              # Google Tag Manager
PUBLIC_META_PIXEL_ID=123456789012345    # Meta (Facebook)
PUBLIC_LINKEDIN_PARTNER_ID=123456       # LinkedIn
PUBLIC_TIKTOK_PIXEL_ID=C1234567890      # TikTok
PUBLIC_PINTEREST_TAG_ID=1234567890123   # Pinterest
PUBLIC_REDDIT_PIXEL_ID=1234567890123    # Reddit
```

### Step 3: Done!

That's it! Analytics will automatically:
- ✅ Load only enabled platforms
- ✅ Track page views
- ✅ Track short link clicks
- ✅ Send events to all enabled platforms

## 📊 What Gets Tracked

### Automatic Events

All short link clicks automatically send events to **all enabled** analytics platforms:

```javascript
{
  event: 'short_link_click',
  event_category: 'whatsapp',      // Category of link
  event_label: 'WhatsApp Booking',  // Label
  link_id: 'whatsapp-main',         // Link ID
  destination: 'https://wa.me/...', // Destination URL
  short_url: 'wa',                  // Short URL slug
  link_description: 'Book...'      // Description
}
```

### Manual Event Tracking

You can also track custom events in your code:

```typescript
import { trackEvent } from '../config/analytics';

// Track a custom event
trackEvent('button_click', {
  button_name: 'Contact Form',
  page_location: '/contact'
});
```

## 🔗 Short Links Setup

### Adding a New Short Link

Edit `src/config/analytics.ts`:

```typescript
export const shortLinks: ShortLink[] = [
  {
    id: 'your-link-id',
    short: 'your-short-slug',           // URL: /your-short-slug
    destination: 'https://example.com',   // Where it redirects
    category: 'social',                  // Category for analytics
    label: 'Your Label',                 // Display label
    description: 'Description',         // Description
    isActive: true                       // Enable/disable
  },
  // ... more links
];
```

### Categories Available

- `whatsapp` - WhatsApp links
- `phone` - Phone numbers
- `maps` - Google Maps links
- `social` - Social media links
- `service` - Service pages
- `emergency` - Emergency contacts
- `transport` - Transportation booking
- `booking` - Booking links

### Editing Short Links

To edit or remove a short link:

1. Open `src/config/analytics.ts`
2. Find the link in the `shortLinks` array
3. Update properties or set `isActive: false` to disable
4. Update destinations, labels, descriptions as needed

## 🎯 Platform-Specific Setup

### Google Analytics 4

```bash
# Add to .env
PUBLIC_GA_ID=G-XXXXXXXXXX
```

**What it tracks:**
- Page views
- Short link clicks
- Custom events

### Google Tag Manager

```bash
# Add to .env
PUBLIC_GTM_ID=GTM-XXXXXXX
```

**What it tracks:**
- Everything configured in GTM
- Short link clicks pushed to dataLayer
- Custom events

**Pro tip:** Use GTM to manage multiple tags from one place!

### Meta Pixel (Facebook)

```bash
# Add to .env
PUBLIC_META_PIXEL_ID=123456789012345
```

**What it tracks:**
- Page views
- Short link clicks
- Custom events
- Conversions for Facebook ads

### LinkedIn Insight Tag

```bash
# Add to .env
PUBLIC_LINKEDIN_PARTNER_ID=123456
```

**What it tracks:**
- Page views
- Short link clicks
- Lead generation events

### TikTok Pixel

```bash
# Add to .env
PUBLIC_TIKTOK_PIXEL_ID=C1234567890
```

**What it tracks:**
- Page views
- Short link clicks
- Custom events for TikTok ads

### Pinterest Tag

```bash
# Add to .env
PUBLIC_PINTEREST_TAG_ID=1234567890123
```

**What it tracks:**
- Page views
- Short link clicks
- Conversion events

### Reddit Pixel

```bash
# Add to .env
PUBLIC_REDDIT_PIXEL_ID=1234567890123
```

**What it tracks:**
- Page views
- Short link clicks
- Conversion tracking

## 🚀 Verification

### Test Analytics Are Loading

1. **Start dev server**: `npm run dev`
2. **Open browser console** (F12)
3. **Check for errors** - shouldn't see any analytics errors
4. **Only enabled platforms** will load

### Test Short Link Tracking

1. Visit a short link (e.g., `/wa` for WhatsApp)
2. Check your analytics dashboard
3. Look for `short_link_click` events
4. Verify event data includes category, label, destination

### Test Event Tracking

Open browser console and run:

```javascript
// Google Analytics
window.gtag('event', 'test_event', { test: true });

// GTM
window.dataLayer.push({ event: 'test_event', test: true });

// Meta
window.fbq('track', 'test_event', { test: true });
```

## 🔍 How It Works

### Smart Loading

Analytics are **only loaded if enabled**:

```typescript
// In analytics.ts
export const analyticsConfig: AnalyticsConfig = {
  googleAnalytics: import.meta.env.PUBLIC_GA_ID ? {
    enabled: true,
    measurementId: import.meta.env.PUBLIC_GA_ID
  } : undefined,
  // ... other platforms
};
```

If you don't provide an ID, that platform won't load.

### Universal Event Tracking

Short link clicks send events to **all enabled platforms**:

```typescript
// In [short].astro
trackEvent('short_link_click', {
  event_category: link.category,
  event_label: link.label,
  // ... more data
});
```

Each platform receives the same event with the same data.

## 📝 Best Practices

### 1. Use Google Tag Manager

GTM is the best choice if you want to manage multiple tags:
- Add all analytics in GTM
- Use only `PUBLIC_GTM_ID`
- Manage tags without code changes

### 2. Only Enable What You Need

Don't add IDs for platforms you're not using:
- Reduces page load time
- Less code complexity
- Privacy-friendly

### 3. Test in Development

Always test analytics before deploying:
- Use dev servers for testing
- Verify events are firing
- Check for console errors

### 4. Document Your Setup

Keep notes on:
- Which platforms you use
- What events you track
- Where to find dashboards

## 🐛 Troubleshooting

### Analytics Not Loading

**Check:**
- ✅ Environment variables are set in `.env`
- ✅ Variable names start with `PUBLIC_`
- ✅ IDs are correct format
- ✅ No console errors

### Events Not Showing

**Check:**
- ✅ Platform is properly configured
- ✅ Testing in production (some platforms won't work in dev)
- ✅ Events appear in real-time reports
- ✅ Wait a few minutes for data to appear

### Short Links Not Tracking

**Check:**
- ✅ Short link is `isActive: true`
- ✅ Analytics are enabled
- ✅ Event name is `short_link_click`
- ✅ Browser console for errors

## 📚 Resources

- [Google Analytics Setup](https://support.google.com/analytics/answer/9304153)
- [Google Tag Manager](https://support.google.com/tagmanager/answer/6102821)
- [Meta Pixel](https://www.facebook.com/business/help/952192354843755)
- [LinkedIn Insight Tag](https://www.linkedin.com/help/lms/answer/a427660)
- [TikTok Pixel](https://ads.tiktok.com/help/article?aid=10028)
- [Pinterest Tag](https://help.pinterest.com/en/business/article/track-conversions-with-pinterest-tag)
- [Reddit Pixel](https://www.reddithelp.com/en/campaigns/getting-started-with-campaigns/installing-reddit-pixel)

## 💡 Pro Tips

1. **Start with GA4** - Essential analytics
2. **Add GTM second** - Manage everything from one place
3. **Add platform-specific pixels** - Only if running ads
4. **Use event naming conventions** - Consistent naming
5. **Test before deploying** - Save time debugging

## 🎯 Quick Reference

### Environment Variables

```bash
PUBLIC_GA_ID=G-XXXXXXXXXX           # Google Analytics 4
PUBLIC_GTM_ID=GTM-XXXXXXX           # Google Tag Manager
PUBLIC_META_PIXEL_ID=123456789012345 # Meta Pixel
PUBLIC_LINKEDIN_PARTNER_ID=123456    # LinkedIn
PUBLIC_TIKTOK_PIXEL_ID=C1234567890  # TikTok
PUBLIC_PINTEREST_TAG_ID=1234567890123 # Pinterest
PUBLIC_REDDIT_PIXEL_ID=1234567890123  # Reddit
```

### Configuration File

**Location:** `src/config/analytics.ts`

**What to edit:**
- `shortLinks` - Add/edit short links
- Event tracking functions
- Platform configurations

## ✅ Checklist

- [ ] Got analytics IDs from platforms
- [ ] Added IDs to `.env` file
- [ ] Configured short links in `analytics.ts`
- [ ] Tested analytics loading in dev
- [ ] Tested short link tracking
- [ ] Verified events in dashboards
- [ ] Added to production deployment

## 🆘 Need Help?

- Check browser console for errors
- Verify environment variables are loaded
- Test short links work correctly
- Check analytics real-time reports
- Review platform-specific documentation

---

**That's it!** Your analytics are now tracking short link clicks across all enabled platforms. 🎉

