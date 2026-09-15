# Dr. Santosh Ghimire — website

A privacy-conscious, bilingual-ready static website for an Internal Medicine consultant physician in Butwal, Nepal. It is intentionally dependency-free so it can be hosted free on GitHub Pages and later served through a `.com.np` domain via Cloudflare.

## Current release (Phase 1)

- Professional home page with the complete education, experience and training record supplied in the CV
- Research section distinguishing the completed MD thesis from a manuscript currently under review
- English/Nepali switch on the main page, privacy notice and medical disclaimer
- Eight core internal-medicine services with an expandable, icon-led full list
- Mobile-first call, booking and follow-up actions
- Clinic appointment, online consultation and follow-up pathways
- Cal.com-ready scheduling with phone, WhatsApp and email fallback
- Privacy notice and medical disclaimer
- Semantic HTML, keyboard support, reduced-motion support and basic SEO

The health library is deliberately labelled “coming soon.” Medical articles should not be presented as doctor-reviewed until Dr. Santosh has approved them.

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

1. Create a GitHub repository and commit only the public site files to its default branch. Do not upload `resources/` or `tmp/`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the default branch and `/ (root)`, then save.
5. GitHub will provide a URL such as `https://username.github.io/repository-name/`.

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
- `site-config.js` — scheduling and contact configuration
- `privacy.html` — privacy notice
- `disclaimer.html` — medical disclaimer
- `ROADMAP.md` — prioritized development phases
