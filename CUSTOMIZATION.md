# Customization Guide

## Essential Customizations

### 1. Update Business Name

Replace "Your Business Name" throughout:
- `src/pages/index.astro` - Page title and content
- `src/components/Header.astro` - Navigation
- `src/components/Footer.astro` - Footer

### 2. Update Contact Information

Edit contact details in:
- `src/pages/index.astro` - Phone, address, hours
- `src/config/analytics.ts` - Short URLs and destinations

### 3. Replace Images

Place your images in `/public/images/`:
- Hero image
- Service images
- Team photos
- Location photos

### 4. Update Services

Edit services in `src/config/services.ts`:
```typescript
{
  id: 'your-service',
  name: 'Your Service',
  slug: 'your-service',
  category: 'Service Category',
  description: 'Brief description',
  fullDescription: 'Detailed description...',
  price: '$XXX',
  duration: 'Duration',
  features: ['Feature 1', 'Feature 2'],
  benefits: ['Benefit 1', 'Benefit 2'],
  image: '/images/service.jpg',
  icon: 'SVG path...',
  popular: false,
  subServices: [...]
}
```

### 5. Update Locations

Edit `src/config/locations.ts`:
```typescript
{
  id: 'your-location',
  name: 'Location Name',
  address: { street, city, state, zip, country },
  phone: '+1 (555) 123-4567',
  email: 'location@yourbusiness.com',
  hours: { weekdays, saturday, sunday },
  image: '/images/location.jpg',
  mapLink: 'https://maps.google.com/?q=...',
  coordinates: { lat, lng },
  features: ['Feature 1', 'Feature 2'],
  description: 'Location description',
  isMain: true
}
```

### 6. Configure Short URLs

Edit `src/config/analytics.ts`:
```typescript
{
  id: 'whatsapp-main',
  short: 'wa',
  destination: 'https://wa.me/YOUR_NUMBER',
  category: 'whatsapp',
  label: 'WhatsApp Booking',
  description: 'Main WhatsApp booking link',
  isActive: true
}
```

## Styling Customization

### Change Colors

Edit `tailwind.config.cjs`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
      secondary: '#YOUR_COLOR',
    }
  }
}
```

### Change Fonts

Edit `src/styles/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont');
```

## Content Sections

### Hero Section
- Update headline
- Update description
- Update CTA buttons

### Services Section
- Add your services in `src/config/services.ts`
- Update pricing and descriptions
- Configure sub-services/packages
- Set popular service flags
- Services automatically generate individual pages at `/services/[service]`

### About Section
- Write your business story
- Add team information
- Include statistics

### Locations Section
- Add your locations in `src/config/locations.ts`
- Set business hours for each location
- Add location features and amenities
- Locations automatically generate individual pages at `/locations/[location]`

## Advanced Customization

### Add New Pages

1. Create file in `src/pages/`
2. Import BaseLayout
3. Add content
4. Update navigation in Header component

### Modify Components

Components are in `src/components/`:
- `BaseLayout.astro` - Main layout wrapper
- `Header.astro` - Navigation header
- `Footer.astro` - Footer
- Custom components as needed

## SEO Customization

### Update Meta Tags

Edit each page's frontmatter:
```javascript
---
title: "Your Page Title"
description: "Your page description"
---
```

### Update Schema Markup

Edit structured data in `src/pages/index.astro`:
```javascript
const schema = {
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  // ... more fields
};
```

## Testing

After customizing:
1. Run `npm run dev` to preview locally
2. Test all links and forms
3. Check mobile responsiveness
4. Verify images load correctly
5. Test short URLs

## Deployment

Once customized:
1. Run `npm run build` to build
2. Deploy to your hosting platform
3. Verify live site works correctly

