# Color Themes Guide

This template includes **3 beautiful color themes** based on curated palettes.

## 🎨 Available Themes

### 1. Alien (Fresh Green) - Default
**Best for:** Health, wellness, eco-friendly, medical, dental services

- **Primary:** Alien Green (#32ac64) - Main brand color
- **Secondary:** Lighter Green (#54ca84) - Call-to-action
- **Accent:** Soft Mint (#ddf4e6) - Highlights and backgrounds

Perfect for businesses focused on health, growth, and natural services.

### 2. Jellyfish (Cool Purple)
**Best for:** Creative agencies, tech, beauty, luxury services

- **Primary:** Jellyfish Purple (#7a7add) - Main brand color
- **Secondary:** Light Purple (#a2a2fc) - Call-to-action
- **Accent:** Very Light Purple (#ececfe) - Highlights and backgrounds

Great for businesses that want sophistication with a modern feel.

### 3. Papaya (Warm Orange)
**Best for:** Restaurants, cafes, fitness, hospitality, warm brands

- **Primary:** Papaya Orange (#de5c1c) - Main brand color
- **Secondary:** Light Orange (#ff7b3a) - Call-to-action
- **Accent:** Cream (#ffe5d8) - Highlights and backgrounds

Ideal for businesses that want to convey warmth, energy, and approachability.

## 🔄 How to Switch Themes

### Option 1: Interactive Theme Switcher (Built-in)
The website includes a theme switcher button in the header! 🎨

- **Location:** Top right corner of the header (desktop only)
- **How to use:** Hover over the palette icon to see theme options
- **Available themes:** Alien, Jellyfish, Papaya
- **Auto-save:** Your preference is saved in browser localStorage

### Option 2: Change Default Theme
Edit `src/components/BaseLayout.astro`:
```astro
<html lang="en" data-theme="alien">
```
Change to:
- `data-theme="alien"` - Fresh Green
- `data-theme="jellyfish"` - Cool Purple
- `data-theme="papaya"` - Warm Orange

### Option 3: Programmatic Theme Change
Use JavaScript to change themes:
```javascript
function changeTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Example
changeTheme('jellyfish');
```

## 🎨 Using Theme Colors

All components use DaisyUI theme tokens, so they automatically adapt to your chosen theme:

- `bg-primary` - Primary background color
- `text-primary` - Primary text color
- `bg-secondary` - Secondary background color
- `text-secondary` - Secondary text color
- `bg-accent` - Accent background color
- `text-accent` - Accent text color
- `bg-neutral` - Neutral background color
- `text-neutral-content` - Neutral text color
- `bg-base-100` - Main background color
- `text-base-content` - Main text color

## 🎯 Theme Consistency

The header and footer now automatically use your theme colors:

- **Header:** Primary color for logo and CTA buttons
- **Footer:** Neutral background with primary accents
- **Navigation:** Primary color for active states
- **Social Icons:** Theme-aware colors (accent, secondary, success)

## 💡 Customization

To create your own theme, edit `tailwind.config.cjs` and add a new theme object:

```javascript
{
  myTheme: {
    primary: '#YOUR_COLOR',
    'primary-focus': '#DARKER_COLOR',
    'primary-content': '#FFFFFF',
    // ... add other colors
  }
}
```

Then use `data-theme="myTheme"` in your BaseLayout.

## 📝 Notes

- All themes maintain accessibility contrast ratios
- Colors are sourced from curated professional palettes
- The Alien theme is set as default
- Header and footer automatically adapt to theme changes
- All themes use consistent greyscale for neutral elements

