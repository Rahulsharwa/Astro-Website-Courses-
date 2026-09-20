import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// TODO: replace with the real production domain before launch.
// Every canonical URL, the sitemap, robots.txt and all JSON-LD URLs derive from this.
const SITE_URL = "https://nacmit.example";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  redirects: {
    // Merged into /courses/ms-office-course/ — the two pages were near-duplicates.
    "/courses/ms-word-excel-powerpoint-course/": "/courses/ms-office-course/",
    // Vanity URL for print/ads; /courses/ is the real category landing page.
    "/computer-courses-in-dhamtari/": "/courses/"
  },
  vite: { plugins: [tailwindcss()] }
});
