// Location configuration for multi-location support
// ⚠️ IMPORTANT: Update all location details with your actual business information

export interface Location {
  id: string;
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  image: string;
  mapLink: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  features: string[];
  description: string;
  isMain: boolean;
}

export const locations: Location[] = [
  {
    id: 'main-office',
    name: 'Main Office',
    address: {
      street: '123 Main Street', // ⚠️ UPDATE: Replace with your street address
      city: 'City', // ⚠️ UPDATE: Replace with your city
      state: 'State', // ⚠️ UPDATE: Replace with your state/province
      zip: '12345', // ⚠️ UPDATE: Replace with your postal code
      country: 'US' // ⚠️ UPDATE: Replace with your country code
    },
    phone: '+1 (555) 123-4567', // ⚠️ UPDATE: Replace with your phone number
    email: 'info@example.com', // ⚠️ UPDATE: Replace with your email
    hours: {
      weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM', // ⚠️ UPDATE: Your weekday hours
      saturday: 'Saturday: 9:00 AM - 4:00 PM', // ⚠️ UPDATE: Your Saturday hours
      sunday: 'Sunday: Closed' // ⚠️ UPDATE: Your Sunday hours
    },
    image: '/images/pexels-cottonbro-6529219.jpg', // ⚠️ UPDATE: Add your location image
    mapLink: 'https://maps.google.com/?q=123+Main+Street+City+State+12345', // ⚠️ UPDATE: Your Google Maps link
    coordinates: {
      lat: 40.7128, // ⚠️ UPDATE: Your latitude
      lng: -74.0060 // ⚠️ UPDATE: Your longitude
    },
    features: ['Free Parking', 'Wheelchair Access', 'Conference Rooms', 'Public Transit'], // ⚠️ UPDATE: Your location features
    description: 'Our main office location in the heart of the city, featuring modern facilities and easy access.', // ⚠️ UPDATE: Your location description
    isMain: true
  },
  {
    id: 'downtown',
    name: 'Downtown Location',
    address: {
      street: '456 Business Boulevard', // ⚠️ UPDATE: Replace with your street address
      city: 'City', // ⚠️ UPDATE: Replace with your city
      state: 'State', // ⚠️ UPDATE: Replace with your state/province
      zip: '12345', // ⚠️ UPDATE: Replace with your postal code
      country: 'US' // ⚠️ UPDATE: Replace with your country code
    },
    phone: '+1 (555) 123-4568', // ⚠️ UPDATE: Replace with your phone number
    email: 'downtown@example.com', // ⚠️ UPDATE: Replace with your email
    hours: {
      weekdays: 'Monday - Friday: 8:00 AM - 7:00 PM', // ⚠️ UPDATE: Your weekday hours
      saturday: 'Saturday: 10:00 AM - 3:00 PM', // ⚠️ UPDATE: Your Saturday hours
      sunday: 'Sunday: Closed' // ⚠️ UPDATE: Your Sunday hours
    },
    image: '/images/pexels-cottonbro-6528907.jpg', // ⚠️ UPDATE: Add your location image
    mapLink: 'https://maps.google.com/?q=456+Business+Boulevard+City+State+12345', // ⚠️ UPDATE: Your Google Maps link
    coordinates: {
      lat: 40.7580, // ⚠️ UPDATE: Your latitude
      lng: -73.9855 // ⚠️ UPDATE: Your longitude
    },
    features: ['Metro Access', 'Parking Garage', 'Extended Hours', 'Prime Location'], // ⚠️ UPDATE: Your location features
    description: 'Convenient downtown location with extended hours and easy metro access.', // ⚠️ UPDATE: Your location description
    isMain: false
  },
  {
    id: 'suburbs',
    name: 'Suburban Branch',
    address: {
      street: '789 Village Square', // ⚠️ UPDATE: Replace with your street address
      city: 'Suburban City', // ⚠️ UPDATE: Replace with your city
      state: 'State', // ⚠️ UPDATE: Replace with your state/province
      zip: '67890', // ⚠️ UPDATE: Replace with your postal code
      country: 'US' // ⚠️ UPDATE: Replace with your country code
    },
    phone: '+1 (555) 123-4569', // ⚠️ UPDATE: Replace with your phone number
    email: 'suburbs@example.com', // ⚠️ UPDATE: Replace with your email
    hours: {
      weekdays: 'Monday - Friday: 9:00 AM - 5:00 PM', // ⚠️ UPDATE: Your weekday hours
      saturday: 'Saturday: 9:00 AM - 2:00 PM', // ⚠️ UPDATE: Your Saturday hours
      sunday: 'Sunday: Closed' // ⚠️ UPDATE: Your Sunday hours
    },
    image: '/images/pexels-karolina-grabowska-7195433.jpg', // ⚠️ UPDATE: Add your location image
    mapLink: 'https://maps.google.com/?q=789+Village+Square+Suburban+City+State+67890', // ⚠️ UPDATE: Your Google Maps link
    coordinates: {
      lat: 40.7549, // ⚠️ UPDATE: Your latitude
      lng: -73.9840 // ⚠️ UPDATE: Your longitude
    },
    features: ['Free Parking', 'Family Friendly', 'Quiet Environment', 'Large Lot'], // ⚠️ UPDATE: Your location features
    description: 'Peaceful suburban location with ample parking and family-friendly environment.', // ⚠️ UPDATE: Your location description
    isMain: false
  }
];

// Helper function to get location by ID
export function getLocationById(id: string): Location | undefined {
  return locations.find(loc => loc.id === id);
}

// Helper function to get main location
export function getMainLocation(): Location | undefined {
  return locations.find(loc => loc.isMain);
}

