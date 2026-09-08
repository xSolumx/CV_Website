# Hayden Austin — CV website

Published on GitHub Pages at https://xsolumx.github.io/CV_Website/.

A static software-engineering CV and portfolio. No runtime frameworks, analytics, external fonts or build dependencies.

## Editing

Edit page content in `index.html`, styles and behaviour in `src/`, and graph context in `data/skills.json`. Run `node scripts/build-skill-map.cjs` and commit the generated assets and HTML together. CSS controls the graph layout; the script fingerprints assets and embeds graph context in one lazy module.

- `cv/`: the five reviewed CV PDFs. `CV.pdf` is the general-CV compatibility copy.
- `assets/`: generated CSS/JS, portrait and compact SVG favicon.
- `tests/skill-map.html`: responsive preview at 320, 390, 768 and 1280 px, plus animation-frame counters.
- Legacy section URLs redirect to current anchors. `public/` redirects the old Firebase host to Pages.

## Content boundaries

The user authorised replacing the historical graph with a more relevant mobile presentation. The current 19-node graph selects reviewed web, ML/research and Java/.NET work. Its 21 edges connect fields to tools, then techniques and practice. It is not a proficiency score, a prerequisite syllabus, or a complete inventory of every repository. Some private repositories remain unavailable to the connection.

The graph reflows into vertical branches on a narrow screen. It uses ordinary HTML buttons, native page scrolling and SVG paths measured from the layout. There is no search, canvas, pan/zoom, simulated layout, icon download or animation loop. Context appears within the selected branch. All labels and project links are available without JavaScript. Connections load only on expansion and update on layout changes/selection; pending frames stop while hidden or offscreen.

Employment dates and degree completion must come from confirmed facts, not commit activity. Keep anonymous client labels and live application links. Omit location, phone and Minecraft scale/revenue claims. Do not copy private source into this public repository. Keep coursework and prototypes identified.

## Deployment and verification

GitHub Pages publishes the root of `main`. The separate `xSolumx.github.io` repository is not modified. Existing Firebase configuration/functions/workflows are preserved; their hosting folder points visitors to this Pages site.

Check both desktop and phone widths, labels and touch-target sizes, keyboard selection, graph connections after reflow, the five PDF links, legacy links, and the no-JavaScript reading path. The responsive fixture measures callback scheduling, not physical-device FPS.
