#!/usr/bin/env node

/**
 * Setup Wizard for Service Business Website Template
 * This script helps you configure your business information
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper function to ask questions
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Helper function to ask yes/no questions
async function askYesNo(question) {
  const answer = await askQuestion(`${question} (y/n): `);
  return answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes';
}

// Print colored messages
function print(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Main setup function
async function setup() {
  print('\n╔════════════════════════════════════════════════════════╗', 'cyan');
  print('║   Service Business Website Template - Setup Wizard   ║', 'cyan');
  print('╚════════════════════════════════════════════════════════╝', 'cyan');
  print('', 'reset');
  
  print('Welcome! This wizard will help you configure your website.', 'bright');
  print('You can skip any question by pressing Enter.', 'yellow');
  print('', 'reset');

  const config = {};

  // Business Information
  print('\n📋 Business Information', 'blue');
  print('────────────────────────────────────────────────────────', 'blue');
  
  config.businessName = await askQuestion('Business Name: ');
  config.businessShortName = await askQuestion('Business Short Name (for logo): ');
  config.tagline = await askQuestion('Business Tagline: ');
  config.description = await askQuestion('Business Description: ');

  // Contact Information
  print('\n📞 Contact Information', 'blue');
  print('────────────────────────────────────────────────────────', 'blue');
  
  config.phone = await askQuestion('Phone Number: ');
  config.email = await askQuestion('Email Address: ');
  
  print('\n📍 Business Address', 'blue');
  config.street = await askQuestion('Street Address: ');
  config.city = await askQuestion('City: ');
  config.state = await askQuestion('State/Province: ');
  config.zip = await askQuestion('ZIP/Postal Code: ');
  config.country = await askQuestion('Country (e.g., US, CA, UK): ') || 'US';

  // Business Hours
  print('\n🕐 Business Hours', 'blue');
  print('────────────────────────────────────────────────────────', 'blue');
  
  config.weekdays = await askQuestion('Weekdays Hours (e.g., Monday - Friday: 9:00 AM - 6:00 PM): ');
  config.saturday = await askQuestion('Saturday Hours: ');
  config.sunday = await askQuestion('Sunday Hours: ');

  // Website URL
  print('\n🌐 Website Information', 'blue');
  print('────────────────────────────────────────────────────────', 'blue');
  
  config.siteUrl = await askQuestion('Website URL (e.g., https://example.com): ');

  // Social Media
  print('\n📱 Social Media (optional)', 'blue');
  print('────────────────────────────────────────────────────────', 'blue');
  
  config.instagram = await askQuestion('Instagram Handle (e.g., @yourbusiness): ');
  config.tiktok = await askQuestion('TikTok Handle (e.g., @yourbusiness): ');
  config.facebook = await askQuestion('Facebook Page (e.g., yourbusiness): ');
  config.twitter = await askQuestion('Twitter/X Handle (e.g., @yourbusiness): ');
  config.linkedin = await askQuestion('LinkedIn Company Page: ');
  config.youtube = await askQuestion('YouTube Channel: ');

  // WhatsApp
  print('\n💬 WhatsApp Integration', 'blue');
  print('────────────────────────────────────────────────────────', 'blue');
  
  const enableWhatsApp = await askYesNo('Enable WhatsApp Integration?');
  if (enableWhatsApp) {
    config.whatsappNumber = await askQuestion('WhatsApp Number (e.g., +1234567890): ');
    config.whatsappMessage = await askQuestion('Default WhatsApp Message: ');
  }

  // Theme Selection
  print('\n🎨 Theme Selection', 'blue');
  print('────────────────────────────────────────────────────────', 'blue');
  print('Available themes:', 'cyan');
  print('  1. Alien (Fresh Green) - Best for health, wellness businesses', 'green');
  print('  2. Jellyfish (Cool Purple) - Best for creative, tech businesses', 'yellow');
  print('  3. Papaya (Warm Orange) - Best for food, hospitality businesses', 'yellow');
  
  const themeChoice = await askQuestion('Select theme (1-3) [default: 1]: ') || '1';
  const themes = { '1': 'alien', '2': 'jellyfish', '3': 'papaya' };
  config.theme = themes[themeChoice] || 'alien';

  // Summary
  print('\n╔════════════════════════════════════════════════════════╗', 'cyan');
  print('║                    Configuration Summary               ║', 'cyan');
  print('╚════════════════════════════════════════════════════════╝', 'cyan');
  print('', 'reset');
  
  print(`Business Name: ${config.businessName || 'Not set'}`, 'bright');
  print(`Website URL: ${config.siteUrl || 'Not set'}`, 'bright');
  print(`Theme: ${config.theme}`, 'bright');
  print('', 'reset');

  const confirm = await askYesNo('Proceed with this configuration?');
  
  if (!confirm) {
    print('\nSetup cancelled.', 'yellow');
    rl.close();
    return;
  }

  // Update configuration files
  print('\n📝 Updating configuration files...', 'cyan');
  
  try {
    updateSiteConfig(config);
    updateAnalyticsConfig(config);
    updateLocationsConfig(config);
    updateAstroConfig(config);
    
    print('\n✅ Setup complete!', 'green');
    print('', 'reset');
    print('Next steps:', 'bright');
    print('  1. Review src/config/site.ts for additional settings', 'cyan');
    print('  2. Update location details in src/config/locations.ts', 'cyan');
    print('  3. Add your business services in src/config/services.ts', 'cyan');
    print('  4. Run "npm run dev" to start developing', 'cyan');
    print('', 'reset');
    
  } catch (error) {
    print(`\n❌ Error: ${error.message}`, 'red');
  }

  rl.close();
}

// Update site.ts configuration
function updateSiteConfig(config) {
  const filePath = path.join(__dirname, '../src/config/site.ts');
  let content = fs.readFileSync(filePath, 'utf8');

  // Update business name
  if (config.businessName) {
    content = content.replace(/name: "Your Business Name"/, `name: "${config.businessName}"`);
  }
  if (config.businessShortName) {
    content = content.replace(/shortName: "Your Business"/, `shortName: "${config.businessShortName}"`);
  }
  if (config.tagline) {
    content = content.replace(/tagline: "Your Business Tagline Here"/, `tagline: "${config.tagline}"`);
  }
  if (config.description) {
    content = content.replace(/description: "A brief description of your business and what you offer to your customers\."/, `description: "${config.description}"`);
  }

  // Update contact information
  if (config.phone) {
    content = content.replace(/phone: "\+1 \(23\) 9230 821"/, `phone: "${config.phone}"`);
  }
  if (config.email) {
    content = content.replace(/email: "dentixadentist@gmail\.com"/, `email: "${config.email}"`);
  }

  // Update address
  if (config.street) {
    content = content.replace(/street: "123 Dental Plaza"/, `street: "${config.street}"`);
  }
  if (config.city) {
    content = content.replace(/city: "City"/, `city: "${config.city}"`);
  }
  if (config.state) {
    content = content.replace(/state: "State"/, `state: "${config.state}"`);
  }
  if (config.zip) {
    content = content.replace(/zip: "12345"/, `zip: "${config.zip}"`);
  }
  if (config.country) {
    content = content.replace(/country: "US"/, `country: "${config.country}"`);
  }

  // Update business hours
  if (config.weekdays) {
    content = content.replace(/weekdays: "Monday - Sunday: 09:00 AM - 08:00 PM"/, `weekdays: "${config.weekdays}"`);
  }
  if (config.saturday) {
    content = content.replace(/saturday: "Saturday: 09:00 AM - 08:00 PM"/, `saturday: "${config.saturday}"`);
  }
  if (config.sunday) {
    content = content.replace(/sunday: "Sunday: 09:00 AM - 08:00 PM"/, `sunday: "${config.sunday}"`);
  }

  // Update social media
  if (config.instagram) {
    content = content.replace(/instagram: "@dentixa"/, `instagram: "${config.instagram}"`);
  }
  if (config.tiktok) {
    content = content.replace(/tiktok: "@dentixa"/, `tiktok: "${config.tiktok}"`);
  }
  if (config.facebook) {
    content = content.replace(/facebook: "dentixa"/, `facebook: "${config.facebook}"`);
  }
  if (config.twitter) {
    content = content.replace(/twitter: "@dentixa"/, `twitter: "${config.twitter}"`);
  }
  if (config.linkedin) {
    content = content.replace(/linkedin: "dentixa"/, `linkedin: "${config.linkedin}"`);
  }
  if (config.youtube) {
    content = content.replace(/youtube: "dentixa"/, `youtube: "${config.youtube}"`);
  }

  // Update WhatsApp
  if (config.whatsappNumber) {
    content = content.replace(/number: "\+1239230821"/, `number: "${config.whatsappNumber}"`);
  }
  if (config.whatsappMessage) {
    content = content.replace(/message: "Hi, I'd like to book a dental appointment"/, `message: "${config.whatsappMessage}"`);
  }

  // Update SEO
  if (config.siteUrl) {
    content = content.replace(/siteUrl: "https:\/\/example\.com"/, `siteUrl: "${config.siteUrl}"`);
    content = content.replace(/defaultTitle: "Your Business Name - Your Business Tagline"/, `defaultTitle: "${config.businessName} - ${config.tagline}"`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  print('  ✓ Updated src/config/site.ts', 'green');
}

// Update analytics configuration
function updateAnalyticsConfig(config) {
  const filePath = path.join(__dirname, '../src/config/analytics.ts');
  let content = fs.readFileSync(filePath, 'utf8');

  // Update short links with real data
  if (config.whatsappNumber) {
    content = content.replace(/destination: 'https:\/\/wa\.me\/1234567890'/, `destination: 'https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}'`);
    content = content.replace(/destination: 'https:\/\/wa\.me\/1234567890\?text=Emergency%20Contact'/, `destination: 'https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=Emergency%20Contact'`);
  }
  
  if (config.phone) {
    const phoneClean = config.phone.replace(/[^0-9+]/g, '');
    content = content.replace(/destination: 'tel:\+1-555-123-4567'/, `destination: 'tel:${phoneClean}'`);
  }

  if (config.street && config.city && config.state && config.zip) {
    const address = `${config.street} ${config.city} ${config.state} ${config.zip}`.replace(/ /g, '+');
    content = content.replace(/destination: 'https:\/\/maps\.google\.com\/\?q=123\+Main\+Street\+City\+State\+12345'/, `destination: 'https://maps.google.com/?q=${address}'`);
  }

  if (config.instagram) {
    const instagramHandle = config.instagram.replace('@', '');
    content = content.replace(/destination: 'https:\/\/instagram\.com\/examplebusiness'/, `destination: 'https://instagram.com/${instagramHandle}'`);
  }

  if (config.tiktok) {
    const tiktokHandle = config.tiktok.replace('@', '');
    content = content.replace(/destination: 'https:\/\/tiktok\.com\/@examplebusiness'/, `destination: 'https://tiktok.com/@${tiktokHandle}'`);
  }

  if (config.facebook) {
    content = content.replace(/destination: 'https:\/\/facebook\.com\/examplebusiness'/, `destination: 'https://facebook.com/${config.facebook}'`);
  }

  if (config.linkedin) {
    content = content.replace(/destination: 'https:\/\/linkedin\.com\/company\/examplebusiness'/, `destination: 'https://linkedin.com/company/${config.linkedin}'`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  print('  ✓ Updated src/config/analytics.ts', 'green');
}

// Update locations configuration
function updateLocationsConfig(config) {
  const filePath = path.join(__dirname, '../src/config/locations.ts');
  let content = fs.readFileSync(filePath, 'utf8');

  // Update main office location
  if (config.street) {
    content = content.replace(/street: '123 Main Street' \/\/ ⚠️ UPDATE: Replace with your street address/, `street: '${config.street}'`);
  }
  if (config.city) {
    content = content.replace(/city: 'City' \/\/ ⚠️ UPDATE: Replace with your city/, `city: '${config.city}'`);
  }
  if (config.state) {
    content = content.replace(/state: 'State' \/\/ ⚠️ UPDATE: Replace with your state\/province/, `state: '${config.state}'`);
  }
  if (config.zip) {
    content = content.replace(/zip: '12345' \/\/ ⚠️ UPDATE: Replace with your postal code/, `zip: '${config.zip}'`);
  }
  if (config.country) {
    content = content.replace(/country: 'US' \/\/ ⚠️ UPDATE: Replace with your country code/, `country: '${config.country}'`);
  }
  if (config.phone) {
    content = content.replace(/phone: '\+\d{1} \(\d{3}\) \d{3}-\d{4}' \/\/ ⚠️ UPDATE: Replace with your phone number/, `phone: '${config.phone}'`);
  }
  if (config.email) {
    content = content.replace(/email: 'info@example\.com' \/\/ ⚠️ UPDATE: Replace with your email/, `email: '${config.email}'`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  print('  ✓ Updated src/config/locations.ts', 'green');
}

// Update astro.config.mjs
function updateAstroConfig(config) {
  const filePath = path.join(__dirname, '../astro.config.mjs');
  let content = fs.readFileSync(filePath, 'utf8');

  if (config.siteUrl) {
    content = content.replace(/site: 'https:\/\/yourdomain\.com'/, `site: '${config.siteUrl}'`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  print('  ✓ Updated astro.config.mjs', 'green');
}

// Run setup
setup().catch((error) => {
  print(`\n❌ Setup failed: ${error.message}`, 'red');
  process.exit(1);
});

