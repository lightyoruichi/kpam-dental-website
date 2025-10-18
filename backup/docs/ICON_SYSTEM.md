# Icon System Documentation

## Overview

The custom Icon system replaces the problematic `astro-icon` package with a reliable Svelte-based component that uses authentic brand logos from Simple Icons.

## Components

### `src/components/Icon.svelte`

A custom Svelte component that renders SVG icons with the following features:

- **Material Design Icons**: Hardcoded SVG paths for common UI icons
- **Brand Icons**: Dynamic loading from Simple Icons package for authentic logos
- **Fallback System**: Defaults to arrow-right icon if requested icon not found
- **Props**:
  - `icon` (string): Icon identifier (e.g., 'mdi:arrow-right', 'simple-icons:openai')
  - `className` (string): CSS classes to apply
  - `width` (string): Icon width (defaults to '1em')
  - `height` (string): Icon height (defaults to '1em')

## Supported Icons

### Material Design Icons (MDI)
- `mdi:arrow-right`: Right-pointing arrow
- `mdi:chevron-left`: Left chevron
- `mdi:chevron-right`: Right chevron  
- `mdi:content-copy`: Copy/duplicate icon

### Brand Icons (Simple Icons)
- `simple-icons:openai`: OpenAI logo
- `simple-icons:anthropic`: Anthropic logo
- `simple-icons:googlegemini`: Google Gemini logo
- `simple-icons:perplexity`: Perplexity logo

## Usage

```svelte
<!-- Material Design Icon -->
<Icon icon="mdi:arrow-right" className="w-4 h-4 text-gray-500" />

<!-- Brand Icon -->
<Icon icon="simple-icons:openai" className="w-8 h-8 text-blue-500" />

<!-- Custom sizing -->
<Icon icon="mdi:content-copy" width="24" height="24" className="text-green-600" />
```

## Technical Details

### Icon Resolution

1. **MDI Icons**: Resolved from hardcoded `mdiPaths` object
2. **Simple Icons**: Dynamically resolved from `simple-icons` package using variations:
   - `si{IconName}` (e.g., `siOpenai`)
   - `si{iconname}` (e.g., `siopenai`)  
   - `si{iconnamewithoutspecialchars}` (fallback)

### Dependencies

- `simple-icons`: ^15.9.0 (provides authentic brand SVG paths)

### Benefits

- **Reliability**: No external CDN dependencies or loading errors
- **Performance**: SVG icons embedded directly in components
- **Quality**: Official brand logos from Simple Icons
- **Consistency**: All icons use 24x24 viewBox
- **Flexibility**: Easy to add new icons by updating the component

## Migration

Previously used `astro-icon` which caused "local" icon set errors. The new system:

1. Removed `astro-icon` package and integration
2. Created custom `Icon.svelte` component
3. Updated all icon usage in `tools.astro` and `[toolId].astro`
4. Added `simple-icons` dependency for brand logos

## Troubleshooting

### Icon Not Displaying
1. Check icon name format (must include prefix: `mdi:` or `simple-icons:`)
2. Verify icon exists in Simple Icons package
3. Check console for JavaScript errors
4. Ensure component is properly imported

### Adding New Icons
1. **For MDI icons**: Add SVG path to `mdiPaths` object
2. **For brand icons**: Icon should be available automatically from Simple Icons
3. **For custom icons**: Add to `mdiPaths` or extend the resolution logic
