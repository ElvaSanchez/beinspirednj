# Be Inspired NJ

A complete Next.js App Router site for Be Inspired NJ. Includes all 17 requested content routes, six articles, leadership bios, events, giving inquiries, contact and volunteer forms, and a branded 404.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. After installation, `npm run dev` is the only command needed.

```sh
npm run lint
npm run build
npm start
```

Next.js 16.3.5, React 19, strict TypeScript, and Tailwind CSS 4. Playfair Display, Source Sans 3, and Allura are self-hosted through `next/font/local`. Font files and their OFL licenses are included, so builds require no font downloads.

## Content and design

- `lib/content.ts`: typed copy, navigation, programs, articles, conference information, tickets, giving amounts, and FAQs.
- `lib/images.ts`: complete placeholder inventory and `/images/...` asset paths.
- `components/`: shared header, footer, buttons, section layouts, cards, image placeholders, FAQ, and forms.
- `app/globals.css`: brand tokens, responsive layouts, visible focus styles, and reduced-motion behavior.
- `brief.txt`: supplied specification, normalized to UTF-8 and without empty lines.
- `scripts/build-content.mjs`: reproduces the content module from the supplied brief.

The homepage hero uses the user-supplied image at `public/images/home/hero.png`. The six supporting homepage sections also use supplied images, enabled in `lib/images.ts`. Other photo slots and logos remain labeled placeholders. See `public/images/README.md` for replacement instructions. Social previews use the locally rendered placeholder in `app/opengraph-image.tsx`.

## Forms and giving

Contact, program inquiry, volunteer, and newsletter forms validate required fields, email addresses, telephone numbers, and optional attachment size (5 MB). They provide pending, error, and accessible success states.

By default, submissions display **local confirmations only**. No personal data is sent or stored. The interface makes this explicit and supplies the organization's email address. Attachments are UI-only in preview mode.

To connect a real backend, set `NEXT_PUBLIC_FORM_ENDPOINT` to an endpoint that accepts multipart `FormData` POSTs and responds with a successful HTTP status. `lib/forms.ts` is the integration boundary. Implement server-side validation, delivery/storage, spam protection, and consent handling in the endpoint before enabling it publicly. Endpoint failures keep the form available for retry.

Contact honors `topic`, `event`, and `amount` query parameters. Donation controls open a contact inquiry; **no payments are processed**. Facebook and Instagram remain clearly disabled placeholders. LinkedIn uses the supplied URL.

## Routing and accessibility

Pages share one sticky header/footer. Mobile navigation uses a native modal dialog with focus containment, Escape dismissal, and focus restoration. FAQ and program details use keyboard-accessible native disclosure controls. Includes a skip link, associated labels, inline errors, status announcements, semantic landmarks, per-page metadata, sitemap, robots, and the requested legacy redirects.

Responsive targets: 375, 768, 1024, and 1280+ pixels. Impact figures are labeled as 2024–2027 goals. Event dates, prices, and copy follow the supplied September 2026 brief.

## Browser checks (optional)

The app has no browser-testing runtime dependency. To rerun the checks with Microsoft Edge installed:

```sh
npm install --no-save --package-lock=false playwright-core axe-core
npm run dev
```

In a second terminal:

```sh
node scripts/browser-check.mjs
node scripts/accessibility-check.mjs
```

The scripts check all 17 content routes at the requested widths, mobile keyboard focus and Escape, required-field and email validation, local success confirmations, FAQ/program disclosures, donation and event inquiries, internal links/anchors, redirects, and automated WCAG A/AA rules. Screenshots are written to the ignored `test-results/` directory. Automated checks supplement, but do not replace, assistive-technology review.
