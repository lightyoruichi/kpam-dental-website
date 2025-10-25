// Site Configuration - Customize this for your business
export const siteConfig = {
  // Business Information
  business: {
    name: "Dentixa",
    shortName: "Dentixa",
    tagline: "Get a Beautiful Straight Smile Quickly",
    description: "Transform your smile quickly and effortlessly with our exceptional dental services. We understand the importance of having a beautiful, straight smile.",
    
    // Contact Information
    phone: "+1 (23) 9230 821",
    email: "dentixadentist@gmail.com",
    address: {
      street: "123 Dental Plaza",
      city: "City",
      state: "State",
      zip: "12345",
      country: "US"
    },
    
    // Business Hours
    hours: {
      weekdays: "Monday - Sunday: 09:00 AM - 08:00 PM",
      saturday: "Saturday: 09:00 AM - 08:00 PM",
      sunday: "Sunday: 09:00 AM - 08:00 PM"
    },
    
    // Social Media
    social: {
      instagram: "@dentixa",
      tiktok: "@dentixa",
      facebook: "dentixa",
      twitter: "@dentixa",
      linkedin: "dentixa",
      youtube: "dentixa"
    },
    
    // WhatsApp (if applicable)
    whatsapp: {
      enabled: true,
      number: "+1239230821",
      message: "Hi, I'd like to book a dental appointment"
    }
  },
  
  // Color Theme Configuration - Dentixa Blue Theme
  theme: {
    primary: {
      light: "#3b82f6", // blue-500
      DEFAULT: "#2563eb", // blue-600
      dark: "#1d4ed8" // blue-700
    },
    secondary: {
      light: "#60a5fa", // blue-400
      DEFAULT: "#3b82f6", // blue-500
      dark: "#2563eb" // blue-600
    },
    accent: {
      light: "#06b6d4", // cyan-500
      DEFAULT: "#0891b2", // cyan-600
      dark: "#0e7490" // cyan-700
    }
  },
  
  // Service Categories (customize these)
  serviceCategories: [
    {
      name: "Basic Services",
      description: "Essential services to get you started",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      name: "Premium Services",
      description: "Advanced solutions for better results",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    },
    {
      name: "Emergency Services",
      description: "24/7 support when you need it most",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
    }
  ],
  
  // SEO Configuration
  seo: {
    siteUrl: "https://dentixa.com",
    defaultTitle: "Dentixa - Get a Beautiful Straight Smile Quickly",
    defaultDescription: "Transform your smile quickly and effortlessly with our exceptional dental services. Professional dental care with modern technology.",
    keywords: "dental clinic, dentist, dental care, teeth cleaning, braces, dental implants, cosmetic dentistry, smile transformation"
  }
};

