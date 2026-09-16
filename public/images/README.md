# Image drop-in inventory

The homepage hero uses the supplied image at `/public/images/home/hero.png`, rendered with `next/image` in `app/page.tsx`. Its embedded wordmark and tagline are preserved without duplicate visible text. The full image scales proportionally on every screen size so its lettering and faces are not cropped. Accessible heading and tagline text remain available to screen readers.

The six supporting homepage images are also installed:

- Who We Are: `home/who-we-are.jpg`
- Mentorship: `home/program-mentorship.jpg`
- Leadership: `home/program-leadership.jpg`
- Financial Wellness: `home/program-financial.jpg`
- Entrepreneurship: `home/program-entrepreneurship.jpg`
- Our Impact: `home/impact.jpg`

These slots have `available: true` in `lib/images.ts` and render through `next/image`. The circular portrait, alternating program layout, and section aspect ratios are preserved. Other image slots remain placeholders.

`lib/images.ts` is the complete inventory: ID, page, aspect ratio, intended subject, and replacement path. The active `home/hero` asset maps to `/public/images/home/hero.png`. Add approved images at those paths, then set `available: true` on the corresponding inventory entry and update its subject to describe the image. Until that change, placing files here does not enable real photography automatically.

The supplied logo is installed at `/public/images/brand/logo.ico` and displayed by the shared `Brand` component in the header and footer. The same file is installed at `app/favicon.ico` for the browser tab icon. The local social sharing placeholder is rendered by `app/opengraph-image.tsx`; replace it with the approved 1200 × 630 asset when ready.


## About page mosaic

The six supplied images are installed in prompt order: Finding (`mosaic-1.jpg`), Learn (`mosaic-2.jpg`), A Conversation (`mosaic-3.jpg`), A Warm Welcome (`mosaic-4.jpg`), Building an Idea (`mosaic-5.jpg`), and Leadership and Encouragement (`mosaic-6.png`). All paths are under `/public/images/about/`. The hero grid uses 4:3 slots, responsive image sizes, descriptive alt text, and eager loading for its initially visible photos.

The About page Our Leadership portrait uses the supplied /public/ImagesOfBeInspired/Dr.LaToya.png file. Its square aspect ratio, circular shape, and transparent background are preserved.


Board member portraits are installed at `/public/images/about/tatiana.png` and `/public/images/about/angie.png`. The shared Board of Directors cards preserve their circular shape and transparent backgrounds on the About and Our Leadership pages.


## Programs page images

All nine supplied photos are installed under `/public/images/programs/`: `hero.jpg`, `mentorship.jpg`, `leadership.jpg`, `financial.jpg`, `entrepreneurship.jpg`, and `gallery-1.jpg` through `gallery-4.jpg`. Gallery order: Making a New Connection, Practicing a Practical Skill, Reflecting, Creating Something. Each inventory entry includes descriptive alt text. The hero loads eagerly; section and gallery photos load lazily.
