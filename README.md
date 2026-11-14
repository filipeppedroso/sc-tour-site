# SC Tour

Marketing site for SC Tour, an executive transport and airport transfer company in
Florianópolis, Brazil. Static HTML, CSS and vanilla JavaScript, deployed on Vercel.

**Live site:** https://sctour.vercel.app

## Why it is built this way

The brief was a fast site that ranks for local search terms and pushes visitors into
WhatsApp, which is where bookings actually close in Brazil. A CMS or a JavaScript
framework would have added hosting cost, a build step and a maintenance burden to six
pages that change a few times a year. So it is hand-written HTML, one stylesheet and
a 39-line script, served as static files.

## What is in it

- Six pages: home, services, fleet, about, contact, and a blog placeholder
- Responsive layout with a mobile menu. No framework, no runtime dependencies,
  nothing to install
- SEO groundwork: per-page titles and meta descriptions, canonical URLs, Open Graph
  tags, `sitemap.xml` and `robots.txt`
- `Organization` JSON-LD structured data with the business address and contact details
- A contact form that serialises its fields into a pre-filled WhatsApp message, so
  there is no backend, no third-party form service and no stored customer data

## Running it

There is no build step. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
```

## Structure

```
assets/css/style.css     single stylesheet
assets/js/main.js        mobile menu, dynamic year, contact form handler
assets/images/           photography
*.html                   one file per page
sitemap.xml, robots.txt  crawler directives
```

## Notes

- Deployed on Vercel from `main`
- The SC Tour name, copy and photography belong to the client and are not licensed
  for reuse. The markup and stylesheet are published as a work sample
