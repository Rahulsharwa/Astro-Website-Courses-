# NAC-MIT Computer Training Center

Website for **NAC-MIT Computer Training Center** — a computer institute at Karmchari Bhawan,
Kachahari Chowk, Dhamtari, Chhattisgarh.

Built with [Astro](https://astro.build) 7 and Tailwind CSS 4. Static output, no backend.

---

## Quick start

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check (`astro check`) and build to `dist/` |
| `npm run preview` | Serve the built site locally |

---

## Before deploying

Two values need to be set or the site will not work correctly in production.

### 1. The production domain — required

`astro.config.mjs` currently uses a placeholder:

```js
const SITE_URL = "https://nacmit.example";
```

Every canonical URL, the sitemap, `robots.txt`, the Open Graph tags and all structured data
derive from this. **Until it is the real domain, search engines cannot index the site
correctly** — they will follow the canonicals to a domain that does not exist.

### 2. The enquiry form key — recommended

The counselling form on `/contact/` posts to [Web3Forms](https://web3forms.com), which emails
enquiries straight to you. Get a free key (no account needed — they email it to you), then:

```bash
cp .env.example .env
# paste the key into PUBLIC_WEB3FORMS_KEY
```

Without a key the form still validates, but tells visitors to call instead of silently
losing the enquiry. It never shows a false success message.

---

## Project structure

```
src/
  data/
    institute.ts     Institute details, TypeScript types, content helpers
    courses.ts       All 10 courses — the single source of page content
    site.ts          Barrel re-export + category FAQs
  layouts/
    Layout.astro     <head>, sitewide JSON-LD, header/footer, mobile call bar
  components/        Header, Footer, CourseCard, Breadcrumbs, FAQ,
                     CounsellingForm, AnchoredSeoContent
  pages/
    index.astro                Home
    courses/index.astro        Course index + "which course should you join?"
    courses/[slug].astro       Course page template (one per course)
    about/ fees/ contact/ curriculum/
    admission-information/ certificate-and-affiliation/
    robots.txt.ts
public/
  curriculum.md      Downloadable curriculum overview
courses/             Orphaned source briefs — NOT read by Astro (see Notes)
```

### Content lives in one file

Every course page is generated from the `courses` array in `src/data/courses.ts`.
To add or change a course, edit that array — the course page, course card, fees table,
curriculum listing, footer navigation, sitemap and enquiry-form dropdown all update
automatically. No template changes needed.

`seoContent` is a **required** field on every course. That is deliberate: it means a course
cannot ship with placeholder or auto-generated copy, because the build fails without it.

---

## Content and SEO conventions

These are worth keeping to if you edit the copy.

- **No `<meta name="keywords">`.** Google has ignored it since 2009. The `keywords` field on
  each course is an authoring checklist only — copy is written to cover those terms naturally.
  It is never rendered.
- **Never publish keyword lists as visible text.** An earlier version of `/courses/` did this
  under a heading reading "SEO Keyword Targets". It is keyword stuffing and risks a manual
  action. Write prose instead.
- **Write for a student or parent first**, then check keyword coverage. Density currently sits
  around 0.6–1.0% for "Dhamtari", which is normal. Above roughly 2.5% reads as stuffed.
- **Avoid self-declared superlatives** — "best institute in Dhamtari" and similar. Google
  discounts them and they read as spam.
- **Do not write "near me" into body prose.** It is served by the `LocalBusiness` structured
  data and by naming real landmarks (Kachahari Chowk, Karmchari Bhawan). At most one natural
  FAQ question per page.
- **Keep claims accurate.** The copy says "placement guidance" and "confirm with the
  institute" rather than promising jobs or fixed timings. Keep it that way.

### Structured data

Emitted on every page from `Layout.astro`:

- `EducationalOrganization` + `LocalBusiness` — name, address, phones, map
- `WebSite`

Plus, per page type:

- `Course` with `offers` on each course page — `offers` is omitted for courses with no
  published price rather than invented
- `BreadcrumbList` from `Breadcrumbs.astro`
- `FAQPage` on course pages and `/courses/`

No `aggregateRating` or `review` — self-serving ratings are a manual-action risk.

---

## Design system

Brand tokens are registered with Tailwind in the `@theme` block of `src/styles/global.css`,
so they are available as normal utilities (`bg-brand-blue`, `border-brand-line`, …).
Use the tokens — do not reintroduce raw hex values into markup.

| Token | Value | Use |
| --- | --- | --- |
| `brand-ink` | `#102238` | Body text, footer background |
| `brand-navy` | `#122d4f` | Dark sections, secondary buttons |
| `brand-blue` | `#0d67c5` | Primary actions, links |
| `brand-yellow` | `#f8c84e` | Accents, call-to-action bands |
| `brand-mist` | `#f4f8fc` | Section backgrounds |
| `brand-line` | `#dce7f2` | Borders |
| `brand-muted` | `#5f7184` | Secondary text (5.02:1 on white) |
| `brand-whatsapp` | `#15803d` | WhatsApp actions (5.02:1 with white text) |

### Buttons

Use the shared classes rather than inline utilities:

```html
<a class="btn btn-primary">Primary action</a>
<a class="btn btn-navy">Secondary action</a>
<a class="btn btn-outline">Tertiary action</a>
<a class="btn btn-whatsapp">WhatsApp</a>
<a class="btn-link">Inline text link →</a>
```

Modifiers: `btn-sm`, `btn-block`. Every `.btn` gets hover, `:focus-visible`, `:active` and
`:disabled` states automatically.

All text and interactive colours meet **WCAG AA** (4.5:1). If you change a colour, check the
contrast ratio before committing.

---

## Notes

- **`courses/*.md` at the repository root is not used by the site.** Those 12 markdown files
  are earlier source briefs. Astro never reads them — there is no content collection and they
  have no frontmatter. They have drifted from `src/data/courses.ts` and should be moved to a
  docs folder or deleted. Do not edit them expecting the site to change.
- Two URLs redirect (configured in `astro.config.mjs`):
  - `/courses/ms-word-excel-powerpoint-course/` → `/courses/ms-office-course/` (pages merged)
  - `/computer-courses-in-dhamtari/` → `/courses/` (vanity URL for print and ads)
- The site has no images. `og:image` is still the placeholder `public/og.svg` — real
  classroom photographs would improve both link previews and conversion.
- The `LocalBusiness` schema omits the PIN code and opening days because they were not
  confirmed. Adding them in `src/layouts/Layout.astro` strengthens the local search signal.

---

## Contact

NAC-MIT Computer Training Center
Karmchari Bhawan, Kachahari Chowk, Dhamtari, Chhattisgarh
9302789814 · 9039989814
