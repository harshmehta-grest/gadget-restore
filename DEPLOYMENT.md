# Configuration & Customization Guide

## 🎯 Before Launch Checklist

### 1. WhatsApp Configuration (CRITICAL)
**File**: `src/App.tsx`

Change these lines (lines 24-25):
```typescript
const WHATSAPP_PHONE = '919876543210'; // ← Your WhatsApp number here
const WHATSAPP_MESSAGE = 'Hi! I need help with my device repair. Can you help?';
```

**Phone Format**: `[country_code][number_without_spaces]`
- India: `919876543210`
- US: `12125551234`
- UK: `441632960000`
- Australia: `61412345678`

**Test**: Send yourself a WhatsApp first to confirm the number works.

### 2. Business Information

#### Company Details
- Update company name "GadgetRestore" in:
  - `src/components/Footer.tsx` (footer section)
  - `src/components/Differentiation.tsx` (if needed)
  - Page title in `index.html`

#### Services
**File**: `src/components/Services.tsx`

Edit the `services` array to match your offerings:
```typescript
const services: Service[] = [
  {
    icon: '📱',
    title: 'Your Service Name',
    description: 'Your description here',
    color: 'bg-blue-50',
  },
  // Add more...
];
```

#### Testimonials
**File**: `src/components/Testimonials.tsx`

Replace placeholder testimonials:
```typescript
const testimonials: Testimonial[] = [
  {
    name: 'Real Customer Name',
    device: 'iPhone 14 Pro',
    rating: 5,
    text: 'Real customer quote here',
    avatar: '👨‍💼', // or other emoji
  },
  // Add your real testimonials...
];
```

### 3. Contact Information

#### Email
Update contact email in `src/components/Footer.tsx`

#### Phone for Lead Form
The form will redirect to WhatsApp with the customer's details, but you should update the phone number to ensure consistency:

```typescript
// In src/App.tsx
const WHATSAPP_PHONE = 'YOUR_NUMBER_HERE';
```

### 4. Brand Colors (Optional)

**File**: `tailwind.config.js`

The current color scheme is black & white (Apple-style). If you want to customize:

```javascript
theme: {
  extend: {
    colors: {
      'brand-primary': '#YourColor',
      'brand-secondary': '#YourColor',
    },
  },
},
```

Then update component classes to use `bg-brand-primary` instead of `bg-gray-950`.

### 5. Content Customization

#### Hero Section
**File**: `src/components/Hero.tsx`

Update:
- Headline: "Mobile Repair You Can Trust."
- Subheadline: "Fast pickup, expert repair, and complete transparency."
- Key differentiators (3 bullet points)

#### Features/Differentiators
**File**: `src/components/Differentiation.tsx`

Edit the `differentiators` array with your unique selling points.

#### Trust Section
**File**: `src/components/Trust.tsx`

Edit the `features` array with your trust builders:
- Warranty period (change "7-day" if different)
- Certifications
- Safety protocols

#### Statistics
**File**: `src/components/Testimonials.tsx`

Update the stats section:
```typescript
// Change these numbers
<p className="text-4xl font-bold text-gray-950">4.9★</p> // Your rating
<p className="text-4xl font-bold text-gray-950">2500+</p> // Your customer count
<p className="text-4xl font-bold text-gray-950">98%</p> // Your success rate
```

## 📱 Mobile Testing

1. **Local Testing**
   ```bash
   npm run dev
   # Open http://localhost:5173 on your phone or use DevTools
   ```

2. **Check These on Mobile**
   - ✓ Hero section text visibility
   - ✓ Button sizes (tap targets 44px+)
   - ✓ WhatsApp button positioning
   - ✓ Form input fields
   - ✓ Image/emoji sizing
   - ✓ Scroll smoothness

## 🚀 Deployment Configuration

### Environment Variables (if needed)
Create `.env` file in project root:
```
VITE_WHATSAPP_PHONE=919876543210
VITE_API_ENDPOINT=https://your-api.com
```

Then update `App.tsx`:
```typescript
const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '919876543210';
```

### Production Build

1. **Build**
   ```bash
   npm run build
   ```

2. **Preview**
   ```bash
   npm run preview
   ```

3. **Deploy** (choose one)

   **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel
   ```

   **Netlify**
   - Connect your git repo
   - Build command: `npm run build`
   - Publish directory: `dist`

   **Traditional hosting**
   - Upload `dist/` folder to your server
   - Configure server to serve `index.html` for all routes

## 🎨 Design Customization

### Typography
- Font: System default (Apple San Francisco, Segoe UI, etc.)
- No external font imports (faster loading)

### Spacing
- Base unit: Tailwind's default (4px = 1 unit)
- `px-4` = 16px padding
- `mb-8` = 32px margin-bottom

### Breakpoints
- `md:` = 768px and up
- `lg:` = 1024px and up

## 🔗 Link Configuration

### Internal Links
Currently using scroll anchors:
```html
<a href="#services">Book Repair</a>
```

To add external links, update `src/components/Footer.tsx`.

### WhatsApp Link Format
The app automatically formats WhatsApp links:
```
https://wa.me/[PHONE_NUMBER]?text=[MESSAGE]
```

## 🔒 Security Configuration

### CORS (if using API)
If you add backend API calls, configure CORS properly.

### HTTPS
- Enable HTTPS on your hosting
- Update `public` folder if needed

### Privacy Policy
Add a privacy policy link in `src/components/Footer.tsx`

## 📊 Analytics (Optional)

Add Google Analytics to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🐛 Common Issues & Fixes

### Form not redirecting to WhatsApp
- Check WHATSAPP_PHONE format (no spaces/dashes)
- Test the WhatsApp link manually: `https://wa.me/919876543210`
- Verify phone number is correct

### Styling breaks on mobile
- Check responsive classes are applied
- Use DevTools to inspect CSS
- Rebuild: `npm run build`

### Slow performance
- Check bundle size: `npm run build` shows sizes
- Optimize images if any are added
- Use Lighthouse for recommendations

### WhatsApp button not visible
- Check z-index: `z-50` in `WhatsAppButton.tsx`
- Verify fixed positioning is working
- Check browser console for JS errors

## ✅ Pre-Launch Checklist

- [ ] WhatsApp number tested and confirmed
- [ ] All content reviewed for typos
- [ ] Testimonials updated with real customers
- [ ] Services list matches your offerings
- [ ] Statistics are accurate
- [ ] Mobile testing completed
- [ ] Build succeeds with no errors
- [ ] Production build tested locally
- [ ] HTTPS configured
- [ ] Analytics (if using) configured
- [ ] Backup created
- [ ] Deployment plan ready

## 📞 Support

For questions or issues:
1. Check troubleshooting section in main README
2. Review component files for implementation details
3. Test locally before deploying

---

**Ready to launch? Update the WhatsApp number and deploy!**
