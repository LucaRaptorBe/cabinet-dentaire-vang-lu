# Analytics & Monitoring Setup Guide

## Phase 8: Analytics & Monitoring

This guide explains how to set up analytics and SEO monitoring for Cabinet Dentaire Vang.

---

## 1. Google Analytics 4 (GA4)

### Setup Steps

1. **Create GA4 Property**
   - Go to https://analytics.google.com/
   - Create new property: "Cabinet Dentaire Vang"
   - Select timezone: Central European Time
   - Select currency: EUR

2. **Get Measurement ID**
   - You'll receive a Measurement ID like: `G-XXXXXXXXXX`

3. **Add to Website**

   Install the `react-ga4` package:
   ```bash
   npm install react-ga4
   ```

   Then add to `src/main.tsx`:
   ```tsx
   import ReactGA from 'react-ga4';

   // Initialize GA4
   ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your Measurement ID

   // Track page views
   ReactGA.send({ hitType: "pageview", page: window.location.pathname });
   ```

4. **Track Events**
   ```tsx
   // Track appointment bookings
   ReactGA.event({
     category: "User Interaction",
     action: "Click Book Appointment",
     label: "Booking Page"
   });
   ```

### Key Metrics to Track

- **Page Views**: Which pages are most visited
- **User Demographics**: Age, location, language
- **Conversion Rate**: Appointments booked
- **Traffic Sources**: Organic search, direct, referral
- **Bounce Rate**: Pages where users leave quickly
- **Session Duration**: Time spent on site

---

## 2. Google Search Console

### Setup Steps

1. **Add Property**
   - Go to https://search.google.com/search-console
   - Add property: `https://cabinetdentairevang.lu`

2. **Verify Ownership**

   **Option A: HTML File Upload**
   - Download verification file
   - Place in `public/` folder
   - Rebuild and deploy

   **Option B: DNS Verification**
   - Add TXT record to your domain DNS
   - Recommended for long-term

3. **Submit Sitemap**
   - In Search Console, go to "Sitemaps"
   - Submit: `https://cabinetdentairevang.lu/sitemap.xml`
   - Wait 24-48h for indexing

### Key Metrics to Monitor

- **Impressions**: How often your site appears in search
- **Clicks**: How often users click your result
- **CTR (Click-Through Rate)**: Clicks / Impressions
- **Average Position**: Your ranking for keywords
- **Index Coverage**: Which pages are indexed
- **Mobile Usability**: Mobile-friendliness issues

### Important Queries to Track

Monitor rankings for:
- "dentiste luxembourg"
- "bon dentiste luxembourg"
- "cabinet dentaire limpertsberg"
- "implantologie luxembourg"
- "dentiste multilingue luxembourg"

---

## 3. Microsoft Clarity (Optional - Heatmaps)

### Why Use Clarity?

- **Free** heatmaps and session recordings
- See how users interact with your site
- Identify UX issues

### Setup

1. Go to https://clarity.microsoft.com/
2. Create project: "Cabinet Dentaire Vang"
3. Get tracking code
4. Add to `public/index.html` in `<head>`

---

## 4. Hotjar (Optional - User Feedback)

### Features

- Heatmaps
- Session recordings
- Surveys and feedback widgets
- Conversion funnels

### Setup

1. Go to https://www.hotjar.com/
2. Free plan available (35 sessions/day)
3. Install tracking code

---

## 5. SEO Monitoring Tools

### Google Search Console (Already covered above)

### Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters
2. Add site: `https://cabinetdentairevang.lu`
3. Verify with same file as Google Search Console
4. Submit sitemap

### Rank Tracking (Optional Paid Tools)

**Recommended Tools:**

1. **SEMrush** ($129/month)
   - Comprehensive SEO suite
   - Rank tracking
   - Competitor analysis
   - Backlink monitoring

2. **Ahrefs** ($129/month)
   - Best for backlink analysis
   - Rank tracking
   - Content gap analysis

3. **Ubersuggest** ($29/month - Budget option)
   - Basic rank tracking
   - Keyword ideas
   - Site audit

4. **Free Alternative: Google Search Console**
   - Free ranking data
   - Update weekly
   - No cost!

---

## 6. Event Tracking Recommendations

### Key Events to Track

```tsx
// Appointment button clicks
<Button onClick={() => {
  ReactGA.event({
    category: 'Conversion',
    action: 'Click Book Appointment',
    label: location.pathname
  });
}}>
  Prendre RDV
</Button>

// Phone number clicks
<a href="tel:+35226262046" onClick={() => {
  ReactGA.event({
    category: 'Lead',
    action: 'Click Phone Number',
    label: 'Header'
  });
}}>
  +352 26 26 20 46
</a>

// Language switches
<button onClick={() => {
  i18n.changeLanguage(newLang);
  ReactGA.event({
    category: 'User Interaction',
    action: 'Change Language',
    label: newLang
  });
}}>
  {newLang.toUpperCase()}
</button>

// External links (Doctena booking)
<button onClick={() => {
  ReactGA.event({
    category: 'External Link',
    action: 'Open Doctena Booking',
    label: doctorName
  });
  window.open(doctenaUrl);
}}>
  Book Appointment
</button>
```

---

## 7. Monthly Monitoring Checklist

### Week 1
- [ ] Check Google Search Console rankings
- [ ] Review top performing keywords
- [ ] Check for crawl errors
- [ ] Verify sitemap status

### Week 2
- [ ] Review Google Analytics traffic
- [ ] Check conversion rates (appointments)
- [ ] Analyze traffic sources
- [ ] Review bounce rates

### Week 3
- [ ] Check backlinks (if using Ahrefs/SEMrush)
- [ ] Review competitor rankings
- [ ] Check site speed (PageSpeed Insights)
- [ ] Review mobile usability

### Week 4
- [ ] Monthly report summary
- [ ] Identify improvement opportunities
- [ ] Plan content updates if needed
- [ ] Check for technical SEO issues

---

## 8. Key Performance Indicators (KPIs)

### Primary KPIs

1. **Organic Traffic Growth**
   - Target: +20% month-over-month (first 6 months)
   - Measure in Google Analytics

2. **Keyword Rankings**
   - "dentiste luxembourg" → Target: Top 3
   - "bon dentiste luxembourg" → Target: Top 3
   - Track in Google Search Console

3. **Conversion Rate**
   - Appointments booked / Total visitors
   - Target: 2-5% (industry average)

4. **CTR from Search**
   - Clicks / Impressions in Google
   - Target: 5-10% (depends on position)

5. **Page Load Speed**
   - LCP < 2.5s
   - FID < 100ms
   - CLS < 0.1
   - Measure with Lighthouse

### Secondary KPIs

- Pages per session: 2-3 pages
- Average session duration: 2-3 minutes
- Bounce rate: < 60%
- Mobile traffic %: 60-70%

---

## 9. Quick Wins

### Immediate Actions (Week 1)

1. ✅ Install Google Analytics 4
2. ✅ Set up Google Search Console
3. ✅ Submit sitemap
4. ✅ Add basic event tracking (appointment clicks)

### Short-term (Month 1)

5. Monitor initial rankings
6. Review first analytics data
7. Adjust meta tags if needed (based on CTR)
8. Check for any indexing issues

### Long-term (3-6 months)

9. Build backlinks (local directories, partnerships)
10. Create blog content for long-tail keywords
11. Get more reviews (boost from 751 to 1000+)
12. Optimize underperforming pages

---

## 10. Privacy & GDPR Compliance

Since you're in Luxembourg (EU), ensure GDPR compliance:

### Required Elements

1. **Cookie Consent Banner**
   - Install a cookie consent solution
   - Options: Cookiebot, OneTrust, Axeptio

2. **Privacy Policy**
   - Explain what data you collect
   - How you use it
   - User rights (access, deletion)

3. **Google Analytics Configuration**
   - Enable IP anonymization
   - Disable data sharing with Google
   - Set data retention to 14 months

Example GA4 config:
```tsx
ReactGA.initialize('G-XXXXXXXXXX', {
  gaOptions: {
    anonymizeIp: true
  }
});
```

---

## Summary

**Priority Order:**

1. **Critical (Week 1)**:
   - Google Search Console ✅
   - Submit sitemap ✅
   - Google Analytics 4 ✅

2. **High (Month 1)**:
   - Event tracking
   - Bing Webmaster Tools
   - Cookie consent banner

3. **Medium (Month 2-3)**:
   - Microsoft Clarity (optional)
   - Rank tracking tool (optional)

4. **Ongoing**:
   - Monthly monitoring
   - Performance optimization
   - Content updates

**Expected Timeline for SEO Results:**

- **Weeks 1-4**: Site gets indexed, rankings appear
- **Months 2-3**: Rankings improve, traffic increases
- **Months 3-6**: Reach target rankings (Top 3)
- **Months 6+**: Maintain and optimize further

Good luck! 🚀
