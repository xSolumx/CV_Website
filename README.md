# Hayden Austin — CV website

Published on GitHub Pages at https://xsolumx.github.io/CV_Website/.

## Structure

- `index.html`: semantic page content; projects, experience, skills and five CV downloads.
- `assets/site.*.css`: responsive layout, keyboard focus and reduced-motion/print styles.
- `assets/site.*.js`: progressively enhanced mobile navigation and optional project/technology graph.
- `cv/`: general, full-stack, ML/research, C#/.NET and Java PDFs.
- `assets/`: portrait and compact SVG favicon.
- `CV.pdf`: compatibility copy of the general CV.
- Old section pages redirect to their current anchors. `public/` contains redirects for the legacy Firebase hosting configuration.

No build or runtime dependencies. Preview the parent directory with `python3 -m http.server 8080` and open the site directory in a browser. To test the actual project prefix, serve this directory under `/CV_Website/`.

## Publishing and maintenance

GitHub Pages publishes the repository root from `main`. This repository is now the chosen CV-site destination; the separate `xSolumx.github.io` repository is not modified by this release.

Keep PDF downloads and page copy consistent. Employment dates and degree completion must come from confirmed facts. Do not infer them from commit activity. Keep client labels anonymous, preserve the live links, and omit personal location, phone number and Minecraft scale claims. Private repository source is not copied into this public website.

The original Firebase configuration and workflows are retained. Their hosting directory redirects to the Pages site rather than retaining a second, stale CV. Existing workflow credential/permission failures do not establish a Pages deployment failure.

The full skill graph restores all 58 original topics, 235 distinct directed connections and 70 prerequisite references from `xSolumx/xSolumx.github.io` at `1c4a874`. Topic links describe relationships, not proficiency ratings. Primary content, navigation and CV links remain available without JavaScript. No third-party analytics or external font scripts are loaded.


## Full skill graph

Edit `data/skills.json` and `src/`, then run `node scripts/build-skill-map.cjs`. The build assigns deterministic coordinates and fingerprints the browser assets. It bundles the graph data and renderer into a single module, fetched only when the graph is opened. Commit the generated assets and updated HTML together. CV files are unaffected.

The source had 247 connection records representing 235 distinct directed endpoint pairs. All 235 are preserved, along with the 70 prerequisite references. Reciprocal/overlapping relationships share a visual segment: there are 236 unique undirected paths after prerequisite links are included. The renderer batches these into one background SVG path and one selected-connection path.

Rendering has no simulation, icon images, glow filters, timers or idle animation. Pointer events coalesce into one pending animation frame, updating only the SVG viewBox. Closing the graph, hiding the document or scrolling it offscreen cancels pending work. Mobile page scrolling remains native until the user explicitly enables Move map; that mode supports pointer pan and pinch. Area focus, search, zoom controls and a full text list provide alternatives to targeting small overview nodes.

`tests/skill-map.html` is a manual responsive fixture with 320/390/768/1280 px viewports. It instruments animation-frame scheduling inside the embedded page and can submit a burst of 20 zoom requests. Its counters are not FPS or a physical-device benchmark. Check that the graph is absent before expansion, appears once on expansion, remains idle afterwards, coalesces burst requests, and stops on collapse. Test search, area focus, selection, arrow-key navigation, Fit all and mobile scrolling. Native touch still merits a real-device check.
