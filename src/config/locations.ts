// Location configuration for multi-location support
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
      street: '123 Main Street',
      city: 'City',
      state: 'State',
      zip: '12345',
      country: 'US'
    },
    phone: '+1 (555) 123-4567',
    email: 'main@yourbusiness.com',
    hours: {
      weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
      saturday: 'Saturday: 9:00 AM - 4:00 PM',
      sunday: 'Sunday: Closed'
    },
    image: '/images/pexels-cottonbro-6529219.jpg',
    mapLink: 'https://maps.google.com/?q=123+Main+Street+City+State+12345',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    },
    features: ['Free Parking', 'Wheelchair Access', 'Conference Rooms', 'Public Transit'],
    description: 'Our main office location in the heart of the city, featuring modern facilities and easy access.',
    isMain: true
  },
  {
    id: 'downtown',
    name: 'Downtown Location',
    address: {
      street: '456 Business Boulevard',
      city: 'City',
      state: 'State',
      zip: '12345',
      country: 'US'
    },
    phone: '+1 (555) 123-4568',
    email: 'downtown@yourbusiness.com',
    hours: {
      weekdays: 'Monday - Friday: 8:00 AM - 7:00 PM',
      saturday: 'Saturday: 10:00 AM - 3:00 PM',
      sunday: 'Sunday: Closed'
    },
    image: '/images/pexels-cottonbro-6528907.jpg',
    mapLink: 'https://maps.google.com/?q=456+Business+Boulevard+City+State+12345',
    coordinates: {
      lat: 40.7580,
      lng: -73.9855
    },
    features: ['Metro Access', 'Parking Garage', 'Extended Hours', 'Prime Location'],
    description: 'Convenient downtown location with extended hours and easy metro access.',
    isMain: false
  },
  {
    id: 'suburbs',
    name: 'Suburban Branch',
    address: {
      street: '789 Village Square',
      city: 'Suburban City',
      state: 'State',
      zip: '67890',
      country: 'US'
    },
    phone: '+1 (555) 123-4569',
    email: 'suburbs@yourbusiness.com',
    hours: {
      weekdays: 'Monday - Friday: 9:00 AM - 5:00 PM',
      saturday: 'Saturday: 9:00 AM - 2:00 PM',
      sunday: 'Sunday: Closed'
    },
    image: '/images/pexels-karolina-grabowska-7195433.jpg',
    mapLink: 'https://maps.google.com/?q=789+Village+Square+Suburban+City+State+67890',
    coordinates: {
      lat: 40.7549,
      lng: -73.9840
    },
    features: ['Free Parking', 'Family Friendly', 'Quiet Environment', 'Large Lot'],
    description: 'Peaceful suburban location with ample parking and family-friendly environment.',
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

