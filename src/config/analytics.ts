// Analytics configuration for short URLs and tracking
export interface ShortLink {
  id: string;
  short: string;
  destination: string;
  category: 'whatsapp' | 'phone' | 'maps' | 'social' | 'service' | 'emergency' | 'transport' | 'booking';
  label: string;
  description: string;
  isActive: boolean;
}

export const shortLinks: ShortLink[] = [
  {
    id: 'whatsapp-main',
    short: 'wa',
    destination: 'https://wa.me/1239230821',
    category: 'whatsapp',
    label: 'WhatsApp Booking',
    description: 'Book appointment via WhatsApp',
    isActive: true
  },
  {
    id: 'phone-main',
    short: 'call',
    destination: 'tel:+1239230821',
    category: 'phone',
    label: 'Phone Call',
    description: 'Call our clinic',
    isActive: true
  },
  {
    id: 'maps-location',
    short: 'map',
    destination: 'https://maps.google.com/?q=123+Dental+Plaza+City+State+12345',
    category: 'maps',
    label: 'Google Maps',
    description: 'Find us on Google Maps',
    isActive: true
  },
  {
    id: 'instagram-social',
    short: 'ig',
    destination: 'https://instagram.com/dentixa',
    category: 'social',
    label: 'Instagram',
    description: 'Follow us on Instagram',
    isActive: true
  },
  {
    id: 'tiktok-social',
    short: 'tiktok',
    destination: 'https://tiktok.com/@dentixa',
    category: 'social',
    label: 'TikTok',
    description: 'Follow us on TikTok',
    isActive: true
  },
  {
    id: 'facebook-social',
    short: 'fb',
    destination: 'https://facebook.com/dentixa',
    category: 'social',
    label: 'Facebook',
    description: 'Like us on Facebook',
    isActive: true
  },
  {
    id: 'emergency-contact',
    short: 'emergency',
    destination: 'https://wa.me/1239230821?text=Emergency%20Dental%20Care',
    category: 'emergency',
    label: 'Emergency Contact',
    description: 'Emergency dental care',
    isActive: true
  },
  {
    id: 'grab-bangsar',
    short: 'grab',
    destination: 'https://grab.onelink.me/2695613898?af_dp=grab%3A%2F%2Fopen%3FdropOffLatitude%3D3.1569%26dropOffLongitude%3D101.6598%26screenType%3DBOOKING%26taxiTypeId%3D302&c=&pid=',
    category: 'transport',
    label: 'Book Grab to Bangsar',
    description: 'Book a Grab ride to Bangsar, Kuala Lumpur',
    isActive: true
  }
];

// Google Analytics 4 Configuration
export const GA_CONFIG = {
  measurementId: 'G-XXXXXXXXXX', // Replace with actual GA4 Measurement ID
  enabled: true,
  debug: false
};

// Event tracking configuration
export const TRACKING_EVENTS = {
  WHATSAPP_CLICK: 'whatsapp_click',
  PHONE_CLICK: 'phone_click',
  MAPS_CLICK: 'maps_click',
  SOCIAL_CLICK: 'social_click',
  SERVICE_INQUIRY: 'service_inquiry',
  EMERGENCY_CONTACT: 'emergency_contact',
  APPOINTMENT_BOOKING: 'appointment_booking',
  PAGE_VIEW: 'page_view'
} as const;

// Helper function to track events
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      ...parameters
    });
  }
}

// Helper function to track short link clicks
export function trackShortLinkClick(link: ShortLink) {
  trackEvent('short_link_click', {
    event_category: link.category,
    event_label: link.label,
    link_id: link.id,
    destination: link.destination,
    short_url: link.short
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
