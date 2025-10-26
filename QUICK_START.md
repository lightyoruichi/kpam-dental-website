# Quick Start Guide

Get your service business website up and running in minutes!

## 🎯 The Fastest Way to Get Started

### Option 1: Using the Setup Wizard (Recommended)

The interactive setup wizard will guide you through everything:

```bash
# 1. Install dependencies
npm install

# 2. Run the setup wizard
npm run setup

# 3. Start developing
npm run dev
```

**That's it!** The wizard will:
- ✅ Configure your business information
- ✅ Set up contact details
- ✅ Configure social media links
- ✅ Choose your theme
- ✅ Update all configuration files automatically

### Option 2: Manual Setup

If you prefer to configure manually:

```bash
# 1. Install dependencies
npm install

# 2. Edit configuration files
# - src/config/site.ts (business info)
# - src/config/locations.ts (locations)
# - src/config/services.ts (services)
# - src/config/analytics.ts (short links)

# 3. Start developing
npm run dev
```

## What You'll Configure

### Essential (Required)

- **Business Name** - Your company name
- **Contact Info** - Phone, email, address
- **Website URL** - Your domain
- **Business Hours** - When you're open

### Optional (Can Skip)

- **Social Media** - Instagram, TikTok, Facebook, etc.
- **WhatsApp** - If you use WhatsApp for business
- **Theme** - Choose from 3 pre-built themes

## After Setup

Once you've run the wizard or completed manual setup:

1. **Add Your Services**
   - Edit `src/config/services.ts`
   - Add your business services
   - Update pricing and descriptions

2. **Update Locations**
   - Edit `src/config/locations.ts`
   - Add your real addresses
   - Update coordinates

3. **Customize Content**
   - Edit `src/pages/index.astro` for homepage
   - Add your team photos
   - Update testimonials

4. **Configure Analytics** (Optional)
   - Edit `.env` file
   - Add your analytics IDs
   - See [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md)

5. **Deploy**
   - Push to GitHub
   - Deploy to Vercel, Netlify, or your preferred host
   - See [GUIDE.md](./GUIDE.md) for deployment details

## Test Locally

After configuration, test your site:

```bash
npm run dev
```

Open http://localhost:4321 in your browser.

## Build for Production

When ready to deploy:

```bash
npm run build
```

The built site will be in the `dist/` folder.

## Need Help?

- **Setup Issues?** See [SETUP_WIZARD.md](./SETUP_WIZARD.md)
- **Detailed Guide?** See [GUIDE.md](./GUIDE.md)
- **Analytics Setup?** See [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md)
- **Features List?** See [FEATURES.md](./FEATURES.md)

## Common Issues

### "npm run setup doesn't work"

Make sure you have Node.js 20+ installed:
```bash
node --version
```

### "Can't run npm install"

Make sure you have npm installed. Install Node.js from [nodejs.org](https://nodejs.org).

### "Port already in use"

Change the port:
```bash
npm run dev -- --port 3000
```

## What's Next?

- ✅ Run `npm run setup` to configure your site
- ✅ Customize services and locations
- ✅ Deploy to production
- ✅ Set up analytics (optional)
- ✅ Start getting customers!

---

**Questions?** Check the documentation files or open an issue on GitHub.

