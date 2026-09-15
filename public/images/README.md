# Image drop-in inventory

All image slots intentionally render labeled placeholders. No photography or original logo is included.

`lib/images.ts` is the complete inventory: ID, page, aspect ratio, intended subject, and replacement path. For example, `home/hero` maps to `/public/images/home/hero.jpg`. Add approved images at those paths, then update `components/PlaceholderImage.tsx` to render `next/image` when an asset is available, preserving the wrapper ratio and alternative text. Until that change, placing files here does not enable real photography automatically.

The logo slot is `/public/images/brand/logo.jpg`. The local social sharing placeholder is rendered by `app/opengraph-image.tsx`; replace it with the approved 1200 × 630 asset when ready.
