# Local testing guide

Dev server should be running at:

**http://127.0.0.1:3000**

If it is not running, from the project folder:

```bash
cd /Users/mario/Documents/GitHub/alinda
npm run dev -- -H 127.0.0.1 -p 3000
```

Local env file: `.env.local` (already created; ignored by git).

---

## What to check

### Homepage — http://127.0.0.1:3000

1. **Hero**
   - You should see the poster image immediately (not a blank/black flash waiting on a huge download).
   - On a **narrow window / phone emulator**: Network tab should **not** download `/video.mp4`.
   - On a **wide desktop window**: after ~1–2s idle, `/video.mp4` may load and play muted in the background.
2. **Linda photo** (“Thinking About Buying…”)
   - Image should look normal; Network should request something like `/_next/image?...linda.webp` (small), not a multi‑MB PNG.
3. **As Seen In** logos
   - Ticker still scrolls; logos look the same.
4. **Featured Properties**
   - Scroll down to the section; listings should appear after a short delay (IDX loads when near viewport).
   - Property photos should still show (may use smaller Spark `-c` URLs).
5. **Contact card / forms**
   - Card still renders with Linda photo.
   - Optional: submit the homepage or contact form once to confirm Web3Forms works.

### Other pages

| URL | Check |
|-----|--------|
| http://127.0.0.1:3000/about-us | Linda image via optimized WebP |
| http://127.0.0.1:3000/about-us/our-team | Team grid + Linda card |
| http://127.0.0.1:3000/testimonials | First card: **Colleen M., Trustee** |
| http://127.0.0.1:3000/contact | Form still submits |
| http://127.0.0.1:3000/robots.txt | Plain text robots rules (not an HTML 404 page) |
| http://127.0.0.1:3000/properties | Still works / links OK |

### Chrome DevTools tips

1. Open **DevTools → Network**.
2. Toggle **Disable cache**, reload.
3. Filter by **Img** / **Media**:
   - Mobile emulator: no `video.mp4`, no `bgtest.png`.
   - Look for `linda.webp` or `/_next/image` (tens–hundreds of KB, not ~5 MB).
4. **Lighthouse** (mobile): run against `http://127.0.0.1:3000` for a local performance check (results differ from production CDN, but LCP should be far better than the old ~44s).

### Security / headers (optional)

```bash
curl -sI http://127.0.0.1:3000 | grep -iE 'strict-transport|content-security|x-content-type|referrer-policy|permissions-policy'
```

You should see CSP and related headers from `next.config.ts`.

---

## Stop the server

In the terminal running `npm run dev`, press `Ctrl+C`.

---

## Notes

- IDX listings and Spark photos need internet access.
- `/blog/admin` and `/api/properties` need `ADMIN_PASSWORD` / `KEY` set in `.env.local` if you want to test those specifically.
- `.env.local` is gitignored — do not commit it.
