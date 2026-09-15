# Performance, Security & Cleanup Recap

**Date:** September 15, 2026  
**Site:** lindaolsson.com (Next.js App Router)  
**Constraint:** No intentional visual or functionality changes — optimize and harden only.

This document summarizes the work done in this session for handoff / storage.

---

## 1. Content fix (earlier in session)

| Change | File |
|--------|------|
| First testimonial author/type updated from **Anonymous / Client** → **Colleen M. / Trustee** | `app/data/testimonials.ts` |

A second “Anonymous Client” entry still exists at the end of the testimonials list and was left unchanged.

---

## 2. Why we did this (PageSpeed context)

Mobile PageSpeed (Sep 15, 2026) reported roughly:

| Metric | Mobile | Desktop |
|--------|--------|---------|
| Performance | **60** | **90** |
| LCP | **~44.1 s** | ~0.4 s |
| Speed Index | ~27 s | ~4.2 s |

Main culprits called out:

- `/video.mp4` (~14 MB) and `/bgtest.png` (~6.5 MB) on initial load
- `/linda.png` (~5.3 MB), displayed much smaller than source
- IDX / Spark CDN originals (`cdn.photos.sparkplatform.com` `*-o.jpg`) totaling tens of MB
- GTM / IDX scripts competing on the main thread
- Broken `/robots.txt` (HTML 404 instead of robots directives)

Reference reports used: PageSpeed Insights mobile + desktop PDFs from the same run.

---

## 3. Performance changes

### Hero media
- Replaced eager full video + giant PNG fallback with a small **poster** (`public/hero-poster.jpg`, ~194 KB).
- **Desktop:** video loads after idle (`requestIdleCallback` / timeout); `preload="none"`.
- **Mobile / Save-Data / slow networks:** video is **not** loaded; poster only.
- Removed use of `public/bgtest.png` and deleted that asset.

### Linda portrait & logos
- Compressed `public/linda.png` (~5.3 MB → ~476 KB).
- Added optimized variants: `public/linda.webp` (~87 KB), `public/linda.jpg` (~123 KB).
- Homepage / Contact / About / Team cards now use `next/image` + `/linda.webp` with explicit dimensions / `sizes`.
- Shrunk ticker logos `wpbf.png` and `Zillow.png`; ticker `<img>`s got width/height + `loading="lazy"`.

### IDX Featured Properties
- Deferred IDX widget until the section is near the viewport (`IntersectionObserver`).
- Dynamically imported `IdxFeaturedProperties` (and `ContactCard`) on the homepage.
- Rewrites Spark photo URLs from `-o.jpg` (original) to `-c.jpg` (smaller), with **onerror fallback** to original.
- Property images use `loading="lazy"` (first two eager), explicit width/height.

### Scripts & fonts
- Google Ads gtag moved from blocking `<head>` scripts to `next/script` with `strategy="lazyOnload"`.
- Fonts use `display: "swap"`.
- Added `preconnect` / `dns-prefetch` for Spark / IDX origins.

### Next image config
- `images.remotePatterns` for Spark CDN, IDX hosts, etc.
- AVIF/WebP formats enabled.
- Long-cache headers for static media / video.

**Files (primary):**  
`app/page.tsx`, `app/layout.tsx`, `app/components/IdxFeaturedProperties.tsx`, `app/components/ContactCard.tsx`, about/team pages, `next.config.ts`.

---

## 4. Security changes

### Dependencies
- Upgraded **Next.js** `15.1.11` → **`15.5.25`** (many advisories).
- Updated related packages (`uuid`, `postcss`, etc.).
- Removed unused **TipTap** packages (and their advisory surface).
- Added **`isomorphic-dompurify`** for HTML sanitization.

### Headers / CSP (`next.config.ts`)
Added response headers including:

- `Strict-Transport-Security`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`
- `Permissions-Policy`
- `Content-Security-Policy` (allows GTM, IDX, Web3Forms, Vercel analytics, Spark images, etc.)
- `frame-ancestors` allows self + IDX framing (wrapper pages)

Intentionally **did not** set global `X-Frame-Options: DENY/SAMEORIGIN` so IDX Broker embedding of wrapper pages is not broken.

### Secrets / env hygiene
- Web3Forms key reads `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` first (fallback kept so forms keep working).
- Added `.env.example` documenting `KEY`, `ADMIN_PASSWORD`, `NEXT_PUBLIC_BASE_URL`, `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
- IDX API key remains server-only via `process.env.KEY`.

### XSS protection
- New helper: `lib/sanitize-html.ts`.
- Blog HTML sanitized before `dangerouslySetInnerHTML` in:
  - `app/[slug]/page.tsx`
  - `app/[...slug]/page.tsx`
  - `app/palm-beach-homes/[slug]/page.tsx`
  - `app/palm-beach-homes/[...slug]/page.tsx`
  - `app/blog/[slug]/page.tsx`

### robots.txt
- Added `app/robots.ts` so `/robots.txt` returns real robots rules instead of the HTML catch-all 404 (PageSpeed SEO issue).

### Accessibility (small)
- Mobile menu open/close buttons got `aria-label` / `aria-expanded` in `components/Navbar.tsx`.

### Remaining known audit item
- Nested **postcss** inside Next still flags in `npm audit`; fully clearing it likely requires **Next 16** (breaking). Left as follow-up.

---

## 5. Cleanup / junk removal

### Kept on purpose (restored)
These **`.md` docs are not publicly served** by Next (not under `public/`), but should remain in the repo:

- `idxapimethods.md`
- `idxdocs.md`
- `test.md`
- `app/mlsdocs.md`
- `app/blogtest/readme.md`
- `README.md`

### Removed (safe / unused)
**Root dumps / experiments**

- `advancedsearch.html`, `advancedsearchhtmldump.html`, `extra1.html`, `search.html`
- `t.html`, `thisone.html`, `thisonesearch.html`, `u.html`
- `idx-iframe.html`, `idx-test.ps1`

**Unused / experimental app routes & duplicates**

- `app/testpage/`
- `app/blogtest/` app code (readme restored)
- `app/blogfinal/`
- `app/api/blogfinal/`
- `app/components/FeaturedProperties.tsx` (unused; home uses `IdxFeaturedProperties`)
- `app/components/Navbar.tsx` (duplicate; live nav is `@/components/Navbar`)
- `app/luxury-palm-beach-condominium-co-op-buildings/page.tsx.bak`

**Heavy unused public assets**

- `public/fakelinda.svg` (~37 MB)
- `public/linda.svg` (~6.4 MB)
- `public/bgtest.png` (~6.5 MB)
- `public/apiDoc_ idx - 1.0.1.html` + `_files/` (~8 MB)
- Default Next stubs: `next.svg`, `globe.svg`, `file.svg`

**Approx result:** `public/` footprint dropped from ~180MB+ toward ~88MB (video.mp4 ~14MB still kept for desktop hero).

---

## 6. New / updated files worth tracking

| Path | Role |
|------|------|
| `app/robots.ts` | Valid `/robots.txt` |
| `lib/sanitize-html.ts` | DOMPurify wrapper for blog HTML |
| `public/hero-poster.jpg` | Hero poster (mobile + pre-video) |
| `public/linda.webp` / `linda.jpg` | Optimized Linda assets |
| `.env.example` | Env var documentation |
| `next.config.ts` | Images + security headers + caching |
| `package.json` / lockfile | Next 15.5.25, DOMPurify, TipTap removed |

---

## 7. What we deliberately did *not* change

- Visual styling, layout, colors, typography (aside from optimized image sources that should look the same).
- IDX Broker widgets / marketplace functionality (still present; loading deferred).
- Desktop hero video asset still available at `/video.mp4`.
- Production blog route `/blog` and Notion-related `/blogs` API paths kept.
- Markdown documentation files kept in repo (not public URLs).

---

## 8. Deploy / verify checklist

1. Deploy to Vercel (or host).
2. Confirm env vars: `KEY`, `ADMIN_PASSWORD`, optionally `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`, `NEXT_PUBLIC_BASE_URL`.
3. Spot-check homepage:
   - Mobile: poster, no 14MB video download
   - Desktop: poster then video after idle
   - Featured Properties still populate after scroll
   - Contact / Web3Forms still submits
4. Open `https://www.lindaolsson.com/robots.txt` — should be plain robots text, not HTML.
5. Re-run PageSpeed Insights (mobile + desktop); compare LCP / transfer size vs Sep 15 baseline.
6. Optional: rotate Web3Forms key if the old hardcoded value was considered exposed, then set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.

---

## 9. Suggested follow-ups (not done)

- Compress / re-encode `public/video.mp4` (still ~14 MB) for desktop.
- Compress large neighborhood SVGs (`northend.svg`, `intown.svg`, etc.) if still used at card size.
- Consider Next 16 when ready to clear remaining nested postcss audit findings.
- Restore full `app/blogtest` app code only if still needed (currently only `readme.md` remains).
- Decide fate of second “Anonymous Client” testimonial.

---

*Generated as a session recap for the alinda / Linda Olsson site performance & security pass.*
