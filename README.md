# Service Business Website Template

A modern, professional website template built with Astro for service-based businesses. Perfect for clinics, consultants, agencies, and any service-focused business.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the setup wizard (recommended!)
npm run setup

# 3. Start developing
npm run dev
```

**💡 New User?** Run `npm run setup` first! The interactive wizard will guide you through configuring your business information automatically.

## ✨ Key Features

- **🎨 3 Beautiful Themes** - Alien (Green), Jellyfish (Purple), Papaya (Orange)
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **🚀 Interactive Setup Wizard** - Automated configuration with `npm run setup`
- **📍 Multi-Location Support** - Manage multiple locations with dedicated pages
- **🛎️ Services Management** - Detailed service pages with sub-services and packages
- **🔗 Short URL System** - Easy-to-remember URLs (`/wa`, `/call`, `/map`) with analytics tracking
- **📊 7 Analytics Platforms** - GA4, GTM, Meta, LinkedIn, TikTok, Pinterest, Reddit
- **💬 WhatsApp Integration** - Direct contact buttons
- **🗺️ Google Maps Links** - Links to maps for each location
- **🔍 SEO Optimized** - Built-in SEO with schema markup
- **⚡ Fast Performance** - Built with Astro for optimal speeds
- **🔒 Security Headers** - XSS protection, content security

## 📖 Documentation

- **[FEATURES.md](./FEATURES.md)** - Complete feature list and roadmap
- **[GUIDE.md](./GUIDE.md)** - Setup, customization, and deployment guide
- **[ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md)** - Analytics configuration guide

## 🎯 Perfect For

- Dental clinics
- Medical practices
- Law firms
- Consulting agencies
- Professional services
- Fitness centers
- Salons & spas
- Any service-based business

## 🎨 Customization

### Using the Setup Wizard (Recommended)

```bash
npm run setup
```

The wizard automatically configures:
- Business information
- Contact details
- Social media links
- Theme selection
- WhatsApp integration

### Manual Customization

Edit configuration files directly:
- `src/config/site.ts` - Business info
- `src/config/services.ts` - Services
- `src/config/locations.ts` - Locations
- `src/config/analytics.ts` - Short links

## 📊 Analytics & Short Links

Comprehensive analytics support with automatic tracking:

- **7 Platforms** - GA4, GTM, Meta, LinkedIn, TikTok, Pinterest, Reddit
- **Smart Loading** - Only loads platforms you enable
- **Automatic Tracking** - Short link clicks tracked across all platforms
- **Easy Setup** - Just add your IDs to `.env`

Example short links: `/wa` → WhatsApp, `/call` → Phone, `/map` → Google Maps

See [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md) for complete setup guide.

## 🔧 Tech Stack

- **Astro** - Static site generator with server-side rendering
- **Svelte** - Interactive components
- **TailwindCSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **DaisyUI** - Component library

## 📦 Deployment

Ready to deploy on:
- **Vercel** (recommended) - Automatic deployments from GitHub, SSR support
- **Netlify** - Easy hosting with form handling
- **Cloudflare Pages** - Fast edge deployment
- Any static hosting platform

**Quick Deploy:**
```bash
git push origin main
```

Then connect your GitHub repo to Vercel - automatic deployments enabled!

See [GUIDE.md](./GUIDE.md) for detailed deployment instructions and troubleshooting.

## 🎨 Themes

Choose from 3 pre-built themes:

1. **Alien** (Fresh Green) - Health, wellness, nature businesses
2. **Jellyfish** (Cool Purple) - Creative, professional, tech businesses
3. **Papaya** (Warm Orange) - Food, hospitality, energetic businesses

Switch themes anytime via the setup wizard or by editing `tailwind.config.cjs`.

## ⚡ Performance

- Lighthouse Scores: Performance 95+, Accessibility 100, SEO 100
- First Contentful Paint: < 1s
- Optimized images with lazy loading
- Code splitting and minification

## 🔐 Security

Implemented security headers:
- XSS protection
- Content-Type security
- Frame options
- Referrer policy
- HTTPS enforcement

## 📄 License

MIT License - Free to use for your projects

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## 🆘 Support

- **Quick Setup:** Run `npm run setup`
- **Documentation:** See [GUIDE.md](./GUIDE.md)
- **Analytics Help:** See [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md)
- **Troubleshooting:** See [GUIDE.md#troubleshooting](./GUIDE.md#troubleshooting)
- **Recent Changes:** See [CHANGELOG.md](./CHANGELOG.md)
- **Issues:** Open an issue on GitHub

---

**Ready to get started?** Run `npm run setup` and you'll be up and running in minutes! 🚀
