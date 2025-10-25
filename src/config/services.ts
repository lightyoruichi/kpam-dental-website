// Services configuration
export interface Service {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  fullDescription: string;
  price: string;
  duration: string;
  features: string[];
  benefits: string[];
  image: string;
  icon: string;
  popular: boolean;
  subServices?: SubService[];
}

export interface SubService {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'consultation',
    name: 'Initial Consultation',
    slug: 'consultation',
    category: 'Basic Services',
    description: 'Professional consultation to understand your needs and provide personalized solutions.',
    fullDescription: 'Our initial consultation is designed to thoroughly understand your requirements, goals, and challenges. We\'ll discuss your vision, analyze your current situation, and outline a strategic path forward. This comprehensive session includes detailed evaluation, goal setting, and a custom roadmap tailored to your unique needs.',
    price: '$100-150',
    duration: '60 minutes',
    features: [
      'Detailed needs assessment',
      'Goal setting session',
      'Strategic roadmap creation',
      'Q&A session',
      'Written summary report'
    ],
    benefits: [
      'Clear understanding of your needs',
      'Defined action plan',
      'Expert recommendations',
      'Transparent pricing'
    ],
    image: '/images/pexels-cedric-fauntleroy-4269684.jpg',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    popular: true,
    subServices: [
      {
        id: 'basic-consultation',
        name: 'Basic Consultation',
        slug: 'basic-consultation',
        description: 'Standard 30-minute consultation for general inquiries.',
        price: '$75',
        duration: '30 minutes',
        features: ['Basic needs assessment', 'Quick recommendations']
      },
      {
        id: 'premium-consultation',
        name: 'Premium Consultation',
        slug: 'premium-consultation',
        description: 'Comprehensive 90-minute deep-dive consultation.',
        price: '$200',
        duration: '90 minutes',
        features: ['Full assessment', 'Detailed report', 'Follow-up call']
      }
    ]
  },
  {
    id: 'core-service',
    name: 'Core Service Package',
    slug: 'core-service',
    category: 'Essential Services',
    description: 'Complete solution including all essential features for professional results.',
    fullDescription: 'Our core service package delivers everything you need to achieve your primary objectives. This comprehensive solution combines proven methodologies with modern tools to ensure exceptional outcomes. Includes full project management, regular updates, and dedicated support throughout the process.',
    price: '$500-800',
    duration: '2-4 weeks',
    features: [
      'Complete service delivery',
      'Project management',
      'Regular progress updates',
      'Dedicated support',
      'Quality assurance',
      'Final review'
    ],
    benefits: [
      'Complete solution',
      'Professional results',
      'Ongoing support',
      'Satisfaction guarantee'
    ],
    image: '/images/pexels-cedric-fauntleroy-4269366.jpg',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    popular: true,
    subServices: [
      {
        id: 'standard-core',
        name: 'Standard Package',
        slug: 'standard-core',
        description: 'Essential features with standard support.',
        price: '$500',
        duration: '2 weeks',
        features: ['Core features', 'Email support', 'Basic updates']
      },
      {
        id: 'premium-core',
        name: 'Premium Package',
        slug: 'premium-core',
        description: 'All features with priority support.',
        price: '$800',
        duration: '4 weeks',
        features: ['All features', 'Priority support', 'Extended updates']
      }
    ]
  },
  {
    id: 'advanced-solution',
    name: 'Advanced Solution',
    slug: 'advanced-solution',
    category: 'Premium Services',
    description: 'Next-level service with cutting-edge technology and expert implementation.',
    fullDescription: 'Our advanced solution leverages the latest technology and industry best practices to deliver superior results. This premium offering includes advanced features, custom development, and white-glove service. Perfect for businesses requiring sophisticated solutions and exceptional quality.',
    price: '$1,500-3,000',
    duration: '4-8 weeks',
    features: [
      'Advanced implementation',
      'Custom development',
      'Dedicated team',
      'Premium support',
      'Training & documentation',
      'Lifetime updates'
    ],
    benefits: [
      'Cutting-edge technology',
      'Custom solutions',
      'Maximum performance',
      'Long-term partnership'
    ],
    image: '/images/pexels-pavel-danilyuk-6812476.jpg',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    popular: false,
    subServices: [
      {
        id: 'enterprise-advanced',
        name: 'Enterprise Edition',
        slug: 'enterprise-advanced',
        description: 'Full enterprise features with dedicated support.',
        price: '$3,000',
        duration: '8 weeks',
        features: ['Enterprise features', 'Dedicated manager', '24/7 support']
      }
    ]
  },
  {
    id: 'ongoing-support',
    name: 'Ongoing Support & Maintenance',
    slug: 'ongoing-support',
    category: 'Support Services',
    description: 'Continuous support and maintenance to ensure long-term success.',
    fullDescription: 'Maintain peak performance with our ongoing support and maintenance service. We monitor your systems, apply updates, optimize performance, and provide expert assistance whenever you need it. This service ensures your solution continues to deliver value long after implementation.',
    price: 'Starting at $200/month',
    duration: 'Ongoing',
    features: [
      'Monthly maintenance',
      'Performance monitoring',
      'Security updates',
      'Technical support',
      'Priority assistance',
      'Regular reports'
    ],
    benefits: [
      'Peace of mind',
      'Optimal performance',
      'Stay up-to-date',
      'Expert help when needed'
    ],
    image: '/images/pexels-karolina-grabowska-6627531.jpg',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    popular: true,
    subServices: [
      {
        id: 'basic-support',
        name: 'Basic Support',
        slug: 'basic-support',
        description: 'Essential maintenance and email support.',
        price: '$200/month',
        duration: 'Monthly',
        features: ['Basic maintenance', 'Email support', 'Monthly updates']
      },
      {
        id: 'premium-support',
        name: 'Premium Support',
        slug: 'premium-support',
        description: 'Comprehensive support with priority assistance.',
        price: '$500/month',
        duration: 'Monthly',
        features: ['Full maintenance', 'Priority support', 'Weekly updates']
      }
    ]
  }
];

// Helper functions
export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter(service => service.category === category);
}

export function getPopularServices(): Service[] {
  return services.filter(service => service.popular);
}

export function getSubServiceById(serviceId: string, subServiceId: string): SubService | undefined {
  const service = getServiceById(serviceId);
  return service?.subServices?.find(sub => sub.id === subServiceId);
}

