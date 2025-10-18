/* empty css                                   */
import { e as createAstro, f as createComponent, m as maybeRenderHead, r as renderTemplate, h as addAttribute, k as renderComponent } from '../chunks/astro/server_CD3c6Dm6.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BG-RUUDe.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://yourrestaurant.com");
const $$MenuSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MenuSection;
  const { title, items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-base-content mb-4">${title}</h2> <div class="w-24 h-1 bg-primary mx-auto mb-6"></div> <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
Professional dental treatments using advanced technology and modern techniques for optimal oral health.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${items.map((item) => renderTemplate`<div class="menu-item group hover:bg-base-200/50 p-4 rounded-xl transition-all duration-300"> <div class="flex justify-between items-start"> <div class="flex-1"> <div class="flex items-center space-x-3 mb-2"> <h3 class="text-xl font-semibold text-base-content group-hover:text-primary transition-colors">${item.name}</h3> ${item.category && renderTemplate`<span class="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium"> ${item.category} </span>`} </div> <p class="text-base-content/70 mb-3 leading-relaxed">${item.description}</p> </div> <div class="price-tag ml-4 flex-shrink-0"> ${item.price} </div> </div> </div>`)} </div> </div> </section>`;
}, "/Users/lightyoruichi/Dev/resto/src/components/MenuSection.astro", void 0);

const $$Astro$2 = createAstro("https://yourrestaurant.com");
const $$LocationCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LocationCard;
  const { name, address, phone, hours, image = "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400", mapLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="location-card"> <div class="w-full h-48 bg-base-300 rounded-lg mb-4 bg-cover bg-center"${addAttribute(`background-image: url('${image}')`, "style")}></div> <h3 class="text-xl font-semibold text-base-content mb-2">${name}</h3> <div class="space-y-2 text-base-content/70"> <div class="flex items-start space-x-2"> <svg class="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <p>${address}</p> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <p>${phone}</p> </div> <div class="flex items-start space-x-2"> <svg class="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <p>${hours}</p> </div> </div> <div class="mt-4 space-y-2"> ${mapLink && renderTemplate`<a${addAttribute(mapLink, "href")} class="btn-secondary w-full text-center" target="_blank">
View on Map
</a>`} <a${addAttribute(`tel:${phone}`, "href")} class="btn-primary w-full text-center">
Call Now
</a> </div> </div>`;
}, "/Users/lightyoruichi/Dev/resto/src/components/LocationCard.astro", void 0);

const $$Astro$1 = createAstro("https://yourrestaurant.com");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { title, description, icon, features, price } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="service-card"> <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"> <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(icon, "d")}></path> </svg> </div> <h3 class="text-2xl font-semibold text-base-content mb-4">${title}</h3> <p class="text-base-content/70 mb-6">${description}</p> <ul class="space-y-2 mb-6"> ${features.map((feature) => renderTemplate`<li class="flex items-center space-x-2"> <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-base-content/80">${feature}</span> </li>`)} </ul> ${price && renderTemplate`<div class="text-center"> <div class="text-3xl font-bold text-primary mb-2">${price}</div> <a href="https://wa.me/601137118155" class="btn-primary" target="_blank">
Book Service
</a> </div>`} </div>`;
}, "/Users/lightyoruichi/Dev/resto/src/components/ServiceCard.astro", void 0);

const $$Astro = createAstro("https://yourrestaurant.com");
const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialCard;
  const { name, role, content, rating, image = "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="testimonial-card"> <div class="flex items-center mb-4"> <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4"> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} class="w-10 h-10 rounded-full object-cover"> </div> <div> <h4 class="font-semibold text-base-content">${name}</h4> <p class="text-sm text-base-content/70">${role}</p> </div> </div> <div class="flex items-center mb-3"> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg${addAttribute(`w-5 h-5 ${i < rating ? "text-warning" : "text-base-300"}`, "class")} fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <blockquote class="text-base-content/80 italic">
"${content}"
</blockquote> </div>`;
}, "/Users/lightyoruichi/Dev/resto/src/components/TestimonialCard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const generalServices = [
    {
      name: "Regular Checkups & Cleaning",
      description: "Comprehensive dental examination and professional teeth cleaning to maintain optimal oral health and prevent dental problems",
      price: "RM 80-120",
      category: "Preventive Care"
    },
    {
      name: "Teeth Whitening",
      description: "Professional teeth whitening treatment to brighten and lighten your smile for enhanced confidence",
      price: "RM 300-500",
      category: "Cosmetic Care"
    },
    {
      name: "Dental Fillings",
      description: "High-quality tooth-colored fillings to restore teeth damaged by decay with natural-looking results",
      price: "RM 150-250",
      category: "Restorative Care"
    },
    {
      name: "Emergency Dental Care",
      description: "24/7 emergency dental services for urgent dental problems, pain relief, and trauma care",
      price: "Emergency rates apply",
      category: "Emergency Care"
    }
  ];
  const specializedServices = [
    {
      name: "Braces",
      description: "Orthodontic braces to straighten teeth discreetly and improve bite alignment for a perfect smile",
      price: "RM 4000-8000",
      category: "Cosmetic Care"
    },
    {
      name: "Veneers",
      description: "Dental veneers to improve the shape, size, and color of your teeth for a beautiful smile makeover",
      price: "RM 800-1500",
      category: "Cosmetic Care"
    },
    {
      name: "Crowns",
      description: "Dental crowns to protect and restore weakened or decayed teeth with natural-looking results",
      price: "RM 500-1200",
      category: "Restorative Care"
    },
    {
      name: "Dentures",
      description: "Full or partial dentures for tooth replacement offering natural look and comfortable fit",
      price: "RM 800-2000",
      category: "Restorative Care"
    },
    {
      name: "Root Canal Treatment",
      description: "Advanced endodontic treatment to save and restore damaged teeth, preventing tooth loss",
      price: "RM 400-800",
      category: "Restorative Care"
    },
    {
      name: "Dental Implants",
      description: "Permanent tooth replacement solution using titanium implants for missing teeth with natural look and feel",
      price: "RM 3000-5000",
      category: "Restorative Care"
    }
  ];
  const locations = [
    {
      name: "Klinik Pergigian Alam Megah",
      address: "NO. 6, Jalan Labu 28/23, Taman Alam Megah, Shah Alam, Malaysia 40400",
      phone: "+6 011-3711 8155",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 4:00 PM",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400",
      mapLink: "https://g.co/kgs/4YfpEsw"
    },
    {
      name: "Emergency Services",
      address: "Available 24/7 for dental emergencies and urgent care",
      phone: "+6 011-3711 8155",
      hours: "24/7 Emergency Line",
      image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "WhatsApp Consultation",
      address: "Online consultation and appointment booking",
      phone: "wa.me/601137118155",
      hours: "Mon-Sun: 8:00 AM - 10:00 PM",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];
  const services = [
    {
      title: "Preventive Care",
      description: "Comprehensive preventive dental care to maintain optimal oral health and prevent future problems.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      features: [
        "Regular check-ups",
        "Professional cleaning",
        "Fluoride treatment",
        "Oral health education"
      ],
      price: "From RM 80"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Advanced cosmetic treatments to enhance your smile and boost your confidence.",
      icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      features: [
        "Teeth whitening",
        "Veneers",
        "Bonding",
        "Smile makeover"
      ],
      price: "From RM 300"
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency dental services for urgent dental problems and pain relief.",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z",
      features: [
        "24/7 availability",
        "Pain relief",
        "Emergency extractions",
        "Trauma care"
      ],
      price: "Emergency rates apply"
    }
  ];
  const testimonials = [
    {
      name: "Sharifah Hanani",
      role: "Mother of 3",
      content: "THE BEST WITH MY KIDS AND GREAT WITH MY DAUGHTER WHO IS AUTISTIC. Dr. Nik makes dental visits so comfortable for children. Highly recommended for families!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Jazlynn Hairenn",
      role: "Long-time Patient",
      content: "Dr. Nikunj Patel is amazing! His gentle approach and attention to detail made my braces treatment so comfortable. The clinic is modern and clean.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Haziq Hasnan",
      role: "Emergency Patient",
      content: "When I had severe tooth pain on Sunday, KPAM was there to help immediately. Dr. Nik saved my tooth with root canal treatment. Excellent emergency care!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Klinik Pergigian Alam Megah - Professional Dental Care in Shah Alam | KPAM", "description": "Expert dental care at Klinik Pergigian Alam Megah in Shah Alam. Comprehensive dental services including check-ups, cosmetic dentistry, emergency care. Call +6 011-3711 8155 for appointments.", "currentPage": "home" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="hero-bg min-h-screen flex items-center relative overflow-hidden"> <!-- Background overlay for better text readability --> <div class="absolute inset-0 bg-gradient-to-r from-base-100/95 to-base-100/80 z-10"></div> <div class="container-custom relative z-20"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto"> <div class="space-y-8"> <!-- Trust indicators --> <div class="flex items-center space-x-6 text-sm text-base-content/70"> <div class="flex items-center space-x-2"> <div class="flex text-warning">
★★★★★
</div> <span>4.9/5 Rating</span> </div> <div class="w-px h-4 bg-base-content/30"></div> <span>500+ Reviews</span> <div class="w-px h-4 bg-base-content/30"></div> <span>Since 2010</span> </div> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-base-content leading-tight">
You being happy, healthy, and
<span class="text-gradient block">flaunting your best smile</span> </h1> <p class="text-lg sm:text-xl text-base-content/80 leading-relaxed max-w-lg">
At our dental clinic, we only want to see one thing: You being happy, healthy, and flaunting your best smile. 
            Experience comprehensive dental care at Klinik Pergigian Alam Megah with Dr. Nikunj Patel and our dedicated team.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="https://wa.me/601137118155" class="btn-primary text-center group" target="_blank"> <span class="flex items-center justify-center space-x-2"> <span>Book Appointment</span> <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> </span> </a> <a href="tel:+601137118155" class="btn-secondary text-center">
Call Now
</a> </div> <!-- Quick stats --> <div class="grid grid-cols-3 gap-6 pt-8 border-t border-base-content/20"> <div class="text-center"> <div class="text-2xl font-bold text-primary">24/7</div> <div class="text-sm text-base-content/70">Emergency Care</div> </div> <div class="text-center"> <div class="text-2xl font-bold text-primary">1000+</div> <div class="text-sm text-base-content/70">Happy Patients</div> </div> <div class="text-center"> <div class="text-2xl font-bold text-primary">15+</div> <div class="text-sm text-base-content/70">Years Experience</div> </div> </div> </div> <div class="relative"> <div class="w-full h-96 bg-base-300 rounded-2xl bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800')"></div> <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full flex items-center justify-center"> <span class="text-primary-content font-bold text-2xl">4.8★</span> </div> </div> </div> </div> </section>  <section id="founder" class="section-padding bg-base-200"> <div class="container-custom"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div> <h2 class="text-4xl font-bold text-base-content mb-6">Meet the Founder</h2> <div class="space-y-6"> <div> <h3 class="text-2xl font-semibold text-primary mb-2">Dr. Nikunj Patel</h3> <p class="text-lg font-medium text-base-content mb-4">Founder & Principal Dental Surgeon</p> <p class="text-base-content/80">Klinik Pergigian Alam Megah</p> </div> <p class="text-lg text-base-content/80 leading-relaxed">
Dr. Nikunj Patel is the founder and lead dental surgeon at Klinik Pergigian Alam Megah. 
              With over 13 years of experience, he has a strong focus on patient care and is dedicated 
              to providing high-quality dental treatments in a friendly and comfortable environment.
</p> <p class="text-lg text-base-content/80 leading-relaxed">
Dr. Nik specializes in a range of services, including general dentistry, cosmetic treatments 
              (braces and veneers), and restorative procedures (implants). He is passionate about helping 
              patients achieve healthy, confident smiles and is known for his gentle approach and attention to detail.
</p> <p class="text-lg text-base-content/80 leading-relaxed">
Under Dr. Nik's leadership, Klinik Pergigian Alam Megah has become a trusted clinic for families, 
              offering personalized care for every patient. Visit today to experience exceptional dental care.
</p> </div> </div> <div class="relative"> <div class="w-full h-96 bg-base-300 rounded-2xl bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800')"></div> <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full flex items-center justify-center"> <span class="text-primary-content font-bold text-xl">Dr. Nik</span> </div> </div> </div> </div> </section>  <section id="services" class="section-padding"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-base-content mb-4">Who We Are and What We Do</h2> <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
At KPAM, we are a dedicated team of dental professionals committed to providing excellent care 
          in a friendly & comfortable environment. We offer a wide range of dental services.
</p> </div> ${renderComponent($$result2, "MenuSection", $$MenuSection, { "title": "General Services", "items": generalServices })} ${renderComponent($$result2, "MenuSection", $$MenuSection, { "title": "Specialized Treatments", "items": specializedServices })} <div class="text-center mt-12"> <a href="https://wa.me/601137118155" class="btn-primary" target="_blank">
Book Consultation
</a> </div> </div> </section>  <section id="locations" class="section-padding bg-base-200"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-base-content mb-4">Contact & Location</h2> <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
Conveniently located in Shah Alam with multiple ways to reach us for your dental care needs.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${locations.map((location) => renderTemplate`${renderComponent($$result2, "LocationCard", $$LocationCard, { ...location })}`)} </div> </div> </section>  <section id="value-proposition" class="section-padding bg-primary text-primary-content"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold mb-4">What Value We Can Give You</h2> <p class="text-xl opacity-90 max-w-2xl mx-auto">
We want to give you the best care you actually need with personalized treatments and exceptional service.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <div class="text-center"> <div class="w-16 h-16 bg-primary-content/20 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-xl font-semibold mb-3">Healthy Smiles</h3> <p class="opacity-90">Personalized treatments to keep your teeth and gums in top shape</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-primary-content/20 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path> </svg> </div> <h3 class="text-xl font-semibold mb-3">Comfortable Visits</h3> <p class="opacity-90">A relaxing environment to make every visit stress-free</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-primary-content/20 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path> </svg> </div> <h3 class="text-xl font-semibold mb-3">Affordable Options</h3> <p class="opacity-90">Transparent pricing and flexible payment plans</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-primary-content/20 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> </div> <h3 class="text-xl font-semibold mb-3">Lifelong Care</h3> <p class="opacity-90">From kids to adults, we are here for every stage of your dental journey</p> </div> </div> </div> </section>  <section id="specialized-services" class="section-padding"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-base-content mb-4">We Want to Give You the Best Care You Actually Need</h2> <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
Comprehensive dental treatments categorized into Preventive Care, Cosmetic Care, and Restorative Care 
          to address all your dental health needs.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${services.map((service) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { ...service })}`)} </div> </div> </section>  <section id="about" class="section-padding bg-base-200"> <div class="container-custom"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div> <h2 class="text-4xl font-bold text-base-content mb-6">About Klinik Pergigian Alam Megah</h2> <p class="text-lg text-base-content/80 mb-6">
Established with a commitment to providing exceptional dental care, Klinik Pergigian Alam Megah has been serving 
            the Shah Alam community with modern dental treatments and compassionate patient care. We believe in making 
            dental visits comfortable and stress-free for all our patients.
</p> <p class="text-lg text-base-content/80 mb-8">
Our experienced dental team combines advanced technology with personalized care to deliver the best possible 
            outcomes for our patients. From routine check-ups to complex procedures, we are dedicated to maintaining 
            your oral health and enhancing your smile.
</p> <div class="grid grid-cols-2 gap-6"> <div class="text-center"> <div class="text-3xl font-bold text-primary mb-2">15+</div> <div class="text-base-content/70">Years of Excellence</div> </div> <div class="text-center"> <div class="text-3xl font-bold text-primary mb-2">1000+</div> <div class="text-base-content/70">Happy Patients</div> </div> </div> </div> <div class="relative"> <div class="w-full h-96 bg-base-300 rounded-2xl bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800')"></div> </div> </div> </div> </section>  <section class="section-padding"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-base-content mb-4">In Our Clients' Own Words</h2> <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
Real testimonials from our valued patients who have experienced exceptional dental care at Klinik Pergigian Alam Megah.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result2, "TestimonialCard", $$TestimonialCard, { ...testimonial })}`)} </div> </div> </section>  <section id="appointments" class="section-padding bg-primary text-primary-content relative overflow-hidden"> <!-- Background pattern --> <div class="absolute inset-0 opacity-10"> <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=" 60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" %3E%3Cg fill="none" fill-rule="evenodd" %3E%3Cg fill="%23ffffff" fill-opacity="0.1" %3E%3Ccircle cx="30" cy="30" r="2" %3E%3C g%3E%3C g%3E%3C svg%3E')"></div> </div> <div class="container-custom relative z-10"> <div class="max-w-4xl mx-auto text-center"> <div class="mb-8"> <h2 class="text-4xl font-bold mb-4">Book Your Appointment</h2> <p class="text-xl mb-6 opacity-90">
Schedule your dental visit today and experience professional care at Klinik Pergigian Alam Megah.
</p> <div class="flex items-center justify-center space-x-6 text-sm opacity-80"> <div class="flex items-center space-x-2"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Quick Response</span> </div> <div class="flex items-center space-x-2"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Flexible Scheduling</span> </div> <div class="flex items-center space-x-2"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Emergency Available</span> </div> </div> </div> <div class="bg-base-100 rounded-2xl p-8 text-base-content shadow-2xl"> <div class="text-center mb-8"> <h3 class="text-2xl font-bold mb-4">Quick Appointment Booking</h3> <p class="text-base-content/70">Choose your preferred contact method to book an appointment</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <a href="https://wa.me/601137118155" class="btn-primary text-center group p-6" target="_blank"> <div class="flex flex-col items-center space-y-3"> <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path> </svg> <div> <div class="font-semibold">WhatsApp Booking</div> <div class="text-sm opacity-80">Quick & Easy</div> </div> </div> </a> <a href="tel:+601137118155" class="btn-secondary text-center group p-6"> <div class="flex flex-col items-center space-y-3"> <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <div> <div class="font-semibold">Call Now</div> <div class="text-sm opacity-80">+6 011-3711 8155</div> </div> </div> </a> </div> <div class="mt-8 text-center"> <p class="text-sm text-base-content/70">
Emergency? Call us 24/7 at <a href="tel:+601137118155" class="text-primary hover:underline font-semibold">+6 011-3711 8155</a> </p> </div> </div> </div> </div> </section>  <section id="contact" class="section-padding bg-base-200"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-base-content mb-4">Get in Touch</h2> <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
Have questions or want to learn more? We'd love to hear from you.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> <div> <h3 class="text-2xl font-semibold text-base-content mb-6">Contact Information</h3> <div class="space-y-6"> <div class="flex items-start space-x-4"> <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <h4 class="font-semibold text-base-content">Address</h4> <p class="text-base-content/70">NO. 6, Jalan Labu 28/23, Taman Alam Megah<br>Shah Alam, Malaysia 40400</p> <a href="https://g.co/kgs/4YfpEsw" class="text-primary hover:underline text-sm mt-1 inline-block" target="_blank">View on Google Maps</a> </div> </div> <div class="flex items-start space-x-4"> <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <h4 class="font-semibold text-base-content">Phone</h4> <p class="text-base-content/70">+6 011-3711 8155</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path> </svg> </div> <div> <h4 class="font-semibold text-base-content">WhatsApp</h4> <p class="text-base-content/70">wa.me/601137118155</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <h4 class="font-semibold text-base-content">Hours</h4> <p class="text-base-content/70">Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 9:00 AM - 4:00 PM</p> </div> </div> </div> </div> <div> <h3 class="text-2xl font-semibold text-base-content mb-6">Follow Us</h3> <div class="space-y-6"> <div class="text-center"> <p class="text-base-content/70 mb-4">Stay connected with us on social media for dental tips and updates</p> </div> <div class="grid grid-cols-1 gap-4"> <a href="https://instagram.com/klinikpergigian_alammegah" class="flex items-center space-x-4 p-4 bg-base-100 rounded-lg hover:bg-primary/5 transition-colors" target="_blank"> <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg> </div> <div> <div class="font-semibold">Instagram</div> <div class="text-sm text-base-content/70">@klinikpergigian_alammegah</div> </div> </a> <a href="https://tiktok.com/@kpam06" class="flex items-center space-x-4 p-4 bg-base-100 rounded-lg hover:bg-primary/5 transition-colors" target="_blank"> <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"> <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path> </svg> </div> <div> <div class="font-semibold">TikTok</div> <div class="text-sm text-base-content/70">@kpam06</div> </div> </a> </div> </div> </div> </div> </div> </section> ` })}`;
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
