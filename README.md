# stynerdev-link-bio

The personal link bio page for **Styner Stiner** — developer, systems architect,
songwriter, and founder of Kuumba Code. A single self-hosted page replacing a
Linktree-style service, with full control over design, images, and content.

Built with Next.js 16 (App Router), React 19, and Tailwind v4. One route,
composed from section components.

## What's on the page

- **Hero** — headline, portrait, and the "Who I Am" biography
- **The Revolutionary Who Raised Me** — Watani Stiner's story and legacy
- **Connect With Watani Stiner** — documentary, channels, press, contact
- **Live Readings & Speaking Engagements** — booking his readings and talks
- **Philosophy** — guiding principles
- **My Work** — project categories
- **Need Songs or Lyrics?** — GunSmoke Beats songwriting services and a
  SoundCloud player
- **Links** — Kuumba Code, social, music platforms, businesses, support,
  and a mailing address for gifts

## Running it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploying

> **Pushing to GitHub does not deploy this site.** The Vercel project does not
> build on push. You have to deploy from the command line.

```bash
npx tsc --noEmit       # the real error check — see note below
npm run build
git push origin main
vercel --prod --yes    # this is what actually publishes
```

Note that `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so
`npm run build` succeeds even when types are broken. `tsc --noEmit` is the
only thing that will tell you.

Deployment Protection is enabled, so `*.vercel.app` URLs require a Vercel
login to view. A custom domain is needed for a public address.

## Before adding an image

Images are served uncompressed (`images.unoptimized: true`), so whatever you
commit is what every visitor downloads. Resize first:

```bash
sips -s format jpeg -s formatOptions 82 --resampleHeightWidthMax 1200 \
  source.png --out public/img/name.jpg
```

Phone photos also carry EXIF rotation tags that can render them sideways in a
browser even when they look correct locally. See [CLAUDE.md](CLAUDE.md) for how
to detect and fix that, along with layout conventions and a map of the files.

---

Built by [StynerDev](https://www.styner.dev/)
