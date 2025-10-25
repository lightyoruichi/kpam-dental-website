# Service Business Website Template

A modern, professional website template built with Astro for service-based businesses. Perfect for clinics, consultants, agencies, and any service-focused business.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## ✨ Features

- **Modern Design**: Clean, professional design with customizable color schemes
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Built-in SEO features with schema markup
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Multi-Location Support**: Manage multiple locations with dedicated pages
- **Services Pages**: Detailed service pages with sub-services and packages
- **Short URL System**: Easy-to-remember URLs for important links
- **WhatsApp Integration**: Direct contact buttons for WhatsApp
- **Google Maps**: Integrated location mapping
- **Social Media**: Links to Instagram, TikTok, and more
- **Configurable**: Easy customization through config files

## 🎨 Customization

### Quick Setup

1. **Update Business Information** - Edit `src/config/site.ts`:
   ```typescript
   business: {
     name: "Your Business Name",
     phone: "+1 (555) 123-4567",
     email: "info@yourbusiness.com",
     // ... more settings
   }
   ```

2. **Update Services** - Edit `src/config/services.ts`:
   - Add your services with descriptions, pricing, and features
   - Configure sub-services/packages
   - Set popular flags

3. **Update Locations** - Edit `src/config/locations.ts`:
   - Add your business locations
   - Set business hours
   - Add location features and amenities

4. **Replace Images** - Add your images to `/public/images/`

5. **Choose Color Theme** - Switch between 3 pre-built themes in `src/components/BaseLayout.astro` (see `THEMES.md`)

### Configuration Files

- **`src/config/site.ts`** - Main site configuration (business info, colors, SEO)
- **`src/config/analytics.ts`** - Short URLs and analytics settings
- **`src/config/services.ts`** - Services and sub-services configuration
- **`src/config/locations.ts`** - Multi-location data
- **`src/pages/index.astro`** - Landing page content and testimonials

## 📁 Project Structure

```
├── src/
│   ├── components/     # Reusable components
│   │   ├── BaseLayout.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ServiceCard.astro
│   │   ├── LocationCard.astro
│   │   └── TestimonialCard.astro
│   ├── config/         # Configuration files
│   │   ├── site.ts     # Site configuration
│   │   ├── analytics.ts # Short URLs & analytics
│   │   ├── services.ts # Services configuration
│   │   └── locations.ts # Locations configuration
│   ├── pages/          # Page files
│   │   ├── index.astro # Main landing page
│   │   ├── services.astro # Services listing
│   │   ├── services/[service].astro # Service detail pages
│   │   ├── locations.astro # Locations listing
│   │   └── locations/[location].astro # Location detail pages
│   └── styles/         # Global styles
├── public/
│   ├── images/         # Image assets
│   └── assets/         # Other assets
└── astro.config.mjs   # Astro configuration
```

## 🔧 Tech Stack

- **Astro**: Static site generator with server-side rendering
- **Svelte**: Interactive components
- **TailwindCSS**: Utility-first CSS framework
- **TypeScript**: Type safety

## 📦 Deployment

This template is ready to deploy on:
- **Vercel** (recommended) - Automatic deployments from GitHub
- **Netlify** - Easy hosting with form handling
- **Cloudflare Pages** - Fast edge deployment
- Any static hosting platform

## 📄 License

MIT License - Free to use for your projects

## 🤝 Support

For issues or questions, please open an issue in the repository.

## 📝 Documentation

- **`THEMES.md`** - Color theme guide (3 pre-built themes)
- **`CUSTOMIZATION.md`** - Detailed customization instructions
- **`DEPLOYMENT.md`** - Deployment guide for various platforms
- **`MULTI_LOCATION_FEATURES.md`** - Multi-location and services documentation
- **`TEMPLATE_COMPLETE.md`** - Template completion summary
