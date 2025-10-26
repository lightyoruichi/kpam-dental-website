# Complete Setup Guide

A comprehensive guide to install, customize, and deploy your service business website.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Customization](#customization)
5. [Analytics Setup](#analytics-setup)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

---

## Quick Start

### Option 1: Using the Setup Wizard (Easiest) ⭐

**Recommended for new users!**

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the setup wizard**
   ```bash
   npm run setup
   ```
   Follow the interactive prompts to configure your business information.

3. **Test locally**
   ```bash
   npm run dev
   ```
   Open http://localhost:4321

4. **Deploy**
   - Push to GitHub
   - Connect to Vercel
   - Done! 🎉

### Option 2: Manual Setup

If you prefer to configure manually:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Update business info**
   - Open `src/config/site.ts`
   - Change business name, phone, email, address
   - Save

3. **Test locally**
   ```bash
   npm run dev
   ```
   Open http://localhost:4321

4. **Deploy**
   - Push to GitHub
   - Connect to Vercel
   - Done! 🎉

---

## Installation

### Prerequisites

- Node.js v20 or higher ([Download](https://nodejs.org/))
- Git ([Download](https://git-scm.com/))

### Install Steps

1. **Clone or download template**
   ```bash
   git clone https://github.com/yourusername/service-business-template.git
   cd service-business-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

---

## Configuration

### Using the Setup Wizard

**The easiest way to configure your site is using the interactive setup wizard:**

```bash
npm run setup
```

The wizard will guide you through:
- Business information
- Contact details
- Social media links
- Theme selection
- And more!

See [SETUP_WIZARD.md](./SETUP_WIZARD.md) for detailed information.

### Manual Configuration

If you prefer to configure manually, here are the essential files to update:

#### 1. Business Information (`src/config/site.ts`)

```typescript
business: {
  name: "Your Business Name",
  shortName: "Your Business",
  tagline: "Your catchy tagline",
  description: "Your description",
  
  phone: "+1 (555) 123-4567",
  email: "info@yourbusiness.com",
  
  address: {
    street: "123 Your Street",
    city: "Your City",
    state: "Your State",
    zip: "12345",
    country: "US"
  },
  
  hours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 4:00 PM",
    sunday: "Sunday: Closed"
  },
  
  social: {
    instagram: "@yourbusiness",
    tiktok: "@yourbusiness",
    facebook: "yourbusiness"
  },
  
  whatsapp: {
    enabled: true,
    number: "+1234567890",
    message: "Hi, I'd like to book an appointment"
  }
}
```

#### 2. Website URL (`astro.config.mjs`)

```javascript
export default defineConfig({
  site: 'https://example.com', // ⚠️ UPDATE: Replace with your domain
  // ...
});
```

**Note:** The setup wizard can update this automatically.

#### 3. Services (`src/config/services.ts`)

Add your services:

```typescript
export const services: Service[] = [
  {
    id: 'your-service',
    name: 'Your Service Name',
    slug: 'your-service',
    category: 'Your Category',
    description: 'Brief description',
    fullDescription: 'Detailed description...',
    price: '$XXX',
    duration: 'Duration',
    features: ['Feature 1', 'Feature 2'],
    benefits: ['Benefit 1', 'Benefit 2'],
    image: '/images/service.jpg',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    popular: true,
    subServices: [...]
  }
];
```

#### 4. Locations (`src/config/locations.ts`)

Add your locations:

```typescript
export const locations: Location[] = [
  {
    id: 'main-location',
    name: 'Main Location',
    address: {
      street: '123 Main Street',
      city: 'City',
      state: 'State',
      zip: '12345',
      country: 'US'
    },
    phone: '+1 (555) 123-4567',
    email: 'info@yourbusiness.com',
    hours: {
      weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
      saturday: 'Saturday: 9:00 AM - 4:00 PM',
      sunday: 'Sunday: Closed'
    },
    image: '/images/location.jpg',
    mapLink: 'https://maps.google.com/?q=...',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    features: ['Feature 1', 'Feature 2'],
    description: 'Location description',
    isMain: true
  }
];
```

---

## Customization

### Short Links (`src/config/analytics.ts`)

Configure easy-to-remember URLs:

```typescript
export const shortLinks: ShortLink[] = [
  {
    id: 'whatsapp-main',
    short: 'wa',
    destination: 'https://wa.me/YOUR_NUMBER',
    category: 'whatsapp',
    label: 'WhatsApp Booking',
    description: 'Book via WhatsApp',
    isActive: true
  },
  {
    id: 'phone-main',
    short: 'call',
    destination: 'tel:+1234567890',
    category: 'phone',
    label: 'Phone Call',
    description: 'Call us',
    isActive: true
  }
];
```

**Access:** `/wa` → WhatsApp, `/call` → Phone

### Themes (`tailwind.config.cjs`)

Switch between 4 pre-built themes:

```javascript
daisyui: {
  themes: ['monochrome', 'alien', 'jellyfish', 'papaya'],
  defaultTheme: 'monochrome', // Change this
}
```

- **Monochrome** - Black & White (Classic, professional)
- **Alien** - Fresh Green (Health, wellness)
- **Jellyfish** - Cool Purple (Creative, tech)
- **Papaya** - Warm Orange (Food, hospitality)

**Theme Switcher:** Users can switch themes anytime using the theme switcher in the bottom-right corner of any page. Theme preferences are saved automatically in the browser's localStorage.

#### Customizing the Theme Switcher

The theme switcher is implemented in `src/components/ThemeSwitcher.astro`. You can customize:

- **Position**: Change `fixed bottom-8 right-8` to reposition
- **Visibility**: Remove `<ThemeSwitcher />` from `BaseLayout.astro` to hide it
- **Default Theme**: Change `localStorage.getItem('theme') || 'monochrome'` to set default
- **Colors**: Edit the `themes` object to modify color values

### Images

Replace images in `/public/images/`:
- Hero images: 1920x1080px
- Service images: 800x600px
- Location images: 1200x800px

---

## Analytics Setup

### Supported Platforms

- Google Analytics 4 (GA4)
- Google Tag Manager (GTM)
- Meta Pixel (Facebook)
- LinkedIn Insight Tag
- TikTok Pixel
- Pinterest Tag
- Reddit Pixel

### Quick Setup

1. **Get your analytics IDs** from platforms
2. **Add to `.env` file**:
   ```bash
   PUBLIC_GA_ID=G-XXXXXXXXXX
   PUBLIC_GTM_ID=GTM-XXXXXXX
   PUBLIC_META_PIXEL_ID=123456789012345
   # ... add more as needed
   ```
3. **Done!** Analytics automatically track short link clicks

### What Gets Tracked

- Page views
- Short link clicks (automatic)
- Custom events

See [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md) for detailed instructions.

---

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import GitHub repository
   - Vercel auto-detects Astro
   - Click "Deploy"

3. **Done!** Site live in minutes

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Cloudflare Pages

1. Connect GitHub repository
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output directory: `dist`

### Environment Variables

Add to your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- Cloudflare: Settings → Environment Variables

All variables should start with `PUBLIC_`.

---

## Troubleshooting

### Build Errors

```bash
npm run build
```

- Check image paths are correct
- Verify TypeScript types
- Check console for errors

### Images Not Loading

- Ensure images in `/public/images/`
- Verify file extensions (.jpg, .png, .webp)
- Check paths in config files

### Short URLs Not Working

**Symptoms:**
- Short links return 404 or don't redirect
- URLs show `%7BfinalDestination%7D` instead of actual destination

**Solutions:**
- Check `src/config/analytics.ts` for correct destination URLs
- Verify the short link exists and is active (`isActive: true`)
- **For Vercel SSR:** Ensure you're not using `getStaticPaths()` with `output: 'server'`
- Test locally with `npm run dev` before deploying
- Check browser console for JavaScript errors

**Common Issue:** If short links work locally but not on Vercel:
- Remove any `getStaticPaths()` functions from dynamic routes
- Ensure scripts use `set:html` instead of `is:inline` for variable interpolation
- Check that Analytics component doesn't have `client:load` directive

### Analytics Not Loading

- Verify environment variables are set
- Check IDs are correct format
- Test in production (some platforms won't work in dev)
- **Fix:** Remove `client:load` from `<Analytics />` component (Astro components don't support hydration)

### Vercel Deployment Issues

**Password Protection Error:**
- If you see authentication errors, disable password protection in Vercel Settings → Deployments

**Short Links Getting 401 Error:**
- Check Vercel project settings for deployment protection
- Disable password protection if not needed
- Use bypass token for testing if protection is required

**Dynamic Routes Not Working:**
- Remove `getStaticPaths()` from dynamic route files
- Use `output: 'server'` mode (already configured)
- Handle routes dynamically in SSR mode

---

## Testing Checklist

- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] All images display
- [ ] Contact information correct
- [ ] Social media links work
- [ ] Services pages display
- [ ] Locations pages display
- [ ] Short URLs work (`/wa`, `/call`, `/map`)
- [ ] Mobile responsive
- [ ] Analytics tracking (if enabled)

---

## Need Help?

- Check this guide
- Review code comments
- Open an issue on GitHub
- Check [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md) for analytics help

---

**Ready to launch?** Follow the Deployment section above! 🚀

