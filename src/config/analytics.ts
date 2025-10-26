// Multi-platform Analytics Configuration
// Only enabled providers with valid API keys will be loaded

export interface ShortLink {
  id: string;
  short: string;
  destination: string;
  category: 'whatsapp' | 'phone' | 'maps' | 'social' | 'service' | 'emergency' | 'transport' | 'booking';
  label: string;
  description: string;
  isActive: boolean;
}

// Analytics Providers Configuration
export interface AnalyticsConfig {
  // Google Analytics 4
  googleAnalytics?: {
    enabled: boolean;
    measurementId: string;
  };
  
  // Google Tag Manager
  googleTagManager?: {
    enabled: boolean;
    containerId: string;
  };
  
  // Meta (Facebook Pixel)
  meta?: {
    enabled: boolean;
    pixelId: string;
  };
  
  // LinkedIn Insight Tag
  linkedin?: {
    enabled: boolean;
    partnerId: string;
  };
  
  // TikTok Pixel
  tiktok?: {
    enabled: boolean;
    pixelId: string;
  };
  
  // Pinterest Tag
  pinterest?: {
    enabled: boolean;
    tagId: string;
  };
  
  // Reddit Pixel
  reddit?: {
    enabled: boolean;
    pixelId: string;
  };
}

// Load analytics config from environment variables
export const analyticsConfig: AnalyticsConfig = {
  googleAnalytics: import.meta.env.PUBLIC_GA_ID ? {
    enabled: true,
    measurementId: import.meta.env.PUBLIC_GA_ID
  } : undefined,
  
  googleTagManager: import.meta.env.PUBLIC_GTM_ID ? {
    enabled: true,
    containerId: import.meta.env.PUBLIC_GTM_ID
  } : undefined,
  
  meta: import.meta.env.PUBLIC_META_PIXEL_ID ? {
    enabled: true,
    pixelId: import.meta.env.PUBLIC_META_PIXEL_ID
  } : undefined,
  
  linkedin: import.meta.env.PUBLIC_LINKEDIN_PARTNER_ID ? {
    enabled: true,
    partnerId: import.meta.env.PUBLIC_LINKEDIN_PARTNER_ID
  } : undefined,
  
  tiktok: import.meta.env.PUBLIC_TIKTOK_PIXEL_ID ? {
    enabled: true,
    pixelId: import.meta.env.PUBLIC_TIKTOK_PIXEL_ID
  } : undefined,
  
  pinterest: import.meta.env.PUBLIC_PINTEREST_TAG_ID ? {
    enabled: true,
    tagId: import.meta.env.PUBLIC_PINTEREST_TAG_ID
  } : undefined,
  
  reddit: import.meta.env.PUBLIC_REDDIT_PIXEL_ID ? {
    enabled: true,
    pixelId: import.meta.env.PUBLIC_REDDIT_PIXEL_ID
  } : undefined,
};

// Check if any analytics are enabled
export const hasAnalytics = Object.values(analyticsConfig).some(config => config?.enabled);

// Short Links Configuration
// ⚠️ IMPORTANT: Update all these URLs with your actual business information
export const shortLinks: ShortLink[] = [
  {
    id: 'whatsapp-main',
    short: 'wa',
    destination: 'https://wa.me/1234567890', // ⚠️ UPDATE: Replace with your WhatsApp number
    category: 'whatsapp',
    label: 'WhatsApp Booking',
    description: 'Book appointment via WhatsApp',
    isActive: true
  },
  {
    id: 'phone-main',
    short: 'call',
    destination: 'tel:+1-555-123-4567', // ⚠️ UPDATE: Replace with your phone number
    category: 'phone',
    label: 'Phone Call',
    description: 'Call our business',
    isActive: true
  },
  {
    id: 'maps-location',
    short: 'map',
    destination: 'https://maps.google.com/?q=123+Main+Street+City+State+12345', // ⚠️ UPDATE: Replace with your address
    category: 'maps',
    label: 'Google Maps',
    description: 'Find us on Google Maps',
    isActive: true
  },
  {
    id: 'instagram-social',
    short: 'ig',
    destination: 'https://instagram.com/examplebusiness', // ⚠️ UPDATE: Replace with your Instagram handle
    category: 'social',
    label: 'Instagram',
    description: 'Follow us on Instagram',
    isActive: true
  },
  {
    id: 'tiktok-social',
    short: 'tiktok',
    destination: 'https://tiktok.com/@examplebusiness', // ⚠️ UPDATE: Replace with your TikTok handle
    category: 'social',
    label: 'TikTok',
    description: 'Follow us on TikTok',
    isActive: true
  },
  {
    id: 'facebook-social',
    short: 'fb',
    destination: 'https://facebook.com/examplebusiness', // ⚠️ UPDATE: Replace with your Facebook page
    category: 'social',
    label: 'Facebook',
    description: 'Like us on Facebook',
    isActive: true
  },
  {
    id: 'linkedin-social',
    short: 'li',
    destination: 'https://linkedin.com/company/examplebusiness', // ⚠️ UPDATE: Replace with your LinkedIn company page
    category: 'social',
    label: 'LinkedIn',
    description: 'Connect with us on LinkedIn',
    isActive: true
  },
  {
    id: 'emergency-contact',
    short: 'emergency',
    destination: 'https://wa.me/1234567890?text=Emergency%20Contact', // ⚠️ UPDATE: Replace with your emergency contact number
    category: 'emergency',
    label: 'Emergency Contact',
    description: 'Emergency contact',
    isActive: true
  }
];

// Event tracking configuration
export const TRACKING_EVENTS = {
  WHATSAPP_CLICK: 'whatsapp_click',
  PHONE_CLICK: 'phone_click',
  MAPS_CLICK: 'maps_click',
  SOCIAL_CLICK: 'social_click',
  SERVICE_INQUIRY: 'service_inquiry',
  EMERGENCY_CONTACT: 'emergency_contact',
  APPOINTMENT_BOOKING: 'appointment_booking',
  PAGE_VIEW: 'page_view',
  SHORT_LINK_CLICK: 'short_link_click'
} as const;

// Universal event tracking function
// This sends events to ALL enabled analytics platforms
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window === 'undefined') return;
  
  const eventData = {
    event_category: 'engagement',
    ...parameters
  };
  
  // Google Analytics 4
  if (analyticsConfig.googleAnalytics?.enabled && window.gtag) {
    window.gtag('event', eventName, eventData);
  }
  
  // Google Tag Manager
  if (analyticsConfig.googleTagManager?.enabled && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData
    });
  }
  
  // Meta Pixel
  if (analyticsConfig.meta?.enabled && window.fbq) {
    window.fbq('track', eventName, eventData);
  }
  
  // LinkedIn Insight Tag
  if (analyticsConfig.linkedin?.enabled && window.lintrk) {
    window.lintrk('track', { conversion_name: eventName });
  }
  
  // TikTok Pixel
  if (analyticsConfig.tiktok?.enabled && window.ttq) {
    window.ttq.track(eventName, eventData);
  }
  
  // Pinterest Tag
  if (analyticsConfig.pinterest?.enabled && window.pintrk) {
    window.pintrk('track', eventName, eventData);
  }
  
  // Reddit Pixel
  if (analyticsConfig.reddit?.enabled && window.rdt) {
    window.rdt('track', eventName, eventData);
  }
}

// Track short link clicks with comprehensive event data
export function trackShortLinkClick(link: ShortLink) {
  trackEvent(TRACKING_EVENTS.SHORT_LINK_CLICK, {
    event_category: link.category,
    event_label: link.label,
    link_id: link.id,
    destination: link.destination,
    short_url: link.short,
    link_description: link.description
  });
}

// Helper function to get short link by ID
export function getShortLink(short: string): ShortLink | undefined {
  return shortLinks.find(link => link.short === short && link.isActive);
}

// Helper function to get all active short links
export function getActiveShortLinks(): ShortLink[] {
  return shortLinks.filter(link => link.isActive);
}

// TypeScript window extensions for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    fbq?: (...args: any[]) => void;
    lintrk?: (...args: any[]) => void;
    ttq?: {
      track: (event: string, data?: any) => void;
    };
    pintrk?: (...args: any[]) => void;
    rdt?: (...args: any[]) => void;
  }
}
