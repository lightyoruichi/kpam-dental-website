// Analytics configuration for KPAM Dental Website
export interface ShortLink {
  id: string;
  short: string;
  destination: string;
  category: 'whatsapp' | 'phone' | 'maps' | 'social' | 'service' | 'emergency' | 'transport';
  label: string;
  description: string;
  isActive: boolean;
}

export const shortLinks: ShortLink[] = [
  {
    id: 'whatsapp-main',
    short: 'wa',
    destination: 'https://wa.me/601137118155',
    category: 'whatsapp',
    label: 'WhatsApp Booking',
    description: 'Main WhatsApp booking link',
    isActive: true
  },
  {
    id: 'phone-main',
    short: 'call',
    destination: 'tel:+601137118155',
    category: 'phone',
    label: 'Phone Call',
    description: 'Direct phone call to clinic',
    isActive: true
  },
  {
    id: 'maps-location',
    short: 'map',
    destination: 'https://g.co/kgs/4YfpEsw',
    category: 'maps',
    label: 'Google Maps',
    description: 'Clinic location on Google Maps',
    isActive: true
  },
  {
    id: 'instagram-social',
    short: 'ig',
    destination: 'https://instagram.com/klinikpergigian_alammegah',
    category: 'social',
    label: 'Instagram',
    description: 'Follow us on Instagram',
    isActive: true
  },
  {
    id: 'tiktok-social',
    short: 'tiktok',
    destination: 'https://tiktok.com/@kpam06',
    category: 'social',
    label: 'TikTok',
    description: 'Follow us on TikTok',
    isActive: true
  },
  {
    id: 'emergency-contact',
    short: 'emergency',
    destination: 'https://wa.me/601137118155?text=Emergency%20Dental%20Care',
    category: 'emergency',
    label: 'Emergency Contact',
    description: 'Emergency dental care contact',
    isActive: true
  },
  {
    id: 'grab-transport',
    short: 'grab',
    destination: 'https://grab.onelink.me/2695613898?af_dp=grab%3A%2F%2Fopen%3FdropOffAddress%3DNO.%2B6%2BJalan%2BLabu%2B28%252F23%2BTaman%2BAlam%2BMegah%2BShah%2BAlam%2BMalaysia%2B40400%26dropOffLatitude%3D3.0044673%26dropOffLongitude%3D101.561353%26pickUpAddress%3DCurrent%2BLocation%26pickUpLatitude%3D1.234567%26pickUpLongitude%3D3.456789%26screenType%3DBOOKING%26sourceID%3D%26taxiTypeId%3D227&c=&pid=',
    category: 'transport',
    label: 'Grab Transport',
    description: 'Book Grab ride to clinic',
    isActive: true
  },
  {
    id: 'waze-navigation',
    short: 'waze',
    destination: 'https://waze.com/ul?q=NO.%206,%20Jalan%20Labu%2028/23,%20Taman%20Alam%20Megah,%20Shah%20Alam,%20Malaysia%2040400',
    category: 'transport',
    label: 'Waze Navigation',
    description: 'Navigate to clinic with Waze',
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
