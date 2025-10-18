# Domain Setup Guide for KPAM.my

## Recommended Domain: KPAM.my

**Why KPAM.my is the perfect choice:**
- ✅ Short and memorable (4 letters only)
- ✅ Matches existing social media handles (@kpam06, klinikpergigian_alammegah)
- ✅ Professional and easy to share verbally
- ✅ Local .my domain builds trust with Malaysian patients
- ✅ Easy to type and remember for WhatsApp sharing

## Domain Registration Steps

### 1. Choose a Domain Registrar
Recommended Malaysian registrars:
- **Exabytes** (exabytes.my) - Popular in Malaysia
- **ServerFreak** (serverfreak.com) - Good pricing
- **Web Server Malaysia** (webserver.com.my) - Local support
- **MYNIC** (mynic.my) - Official .my registry

### 2. Check Domain Availability
Visit any registrar and search for: `KPAM.my`

### 3. Registration Process
1. Create account with chosen registrar
2. Search for KPAM.my
3. Add to cart and proceed to checkout
4. Complete registration (typically 1-3 years)
5. Set up DNS management

### 4. DNS Configuration

#### A Records (for hosting)
```
Type: A
Name: @
Value: [Your hosting provider's IP]
TTL: 3600

Type: A  
Name: www
Value: [Your hosting provider's IP]
TTL: 3600
```

#### CNAME Records (for subdomains)
```
Type: CNAME
Name: api
Value: kpam.my
TTL: 3600
```

### 5. SSL Certificate
- Most hosting providers offer free SSL certificates
- Ensure HTTPS is enabled for security and SEO
- Consider Let's Encrypt for free SSL

### 6. Email Configuration (Optional)
Set up professional email addresses:
- info@kpam.my
- appointments@kpam.my
- emergency@kpam.my

## Hosting Recommendations

### For Static Sites (Astro)
1. **Vercel** (Recommended)
   - Free tier available
   - Excellent performance
   - Easy deployment from GitHub
   - Automatic HTTPS

2. **Netlify**
   - Free tier available
   - Good for static sites
   - Form handling capabilities

3. **GitHub Pages**
   - Free for public repositories
   - Simple setup

### For Full-Stack Applications
1. **DigitalOcean**
2. **AWS**
3. **Google Cloud Platform**

## SEO Considerations

### Update sitemap.xml
Ensure sitemap includes:
- https://kpam.my/
- https://kpam.my/services
- https://kpam.my/location
- https://kpam.my/about
- https://kpam.my/contact

### Update robots.txt
```
User-agent: *
Allow: /

Sitemap: https://kpam.my/sitemap.xml
```

### Google My Business
1. Claim or create Google My Business listing
2. Use exact clinic information:
   - Name: Klinik Pergigian Alam Megah
   - Address: 123, Jalan Alam Megah 1/1, Taman Alam Megah, Shah Alam
   - Phone: +6 011-3711 8155
   - Website: https://kpam.my
   - Hours: Mon-Fri 9AM-6PM, Sat 9AM-4PM

## Social Media Integration

### Update Social Media Profiles
- **Instagram**: @klinikpergigian_alammegah
- **TikTok**: @kpam06
- **WhatsApp**: +6 011-3711 8155

### Update Bio Links
- Instagram bio: "Professional dental care in Shah Alam 🌟 Book: https://kpam.my"
- TikTok bio: "KPAM Dental Clinic 💙 Shah Alam 📞 011-3711 8155"

## Local SEO Optimization

### Google Maps
1. Add clinic to Google Maps
2. Use consistent NAP (Name, Address, Phone)
3. Add photos of clinic
4. Encourage patient reviews

### Local Directories
Submit to Malaysian business directories:
- Yellow Pages Malaysia
- iProperty
- Mudah.my
- Local dental associations

## Analytics Setup

### Google Analytics 4
1. Create GA4 property for kpam.my
2. Add tracking code to website
3. Set up goals for:
   - Appointment bookings
   - WhatsApp clicks
   - Phone calls
   - Contact form submissions

### Google Search Console
1. Verify domain ownership
2. Submit sitemap
3. Monitor search performance
4. Track local search visibility

## Estimated Costs

### Domain Registration
- KPAM.my: ~RM 45-60/year

### Hosting
- Vercel (Free tier): RM 0/month
- Premium hosting: RM 50-200/month

### SSL Certificate
- Let's Encrypt: Free
- Premium SSL: RM 100-300/year

### Total Estimated Cost: RM 45-360/year

## Next Steps

1. ✅ Register KPAM.my domain
2. ✅ Set up hosting (recommend Vercel)
3. ✅ Configure DNS settings
4. ✅ Deploy website
5. ✅ Set up Google Analytics & Search Console
6. ✅ Create Google My Business listing
7. ✅ Update social media profiles
8. ✅ Submit to local directories

## Contact Information for Reference

**Klinik Pergigian Alam Megah**
- Address: 123, Jalan Alam Megah 1/1, Taman Alam Megah, Shah Alam, Selangor 40000
- Phone: +6 011-3711 8155
- WhatsApp: wa.me/601137118155
- Instagram: @klinikpergigian_alammegah
- TikTok: @kpam06
- Website: https://kpam.my (once registered)

---

*This guide provides everything needed to set up the KPAM.my domain and optimize it for local SEO and patient acquisition.*
