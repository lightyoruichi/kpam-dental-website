# Deployment Guide

## Quick Deploy to Vercel

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
   - Import your GitHub repository
   - Vercel will auto-detect Astro settings
   - Click "Deploy"

3. **Done!** Your site will be live in minutes

## Environment Variables

Optional environment variables:
- `PUBLIC_GA_ID` - Google Analytics ID (if using analytics)

## Custom Domain

1. Add your domain in Vercel project settings
2. Update DNS records as instructed
3. SSL will be configured automatically

## Build Settings

Default settings work out of the box:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 20.x

## Other Platforms

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Cloudflare Pages
1. Connect GitHub repository
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output directory: `dist`
