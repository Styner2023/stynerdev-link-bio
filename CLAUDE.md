# stynerdev-link-bio

Single-page link bio for Styner Stiner. Next.js 16 (App Router, Turbopack),
React 19, Tailwind v4. One route: `app/page.tsx` composes every section.

## Deploying — read this first

**Pushing to GitHub does NOT deploy the site.** The repo is connected to GitHub,
but the Vercel project does not build on push. Production deploys only happen
when you run the CLI by hand:

```bash
npm run build          # sanity check first — see the caveat below
git push origin main
vercel --prod --yes    # this is the step that actually deploys
```

Skip the last line and the live site stays on whatever was deployed before,
however many commits ago that was.

**Build errors do not block deploys.** `next.config.mjs` sets
`typescript.ignoreBuildErrors: true`, so Vercel will happily ship a broken
build. Run `npx tsc --noEmit` before deploying; it is the only thing checking.

**Deployment Protection is on.** The `*.vercel.app` URLs redirect to Vercel SSO
and are only viewable while logged into the Vercel account. For a public URL,
alias a custom domain (the account owns `stynerdev.com`, `kuumbacode.com`,
`gunsmokebeats.com` and others) or disable protection in project settings.

## Images

Served images live in `public/img/` as optimized `.jpg`. The originals are
multi-megabyte PNGs that must **not** be committed — `.gitignore` lists them
individually under `public/img/black-handmade-flowers-leaves-floral/`.

`next.config.mjs` sets `images.unoptimized: true`, so Next does no compression
whatsoever. Whatever you commit is what every visitor downloads. Resize and
convert before adding:

```bash
sips -s format jpeg -s formatOptions 82 --resampleHeightWidthMax 1200 \
  ~/Downloads/source.png --out public/img/name.jpg
```

**Watch for EXIF rotation on phone photos.** A JPEG can carry an orientation
tag telling browsers to rotate it. Rotating the pixels is not enough — the tag
survives and the browser rotates the corrected image *again*, so it renders
sideways in the browser while looking upright in every local preview tool.
Check with `mdls -name kMDItemPixelWidth -name kMDItemPixelHeight <file>`: if
those dimensions are transposed relative to `sips -g pixelWidth -g pixelHeight`,
the tag is active. Strip or set it to 1. `public/img/watani-upright.jpg` was
fixed this way.

## Layout conventions

The page is a single centered card: `max-w-150` on phones, `md:max-w-4xl`
(896px) from tablet up (`app/page.tsx`).

Because the desktop column is wide, text needs explicit caps or it sprawls to
~120 characters per line:

- Long-form prose — `max-w-2xl mx-auto`
- Display headlines — `max-w-3xl mx-auto`
- Section images — `max-w-md mx-auto`

Content sections (Who I Am, My Father My Hero, Live Readings, Songs & Lyrics)
share a deliberate structure. Match it when adding a section:

1. `<h2>` **outside** the bordered card, `font-retro lg:text-4xl mb-4 md:mb-8`
2. Portrait, `max-w-md mx-auto`, 4px black border
3. Pull-quote opener — `font-serif italic` with `border-l-4 border-black pl-6`
4. Left-aligned prose, broken into short paragraphs
5. Centered bold beats between prose blocks (`text-xl`, `py-4`)
6. Closing statement — serif italic, centered, `border-t-2` above it

Brand icons are inlined SVGs in `components/link-buttons.tsx`. Lucide deprecated
all of its brand icons (Twitter, Github, Instagram, Youtube), so importing them
raises deprecation warnings — inline instead.

## Where things live

| File | Contains |
|---|---|
| `app/page.tsx` | Section order, page width, flower/squiggle dividers |
| `components/link-buttons.tsx` | Every link, grouped into sections. Data-driven — edit the `sections` array |
| `components/hero-section.tsx` | Hero headline, main photo, "Who I Am" bio |
| `components/custom-bio-service.tsx` | Songs & Lyrics section + SoundCloud embed. Name is stale; it used to be a link-bio sales pitch |
| `components/partner-section.tsx` | Watani Stiner: channels, press pills, contact |
| `components/revolutionary-section.tsx` | "My Father, My Hero" |
| `components/image-section.tsx` | **Unused.** Not imported anywhere |

`components/music-modal.tsx` is also unimported — it held four dev-music tracks
behind a button that was removed. Kept in case it comes back.
