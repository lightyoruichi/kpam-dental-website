# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2025-01-27

### Added
- Initial open source release
- Interactive setup wizard (`npm run setup`)
- 7 analytics platforms support (GA4, GTM, Meta, LinkedIn, TikTok, Pinterest, Reddit)
- Short URL system with tracking (`/wa`, `/call`, `/map`)
- Multi-location support
- Services management system
- 3 pre-built themes (Alien, Jellyfish, Papaya)
- Comprehensive documentation (GUIDE.md, FEATURES.md, ANALYTICS_SETUP.md)
- WhatsApp integration
- SEO optimization with schema markup
- Security headers implementation
- 404 error page

### Fixed
- Removed hardcoded business values, replaced with template-friendly examples
- Fixed broken documentation links (ANALYTICS.md → ANALYTICS_SETUP.md)
- Fixed SSR compatibility on Vercel (removed getStaticPaths from dynamic routes)
- Fixed Analytics component hydration error (removed client:load directive)
- Fixed script variable interpolation in short link redirects
- Updated all placeholders with clear ⚠️ UPDATE comments

### Changed
- Updated configuration structure for better organization
- Improved error handling for dynamic routes
- Enhanced script variable interpolation using set:html
- Updated README with setup wizard promotion

### Technical Details

**SSR Compatibility (Jan 27, 2025):**
- Removed `getStaticPaths()` from `src/pages/[short].astro`
- Removed `getStaticPaths()` from `src/pages/locations/[location].astro`
- Removed `getStaticPaths()` from `src/pages/services/[service].astro`
- Routes now handled dynamically in SSR mode

**Analytics Fixes (Jan 27, 2025):**
- Removed `client:load` directive from Analytics component
- Updated script tags to use `set:html` for proper variable interpolation
- Fixed `{finalDestination}` variable interpolation in redirect scripts

**Template Readiness (Jan 27, 2025):**
- Replaced all hardcoded "dentixa" references with "examplebusiness"
- Updated email addresses to template-friendly examples
- Added comprehensive ⚠️ UPDATE comments throughout config files
- Created interactive setup wizard for automated configuration

---

## Deployment Notes

### Vercel SSR Mode
This template uses Astro's server-side rendering (`output: 'server'`) with the Vercel adapter. This provides:
- Dynamic route handling for short links
- Real-time analytics tracking
- Optimized performance with SSR

### Important Configuration
- `output: 'server'` in `astro.config.mjs` (required for dynamic routes)
- No `getStaticPaths()` in dynamic route files
- Scripts use `set:html` for variable interpolation
- Analytics component must not have `client:load` directive

---

## Versioning

This project uses [Semantic Versioning](https://semver.org/).

[1.0.0]: https://github.com/yourusername/service-business-template/releases/tag/v1.0.0

