# REDESIGN_PLAN

## Current Problems Found

- Homepage used an outdated structure with weak hierarchy and inconsistent card markup.
- The original project grid used a fixed layout that did not scale well for mobile and tablet sizes.
- `script.js` assumed modal elements existed everywhere and could throw errors on pages without a gallery.
- Many project pages duplicated inline lightbox scripts and duplicated inline layout styles.
- External links were inconsistent and often missed `rel="noopener noreferrer"` when opening in a new tab.
- Text quality was inconsistent across the portfolio, with grammar issues and unclear technical phrasing.
- Pong pages lacked viewport metadata and had mixed-language UI copy.
- Footer year and metadata were inconsistent across pages.

## Proposed Structure

- Fully static site architecture preserved:
  - `index.html` as homepage
  - Separate HTML file per project
  - One shared `style.css`
  - One shared `script.js`
- Homepage rebuilt into:
  - Hero section
  - About section
  - Skills section
  - Featured projects strip
  - Grouped project sections
  - Contact section
- Project pages normalized to a shared layout:
  - Overview
  - My Role
  - Key Features
  - Technologies Used
  - Gallery
  - Video (when available)
  - Links
  - Notes (optional)

## Content Improvements Made

- Rewrote descriptions to be concise, technical, and suitable for junior game developer applications.
- Standardized project statuses using only:
  - `Finished`
  - `In Development`
  - `Game Jam`
  - `Prototype`
  - `Thesis`
- Replaced vague narrative engine wording with clear terminology:
  - custom command-based dialogue and narrative scripting system
  - branching flow
  - player choices
  - scene control
  - event-driven progression
- Improved image alt text quality to be descriptive and contextual.
- Updated copy and metadata on Pong pages while preserving gameplay logic.

## Files Changed

- `style.css`
- `script.js`
- `index.html`
- `project1.html`
- `project2.html`
- `project3.html`
- `project4.html`
- `project5.html`
- `project6.html`
- `project7.html`
- `project8.html`
- `project9.html`
- `project10.html`
- `project11.html`
- `project12.html`
- `project13.html`
- `project14.html`
- `project16.html`
- `project17-engineering-thesis.html`
- `Pong.html`
- `PongHazard.html`

## Remaining Optional Improvements

- Add dark mode with CSS variable switching.
- Add an optional project-tag filter UI while keeping static fallback behavior.
- Add optional `og:image` per project for richer social previews.
- Add print-optimized styles for CV or recruiter sharing.
- Add bilingual content (English and Polish) if needed.

## GitHub Pages Testing Checklist

- Open `index.html` via `file://` and verify no JavaScript errors.
- Verify all project card links open the expected pages.
- Verify all galleries open with shared lightbox behavior.
- Verify pages without galleries do not produce script errors.
- Verify `Escape` closes the lightbox.
- Verify `target="_blank"` links include `rel="noopener noreferrer"`.
- Verify no `type="module"` script usage.
- Verify no references to `project15.html`.
- Verify all pages include:
  - `lang="en"`
  - favicon link
  - canonical URL
- Verify responsive behavior near 375px, 768px, and 1440px.
- Verify Pong pages still run with original gameplay behavior.
- Verify no files were modified inside `images/`, `.pdf` assets, `assets.zip`, or `.github/workflows/static.yml`.
