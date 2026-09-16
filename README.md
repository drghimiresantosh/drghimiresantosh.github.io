# Dr. Santosh Ghimire — website

A privacy-conscious, bilingual-ready static website for an Internal Medicine consultant physician in Butwal, Nepal. It is intentionally dependency-free so it can be hosted free on GitHub Pages and later served through a `.com.np` domain via Cloudflare.

## Current release (Phase 1)

- Professional home page with the complete education, experience and training record supplied in the CV
- Research section distinguishing the completed MD thesis from a manuscript currently under review
- English/Nepali switch on the main page, privacy notice and medical disclaimer
- Eight core internal-medicine services with an expandable, icon-led full list
- Clickable service cards with reusable bilingual detail pages; the diabetes guide is the first long-form article
- Mobile-first call, booking and follow-up actions
- Clinic appointment, online consultation and follow-up pathways
- Cal.com-ready scheduling with phone, WhatsApp and email fallback
- Privacy notice and medical disclaimer
- Semantic HTML, keyboard support, reduced-motion support and basic SEO

The health library links to Dr. Santosh's diabetes guide. Other topics remain planned; do not present an unreviewed draft as doctor-reviewed.

## Add a service or article

The cards and detail pages are generated from one catalog, `services.js`. No new page layout is needed for each topic.

1. Choose a unique lowercase URL id, such as `new-service-name`. Add one object to `window.SERVICES` in `services.js` with `id`, English and Nepali `title`, `summary` and three short `topics`. Add `featured: true` only if it should appear among the initial cards; otherwise it appears after **View all services**. The existing objects are examples to copy.
2. Put a matching square image at `assets/New service name.png` and run `python scripts/optimize_service_icons.py`. The small output should be `assets/service-images/new-service-name.webp`. If the icon filename differs from the id, add `icon: "assets/service-images/actual-filename.webp"` to that catalog object.
3. For a full article, copy `articles/_template.en.md` and `articles/_template.ne.md` to `articles/new-service-name.en.md` and `.ne.md`. Write and review both versions with Dr. Santosh. Use `##` for sections, `###` for subheadings, `-` for lists, and simple `|` tables. Add `article: { en: "articles/new-service-name.en.md", ne: "articles/new-service-name.ne.md" }` and optionally `updated: { en: "Month Year", ne: "नेपाली मिति" }` to the catalog object.
4. Without article files, the card still opens a bilingual service overview based on its catalog copy. After adding an article, preview locally and check both languages, including tables and urgent-care wording.
5. Keep raw drafts and identity documents in `resources/`; only approved article Markdown and small display images belong in the public site.

Each card opens `service.html?topic=<id>`. This works on GitHub Pages without server code. The page uses the visitor's saved language preference, and the language toggle switches the long-form article too.

### Add an article to an existing service

Adding a `.md` file alone does not publish it. The detail page loads article files named in that service's `services.js` catalog entry; you do not need to create or edit another HTML page.

1. Copy `articles/_template.en.md` and `articles/_template.ne.md` to two files with matching names, for example `articles/your-topic.en.md` and `articles/your-topic.ne.md`.
2. Write the English and Nepali versions, then ask Dr. Santosh to review both for medical accuracy. Keep the article files in `articles/`, not `resources/`, because `resources/` is excluded from publishing.
3. In the existing service object in `services.js`, add:

   ```js
   article: {
     en: "articles/your-topic.en.md",
     ne: "articles/your-topic.ne.md"
   },
   ```

4. Preview `service.html?topic=<id>` through a local server (see below). Switch between English and Nepali and confirm both articles load. Commit the two Markdown files and the updated `services.js` with the site files when publishing.

For a **new** service, first add its catalog entry and icon as described above; then add the two article files and `article` mapping. The shared `service.html` page formats the Markdown at visit time. It supports `##` headings, `###` subheadings, paragraphs, `-` lists, simple `|` tables, bold text and HTTPS links. It is not a full Markdown processor, so preview unusual formatting before publishing.

## Preview locally

No build step is required. From this folder, run any small static server, for example:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Connect Cal.com

1. Create three Cal.com event types: clinic appointment, online consultation and patient follow-up.
2. Connect the Cal.com account to Dr. Santosh's Google Calendar.
3. Enable Google Meet for the online-consultation event only.
4. Set availability, booking notice, buffers, time zone (`Asia/Kathmandu`) and confirmation messages.
5. Open `site-config.js` and add the three Cal.com paths:

```js
calLinks: {
  clinic: "your-cal-username/clinic-appointment",
  online: "your-cal-username/online-consultation",
  followup: "your-cal-username/patient-follow-up",
}
```

Until links are set, every booking button offers phone, WhatsApp and email contact routes; live availability is not shown yet.

Keep booking questions minimal. Ask only for data needed to schedule and safely identify the patient. Do not ask patients to upload reports to GitHub Pages, ordinary email or WhatsApp.

## Publish with GitHub Pages

1. The `drghimiresantosh.github.io` repository already exists. This working folder has no `.git` history, so clone the existing repository first, copy only the public site files into that clone, review `git status --short --untracked-files=all`, then commit and push to `main`. Do not upload `resources/` or `tmp/`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the default branch and `/ (root)`, then save.
5. For the user-site repository named `drghimiresantosh.github.io`, the URL is `https://drghimiresantosh.github.io/`. Do not push from this workspace until you have reviewed the changes.

All internal paths are relative, so the site works both in a repository subpath and on a custom domain.

**Do not commit or publish the `resources/` folder.** It contains private source material, including identity and research documents. The repository's `.gitignore` excludes it for newly added files, but check `git status --short --untracked-files=all` before pushing: `.gitignore` does not untrack files that were committed earlier, and it does not protect files uploaded manually through GitHub's web interface. The public website uses only the approved portrait copy in `assets/` and text summarized from the supplied documents. The service cards use the small `assets/service-images/*.webp` copies; the large original PNG artwork is not required for the live site.

## Before public launch

- Confirm Dr. Santosh's current clinic affiliation and exact OPD schedule.
- Confirm the displayed phone, email and NMC registration number (22934).
- Update the under-review manuscript entry only after a formal journal decision; add the journal and DOI after acceptance.
- Have Dr. Santosh review the revised Nepali wording, privacy notice and disclaimer before live patient-data collection.
- Configure all Cal.com links and test confirmation messages.
- Test Google Meet creation and calendar conflict blocking.
- Replace the current CV portrait with a higher-resolution professional photograph when available.
- Add the final `.com.np` domain before generating a sitemap or sharing printed QR codes.

## Important files

- `index.html` — main website
- `styles.css` — visual design and responsive layout
- `app.js` — navigation, language switch and booking dialog
- `services.js` — the single catalog for service cards and detail pages
- `service.html` and `service-page.js` — reusable bilingual service detail page
- `articles/*.md` — approved long-form service articles and copy templates
- `site-config.js` — scheduling and contact configuration
- `privacy.html` — privacy notice
- `disclaimer.html` — medical disclaimer
- `ROADMAP.md` — prioritized development phases
