# Video Features Documentation

## 🎥 Video Implementation

This template includes optimized video backgrounds with intelligent fallbacks for better UX across all devices and network conditions.

## ✨ Features

### Smart Video Loading
- **Desktop**: Videos load automatically for enhanced visual experience
- **Mobile**: Images show instead (saves bandwidth)
- **Slow Connection**: Automatically falls back to images
- **Reduced Motion**: Respects user accessibility preferences
- **Error Handling**: Gracefully falls back to images if video fails

### Performance Optimizations

1. **Lazy Loading**: Videos only load when in viewport
2. **Connection Detection**: Checks network speed before loading videos
3. **Bandwidth Aware**: Auto-detects slow connections (2G, slow-2G)
4. **Poster Images**: Shows image immediately while video loads
5. **Intersection Observer**: Only plays videos when visible

## 📱 Mobile & Low Bandwidth UX

### Automatic Fallbacks
- Mobile devices (< 768px): Show images only
- Slow connections: Show images only
- Connection < 1.5 Mbps: Show images only
- Video errors: Show images only

### Why This Matters
- **Saves Data**: Mobile users don't waste bandwidth on videos
- **Faster Load**: Images load instantly
- **Better UX**: No waiting for videos to buffer
- **Accessibility**: Respects user preferences

## 🎬 Video Locations

### Hero Section
- Desktop: `/videos/6763401-hd_1080_1920_25fps.mp4`
- Fallback: `/images/pexels-cedric-fauntleroy-4269694.jpg`

### CTA Section
- Desktop: `/videos/4489831-uhd_3840_2160_25fps.mp4`
- Fallback: `/images/nikunj.jpg`

## 🔧 Technical Implementation

### HTML Structure
```html
<video 
  autoplay 
  loop 
  muted 
  playsinline
  poster="/images/fallback.jpg"
  class="w-full h-full object-cover"
  onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
>
  <source src="/videos/desktop.mp4" type="video/mp4" media="(min-width: 768px)">
  <source src="/videos/mobile.mp4" type="video/mp4">
</video>
<img 
  src="/images/fallback.jpg" 
  alt="Description"
  class="w-full h-full object-cover hidden"
  loading="lazy"
/>
```

### JavaScript Detection
```javascript
// Detects mobile, slow connection, and reduced motion
const isMobile = window.innerWidth < 768;
const isSlowConnection = connection.effectiveType === '2g';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

## 📊 Connection Types Detected

- **slow-2g**: < 50 kbps → Shows images
- **2g**: < 250 kbps → Shows images  
- **3g**: < 750 kbps → May show videos
- **4g**: > 750 kbps → Shows videos
- **Downlink < 1.5 Mbps**: Shows images

## 🎨 Adding More Videos

1. Add video files to `/public/videos/`
2. Use smaller files for mobile (< 5MB recommended)
3. Provide poster images in `/public/images/`
4. Update video sources in HTML
5. Test on slow networks

## ✅ Best Practices

- Keep video files under 10MB for desktop
- Use MP4 format (best browser support)
- Always provide poster images
- Test on mobile devices
- Respect user preferences
- Monitor performance impact

## 🔍 Testing

Test these scenarios:
- [ ] Desktop with fast connection (should show video)
- [ ] Mobile device (should show image)
- [ ] Slow 3G connection (should show image)
- [ ] Video file missing (should show image)
- [ ] Reduced motion preference (should show image)

## 📈 Performance Impact

Without optimization:
- Mobile: ~50MB+ wasted on videos
- Slow 3G: Long load times
- Poor UX: Videos buffer endlessly

With optimization:
- Mobile: ~500KB (images only)
- Fast load: Instant image display
- Great UX: No waiting, smooth experience

