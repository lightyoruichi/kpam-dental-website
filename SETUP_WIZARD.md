# Setup Wizard Guide

The setup wizard automates the initial configuration of your service business website template.

## Quick Start

Run the setup wizard right after cloning the repository:

```bash
npm run setup
```

## What It Does

The setup wizard will guide you through configuring:

- ✅ Business information (name, tagline, description)
- ✅ Contact details (phone, email, address)
- ✅ Business hours
- ✅ Website URL
- ✅ Social media handles
- ✅ WhatsApp integration
- ✅ Theme selection

## Step-by-Step Process

### 1. Run the Wizard

```bash
npm run setup
```

### 2. Answer the Questions

The wizard will ask you a series of questions:

```
📋 Business Information
────────────────────────────────────────────────────────
Business Name: My Business
Business Short Name (for logo): MyBiz
Business Tagline: Your trusted partner
Business Description: We provide exceptional services...
```

### 3. Review Your Configuration

The wizard will show you a summary:

```
╔════════════════════════════════════════════════════════╗
║                    Configuration Summary               ║
╚════════════════════════════════════════════════════════╝

Business Name: My Business
Website URL: https://mybusiness.com
Theme: alien
```

### 4. Confirm and Apply

Answer `y` to confirm and the wizard will automatically update:
- `src/config/site.ts`
- `src/config/analytics.ts`
- `src/config/locations.ts`
- `astro.config.mjs`

## Available Themes

The wizard lets you choose from 4 pre-built themes:

1. **Monochrome** (Black & White)
   - Best for: Classic, professional, minimalist businesses
   - Primary color: #000000

2. **Alien** (Fresh Green)
   - Best for: Health, wellness, nature businesses
   - Primary color: #32ac64

3. **Jellyfish** (Cool Purple)
   - Best for: Creative, professional, tech businesses
   - Primary color: #7a7add

4. **Papaya** (Warm Orange)
   - Best for: Food, hospitality, energetic businesses
   - Primary color: #de5c1c

**Note:** You can also switch themes anytime using the theme switcher (bottom-right corner) on any page. Your preference is saved automatically!

## Skipping Questions

You can skip any question by pressing Enter. You can always update configuration files manually later.

## Manual Configuration

If you prefer to configure manually or need to make changes after setup:

1. **Business Info**: Edit `src/config/site.ts`
2. **Short Links**: Edit `src/config/analytics.ts`
3. **Locations**: Edit `src/config/locations.ts`
4. **Services**: Edit `src/config/services.ts`
5. **Theme**: Edit `tailwind.config.cjs` and change `defaultTheme`

## After Setup

Once the wizard completes:

1. **Review your config**: Check `src/config/site.ts`
2. **Update locations**: Edit `src/config/locations.ts` with your real addresses
3. **Add services**: Configure your services in `src/config/services.ts`
4. **Start developing**: Run `npm run dev`

## Troubleshooting

### Wizard won't run

Make sure you have Node.js 20+ installed:
```bash
node --version
```

### Need to re-run setup

Simply run the wizard again:
```bash
npm run setup
```

It will update your existing configuration.

### Manual edits after setup

You can manually edit any configuration file at any time. The wizard is just to get you started quickly.

## Tips

- **Skip optional fields**: Social media and WhatsApp are optional
- **Test locally**: Run `npm run dev` before deploying
- **Backup first**: Commit your changes before running the wizard
- **Customize later**: You can customize everything after the initial setup

## Next Steps

After running the setup wizard:

1. ✅ Your business info is configured
2. 📝 Add your services in `src/config/services.ts`
3. 📍 Update location details in `src/config/locations.ts`
4. 🎨 Customize colors in `tailwind.config.cjs` if needed
5. 🚀 Deploy your site!

---

**Need help?** Check out [GUIDE.md](./GUIDE.md) for detailed documentation.

