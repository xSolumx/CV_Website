# Hayden Austin — CV website

Published on GitHub Pages at https://xsolumx.github.io/CV_Website/.

## Structure

- `index.html`: semantic page content; projects, experience, skills and five CV downloads.
- `style.css`: responsive layout, keyboard focus and reduced-motion/print styles.
- `script.js`: progressively enhanced mobile navigation and optional project/technology graph.
- `cv/`: general, full-stack, ML/research, C#/.NET and Java PDFs.
- `assets/`: portrait and compact SVG favicon.
- `CV.pdf`: compatibility copy of the general CV.
- Old section pages redirect to their current anchors. `public/` contains redirects for the legacy Firebase hosting configuration.

No build or runtime dependencies. Preview the parent directory with `python3 -m http.server 8080` and open the site directory in a browser. To test the actual project prefix, serve this directory under `/CV_Website/`.

## Publishing and maintenance

GitHub Pages publishes the repository root from `main`. This repository is now the chosen CV-site destination; the separate `xSolumx.github.io` repository is not modified by this release.

Keep PDF downloads and page copy consistent. Employment dates and degree completion must come from confirmed facts. Do not infer them from commit activity. Keep client labels anonymous, preserve the live links, and omit personal location, phone number and Minecraft scale claims. Private repository source is not copied into this public website.

The original Firebase configuration and workflows are retained. Their hosting directory redirects to the Pages site rather than retaining a second, stale CV. Existing workflow credential/permission failures do not establish a Pages deployment failure.

The map is a curated set of actual project relationships, not a proficiency rating or a claim that every historical skill-tree topic has been verified. Primary content, navigation and CV links remain available without JavaScript. No third-party analytics or external font scripts are loaded.
