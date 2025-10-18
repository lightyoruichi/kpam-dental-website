# Short URL Parameter Forwarding

## How It Works

The short URL system now automatically forwards any query parameters from the short URL to the destination URL.

## Examples

### WhatsApp Links with Parameters
- `kpam.my/wa` → `https://wa.me/601137118155`
- `kpam.my/wa?text=Hello%20I%20need%20an%20appointment` → `https://wa.me/601137118155?text=Hello%20I%20need%20an%20appointment`
- `kpam.my/wa?text=Emergency&source=website` → `https://wa.me/601137118155?text=Emergency&source=website`

### Google Maps with Parameters
- `kpam.my/map` → `https://g.co/kgs/4YfpEsw`
- `kpam.my/map?hl=en&source=website` → `https://g.co/kgs/4YfpEsw?hl=en&source=website`

### Phone Links with Parameters
- `kpam.my/call` → `tel:+601137118155`
- `kpam.my/call?utm_source=website&utm_campaign=booking` → `tel:+601137118155?utm_source=website&utm_campaign=booking`

### Social Media with Parameters
- `kpam.my/ig` → `https://instagram.com/klinikpergigian_alammegah`
- `kpam.my/ig?utm_source=website` → `https://instagram.com/klinikpergigian_alammegah?utm_source=website`

## Use Cases

### Marketing Campaigns
- Track campaign sources: `kpam.my/wa?utm_source=facebook&utm_campaign=summer2024`
- A/B testing: `kpam.my/wa?variant=a&test=booking_flow`

### Pre-filled Messages
- WhatsApp with pre-filled text: `kpam.my/wa?text=I%20want%20to%20book%20a%20cleaning`
- Emergency contact: `kpam.my/emergency?text=URGENT%20dental%20emergency`

### Analytics Tracking
- Source tracking: `kpam.my/wa?source=google_ads&campaign=dental_services`
- User segmentation: `kpam.my/wa?user_type=new_patient&referral=friend`

## Implementation Details

The system:
1. Captures all query parameters from the short URL
2. Appends them to the destination URL
3. Handles both URLs with existing parameters and those without
4. Maintains proper URL encoding
5. Preserves all tracking and analytics data

## Benefits

- **Flexible Marketing**: Easy to create campaign-specific links
- **Better Analytics**: Track user sources and behavior
- **Improved UX**: Pre-fill forms and messages
- **Campaign Management**: A/B test different approaches
- **User Segmentation**: Track different user types and sources
