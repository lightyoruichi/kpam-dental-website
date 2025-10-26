// Site Configuration - Customize this for your business
export const siteConfig = {
  // Business Information
  business: {
    name: "Your Business Name",
    shortName: "Your Business",
    tagline: "Your Business Tagline Here",
    description: "A brief description of your business and what you offer to your customers.",
    
    // Contact Information
    phone: "+1 (23) 9230 821", // ⚠️ UPDATE: Replace with your phone number
    email: "info@example.com", // ⚠️ UPDATE: Replace with your email
    address: {
      street: "123 Main Street", // ⚠️ UPDATE: Replace with your street address
      city: "City", // ⚠️ UPDATE: Replace with your city
      state: "State", // ⚠️ UPDATE: Replace with your state/province
      zip: "12345", // ⚠️ UPDATE: Replace with your postal code
      country: "US" // ⚠️ UPDATE: Replace with your country code
    },
    
    // Business Hours
    hours: {
      weekdays: "Monday - Sunday: 09:00 AM - 08:00 PM",
      saturday: "Saturday: 09:00 AM - 08:00 PM",
      sunday: "Sunday: 09:00 AM - 08:00 PM"
    },
    
    // Social Media
    social: {
      instagram: "@examplebusiness", // ⚠️ UPDATE: Replace with your Instagram handle
      tiktok: "@examplebusiness", // ⚠️ UPDATE: Replace with your TikTok handle
      facebook: "examplebusiness", // ⚠️ UPDATE: Replace with your Facebook page
      twitter: "@examplebusiness", // ⚠️ UPDATE: Replace with your Twitter/X handle
      linkedin: "examplebusiness", // ⚠️ UPDATE: Replace with your LinkedIn company page
      youtube: "examplebusiness" // ⚠️ UPDATE: Replace with your YouTube channel
    },
    
    // WhatsApp (if applicable)
    whatsapp: {
      enabled: true, // ⚠️ UPDATE: Set to false if you don't use WhatsApp
      number: "+1-555-EXAMPLE-123", // ⚠️ UPDATE: Replace with your WhatsApp number
      message: "Hi, I'd like to learn more about your services" // ⚠️ UPDATE: Customize your default message
    }
  },
  
  // Theme Configuration:
  // To change themes, edit the 'defaultTheme' in tailwind.config.cjs
  // Available themes: 'alien' (green), 'jellyfish' (purple), 'papaya' (orange)
  // Users can also switch themes via the theme switcher in the header
  
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
    siteUrl: "https://example.com",
    defaultTitle: "Your Business Name - Your Business Tagline",
    defaultDescription: "Professional services with modern technology and excellent customer care.",
    keywords: "your business, professional services, customer service, quality"
  }
};

