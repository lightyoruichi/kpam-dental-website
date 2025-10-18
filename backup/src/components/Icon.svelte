<script>
  // Import simple-icons
  import * as simpleIcons from 'simple-icons';
  
  export let icon;
  export let className = '';
  export let width = undefined;
  export let height = undefined;
  
  // Map of commonly used Material Design Icons to their SVG paths
  const mdiPaths = {
    'mdi:arrow-right': 'M4,11V13H16L10.5,18.5L11.91,19.91L19.82,12L11.91,4.09L10.5,5.5L16,11H4Z',
    'mdi:chevron-left': 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z',
    'mdi:chevron-right': 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',
    'mdi:content-copy': 'M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z'
  };
  
  function getIconPath(iconName) {
    // Handle MDI icons
    if (iconName.startsWith('mdi:')) {
      return mdiPaths[iconName] || mdiPaths['mdi:arrow-right'];
    }
    
    // Handle Simple Icons
    if (iconName.startsWith('simple-icons:')) {
      const iconKey = iconName.replace('simple-icons:', '').toLowerCase();
      
      // Try different variations of the icon key
      const variations = [
        `si${iconKey.charAt(0).toUpperCase() + iconKey.slice(1)}`,
        `si${iconKey}`,
        `si${iconKey.replace(/[\W_]+/g, '')}` // Remove special characters
      ];
      
      for (const variation of variations) {
        if (simpleIcons[variation]) {
          return simpleIcons[variation].path;
        }
      }
    }
    
    // Default fallback
    return mdiPaths['mdi:arrow-right'];
  }
  
  $: svgPath = getIconPath(icon);
  $: viewBox = '0 0 24 24';
</script>

<svg 
  class={className} 
  width={width || '1em'} 
  height={height || '1em'} 
  viewBox={viewBox}
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d={svgPath} />
</svg>
