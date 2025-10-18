/* empty css                                 */
import { e as createAstro, f as createComponent, r as renderTemplate, k as renderScript, l as renderComponent, n as renderSlot, o as renderHead, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DLNKQoXW.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://yourrestaurant.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    image = "/assets/og-image.jpg",
    currentPage,
    showTally = false
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-theme="restaurant" data-astro-cid-losip7nv> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Structured Data --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Restaurant",\n        "name": "Your Restaurant Name",\n        "description": "Fine dining restaurant offering exceptional cuisine and service",\n        "url": "https://yourrestaurant.com",\n        "telephone": "+1-555-0123",\n        "address": {\n          "@type": "PostalAddress",\n          "streetAddress": "123 Main Street",\n          "addressLocality": "Your City",\n          "addressRegion": "Your State",\n          "postalCode": "12345",\n          "addressCountry": "US"\n        },\n        "servesCuisine": ["Italian", "Mediterranean"],\n        "priceRange": "$$$",\n        "openingHours": "Mo-Su 17:00-22:00"\n      }\n    <\/script>', '</head> <body class="bg-base-100 text-base-content" data-astro-cid-losip7nv> ', " <main data-astro-cid-losip7nv> ", " </main> ", " <!-- Tally.so Script --> ", " </body> </html> "])), addAttribute(description, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), renderHead(), renderComponent($$result, "Header", Header, { "currentPage": currentPage, "data-astro-cid-losip7nv": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", Footer, { "data-astro-cid-losip7nv": true }), showTally && renderTemplate`${renderScript($$result, "/Users/lightyoruichi/Dev/resto/src/components/BaseLayout.astro?astro&type=script&index=0&lang.ts")}`);
}, "/Users/lightyoruichi/Dev/resto/src/components/BaseLayout.astro", void 0);

const $$Astro$3 = createAstro("https://yourrestaurant.com");
const $$MenuSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MenuSection;
  const { title, items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-4xl font-bold text-base-content mb-4">${title}</h2> <div class="w-24 h-1 bg-primary mx-auto"></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${items.map((item) => renderTemplate`<div class="menu-item"> <div class="flex justify-between items-start"> <div class="flex-1"> <h3 class="text-xl font-semibold text-base-content mb-2">${item.name}</h3> <p class="text-base-content/70 mb-3">${item.description}</p> ${item.category && renderTemplate`<span class="inline-block bg-primary/10 text-primary text-sm px-2 py-1 rounded-full"> ${item.category} </span>`} </div> <div class="price-tag ml-4"> ${item.price} </div> </div> </div>`)} </div> </div> </section>`;
}, "/Users/lightyoruichi/Dev/resto/src/components/MenuSection.astro", void 0);

const $$Astro$2 = createAstro("https://yourrestaurant.com");
const $$LocationCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LocationCard;
  const { name, address, phone, hours, image = "/assets/location-placeholder.jpg" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="location-card"> <div class="w-full h-48 bg-base-300 rounded-lg mb-4 bg-cover bg-center"${addAttribute(`background-image: url('${image}')`, "style")}></div> <h3 class="text-xl font-semibold text-base-content mb-2">${name}</h3> <div class="space-y-2 text-base-content/70"> <div class="flex items-start space-x-2"> <svg class="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <p>${address}</p> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <p>${phone}</p> </div> <div class="flex items-start space-x-2"> <svg class="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <p>${hours}</p> </div> </div> <div class="mt-4"> <a${addAttribute(`tel:${phone}`, "href")} class="btn-primary w-full text-center">
Call Now
</a> </div> </div>`;
}, "/Users/lightyoruichi/Dev/resto/src/components/LocationCard.astro", void 0);

const $$Astro$1 = createAstro("https://yourrestaurant.com");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { title, description, icon, features, price } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="service-card"> <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"> <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(icon, "d")}></path> </svg> </div> <h3 class="text-2xl font-semibold text-base-content mb-4">${title}</h3> <p class="text-base-content/70 mb-6">${description}</p> <ul class="space-y-2 mb-6"> ${features.map((feature) => renderTemplate`<li class="flex items-center space-x-2"> <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-base-content/80">${feature}</span> </li>`)} </ul> ${price && renderTemplate`<div class="text-center"> <div class="text-3xl font-bold text-primary mb-2">${price}</div> <a href="/#contact" class="btn-primary">
Book Service
</a> </div>`} </div>`;
}, "/Users/lightyoruichi/Dev/resto/src/components/ServiceCard.astro", void 0);

const $$Astro = createAstro("https://yourrestaurant.com");
const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialCard;
  const { name, role, content, rating, image = "/assets/avatar-placeholder.jpg" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="testimonial-card"> <div class="flex items-center mb-4"> <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4"> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} class="w-10 h-10 rounded-full object-cover"> </div> <div> <h4 class="font-semibold text-base-content">${name}</h4> <p class="text-sm text-base-content/70">${role}</p> </div> </div> <div class="flex items-center mb-3"> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg${addAttribute(`w-5 h-5 ${i < rating ? "text-warning" : "text-base-300"}`, "class")} fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <blockquote class="text-base-content/80 italic">
"${content}"
</blockquote> </div>`;
}, "/Users/lightyoruichi/Dev/resto/src/components/TestimonialCard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const appetizers = [
    {
      name: "Truffle Arancini",
      description: "Crispy risotto balls with truffle oil and parmesan cheese",
      price: "$16",
      category: "Signature"
    },
    {
      name: "Burrata Caprese",
      description: "Fresh burrata with heirloom tomatoes, basil, and balsamic glaze",
      price: "$18",
      category: "Vegetarian"
    },
    {
      name: "Seared Scallops",
      description: "Pan-seared scallops with cauliflower puree and microgreens",
      price: "$22",
      category: "Gluten Free"
    }
  ];
  const mains = [
    {
      name: "Wagyu Beef Tenderloin",
      description: "8oz wagyu tenderloin with roasted vegetables and red wine reduction",
      price: "$65",
      category: "Signature"
    },
    {
      name: "Pan-Seared Salmon",
      description: "Atlantic salmon with quinoa pilaf and lemon butter sauce",
      price: "$32",
      category: "Healthy"
    },
    {
      name: "Lobster Risotto",
      description: "Creamy risotto with fresh lobster, asparagus, and truffle oil",
      price: "$45",
      category: "Seafood"
    }
  ];
  const locations = [
    {
      name: "Downtown Location",
      address: "123 Main Street, Downtown, City 12345",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Sun: 5:00 PM - 10:00 PM"
    },
    {
      name: "Uptown Location",
      address: "456 Oak Avenue, Uptown, City 12345",
      phone: "+1 (555) 987-6543",
      hours: "Mon-Sun: 5:00 PM - 10:00 PM"
    },
    {
      name: "Waterfront Location",
      address: "789 Harbor View, Waterfront, City 12345",
      phone: "+1 (555) 456-7890",
      hours: "Mon-Sun: 5:00 PM - 10:00 PM"
    }
  ];
  const services = [
    {
      title: "Private Dining",
      description: "Exclusive private dining rooms for intimate gatherings and special occasions.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      features: [
        "Private dining rooms",
        "Custom menu options",
        "Dedicated service staff",
        "Audio/visual equipment"
      ],
      price: "From $150/person"
    },
    {
      title: "Catering Services",
      description: "Full-service catering for events, corporate functions, and special celebrations.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      features: [
        "Full-service catering",
        "Custom menu design",
        "Professional staff",
        "Equipment rental"
      ],
      price: "From $75/person"
    },
    {
      title: "Wine Tasting",
      description: "Curated wine tastings with expert sommeliers and food pairings.",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      features: [
        "Expert sommelier",
        "Food pairings",
        "Educational experience",
        "Take-home notes"
      ],
      price: "$85/person"
    }
  ];
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Critic",
      content: "Exceptional dining experience with innovative cuisine and impeccable service. The wagyu tenderloin was absolutely divine.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Regular Customer",
      content: "Been coming here for years. The consistency in quality and the warm atmosphere keeps us coming back.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Event Planner",
      content: "Perfect venue for our corporate events. The private dining service exceeded all expectations.",
      rating: 5
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Restaurant Name - Fine Dining Experience", "description": "Experience exceptional cuisine in an elegant atmosphere. Fine dining restaurant offering fresh, locally-sourced ingredients and impeccable service.", "currentPage": "home" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="hero-bg min-h-screen flex items-center"> <div class="container-custom"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div> <h1 class="text-5xl lg:text-6xl font-bold text-base-content mb-6 text-shadow-lg">
Exceptional
<span class="text-gradient">Dining</span>
Experience
</h1> <p class="text-xl text-base-content/80 mb-8 leading-relaxed">
Discover the perfect blend of innovative cuisine, elegant atmosphere, and impeccable service. 
            We're committed to creating memorable dining experiences with fresh, locally-sourced ingredients.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="#reservations" class="btn-primary text-center">
Make Reservation
</a> <a href="#menu" class="btn-secondary text-center">
View Menu
</a> </div> </div> <div class="relative"> <div class="w-full h-96 bg-base-300 rounded-2xl bg-cover bg-center" style="background-image: url('/assets/hero-image.jpg')"></div> <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full flex items-center justify-center"> <span class="text-primary-content font-bold text-2xl">4.9★</span> </div> </div> </div> </div> </section>  <section id="menu" class="section-padding"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-base-content mb-4">Our Menu</h2> <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
Carefully crafted dishes using the finest ingredients, prepared with passion and creativity.
</p> </div> ${renderComponent($$result2, "MenuSection", $$MenuSection, { "title": "Appetizers", "items": appetizers })} ${renderComponent($$result2, "MenuSection", $$MenuSection, { "title": "Main Courses", "items": mains })} <div class="text-center mt-12"> <a href="/full-menu" class="btn-primary">
View Full Menu
</a> </div> </div> </section>  <section id="locations" class="section-padding bg-base-200"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-base-content mb-4">Our Locations</h2> <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
Visit us at any of our three beautiful locations, each offering a unique dining experience.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${locations.map((location) => renderTemplate`${renderComponent($$result2, "LocationCard", $$LocationCard, { ...location })}`)} </div> </div> </section>  <section id="services" class="section-padding"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-base-content mb-4">Our Services</h2> <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
Beyond exceptional dining, we offer a range of services to make your experience truly special.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${services.map((service) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { ...service })}`)} </div> </div> </section>  <section id="about" class="section-padding bg-base-200"> <div class="container-custom"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div> <h2 class="text-4xl font-bold text-base-content mb-6">About Our Story</h2> <p class="text-lg text-base-content/80 mb-6">
Founded in 2010, our restaurant has been serving exceptional cuisine in an elegant atmosphere. 
            We believe in the power of fresh, locally-sourced ingredients and the art of fine dining.
</p> <p class="text-lg text-base-content/80 mb-8">
Our team of passionate chefs and dedicated staff work together to create memorable experiences 
            for every guest who walks through our doors.
</p> <div class="grid grid-cols-2 gap-6"> <div class="text-center"> <div class="text-3xl font-bold text-primary mb-2">13+</div> <div class="text-base-content/70">Years of Excellence</div> </div> <div class="text-center"> <div class="text-3xl font-bold text-primary mb-2">50K+</div> <div class="text-base-content/70">Happy Customers</div> </div> </div> </div> <div class="relative"> <div class="w-full h-96 bg-base-300 rounded-2xl bg-cover bg-center" style="background-image: url('/assets/about-image.jpg')"></div> </div> </div> </div> </section>  <section class="section-padding"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-base-content mb-4">What Our Guests Say</h2> <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
Don't just take our word for it. Here's what our valued guests have to say about their experience.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result2, "TestimonialCard", $$TestimonialCard, { ...testimonial })}`)} </div> </div> </section>  <section id="reservations" class="section-padding bg-primary text-primary-content"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-4xl font-bold mb-6">Make a Reservation</h2> <p class="text-xl mb-8 opacity-90">
Book your table today and experience exceptional dining at its finest.
</p> <div class="bg-base-100 rounded-2xl p-8 text-base-content"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> <div> <label class="block text-sm font-medium mb-2">Name</label> <input type="text" class="form-input" placeholder="Your full name"> </div> <div> <label class="block text-sm font-medium mb-2">Phone</label> <input type="tel" class="form-input" placeholder="Your phone number"> </div> <div> <label class="block text-sm font-medium mb-2">Date</label> <input type="date" class="form-input"> </div> <div> <label class="block text-sm font-medium mb-2">Time</label> <select class="form-input"> <option>6:00 PM</option> <option>6:30 PM</option> <option>7:00 PM</option> <option>7:30 PM</option> <option>8:00 PM</option> <option>8:30 PM</option> <option>9:00 PM</option> </select> </div> <div> <label class="block text-sm font-medium mb-2">Party Size</label> <select class="form-input"> <option>2 people</option> <option>3 people</option> <option>4 people</option> <option>5 people</option> <option>6 people</option> <option>7+ people</option> </select> </div> <div> <label class="block text-sm font-medium mb-2">Location</label> <select class="form-input"> <option>Downtown Location</option> <option>Uptown Location</option> <option>Waterfront Location</option> </select> </div> </div> <div class="mb-6"> <label class="block text-sm font-medium mb-2">Special Requests</label> <textarea class="form-textarea" rows="3" placeholder="Any special dietary requirements or requests..."></textarea> </div> <button class="btn-primary w-full">
Make Reservation
</button> </div> </div> </div> </section>  <section id="contact" class="section-padding bg-base-200"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-base-content mb-4">Get in Touch</h2> <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
Have questions or want to learn more? We'd love to hear from you.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> <div> <h3 class="text-2xl font-semibold text-base-content mb-6">Contact Information</h3> <div class="space-y-6"> <div class="flex items-start space-x-4"> <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <h4 class="font-semibold text-base-content">Address</h4> <p class="text-base-content/70">123 Main Street, Downtown<br>Your City, State 12345</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <h4 class="font-semibold text-base-content">Phone</h4> <p class="text-base-content/70">+1 (555) 123-4567</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <div> <h4 class="font-semibold text-base-content">Email</h4> <p class="text-base-content/70">info@yourrestaurant.com</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <h4 class="font-semibold text-base-content">Hours</h4> <p class="text-base-content/70">Monday - Sunday<br>5:00 PM - 10:00 PM</p> </div> </div> </div> </div> <div> <h3 class="text-2xl font-semibold text-base-content mb-6">Send us a Message</h3> <form class="space-y-6"> <div> <label class="block text-sm font-medium mb-2">Name</label> <input type="text" class="form-input" placeholder="Your name"> </div> <div> <label class="block text-sm font-medium mb-2">Email</label> <input type="email" class="form-input" placeholder="your@email.com"> </div> <div> <label class="block text-sm font-medium mb-2">Subject</label> <input type="text" class="form-input" placeholder="Subject"> </div> <div> <label class="block text-sm font-medium mb-2">Message</label> <textarea class="form-textarea" rows="5" placeholder="Your message..."></textarea> </div> <button type="submit" class="btn-primary w-full">
Send Message
</button> </form> </div> </div> </div> </section> ` })}`;
}, "/Users/lightyoruichi/Dev/resto/src/pages/index.astro", void 0);

const $$file = "/Users/lightyoruichi/Dev/resto/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
