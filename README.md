# Hayden Austin — CV website

Published on GitHub Pages at https://xsolumx.github.io/CV_Website/.

A static software-engineering CV and portfolio. No runtime frameworks, analytics, external fonts or build dependencies.

## Editing

Edit page content in `index.html`, styles and behaviour in `src/`, and graph context in `data/skills.json`. Run `node scripts/build-skill-map.cjs` and commit the generated assets and HTML together. CSS controls the graph layout; the script generates its static HTML from the same data, validates exactly 51 connected nodes, fingerprints assets and embeds graph context in one lazy module. Do not hand-edit the generated SKILL_BOARD block.

- `cv/`: the five reviewed CV PDFs. `CV.pdf` is the general-CV compatibility copy.
- `assets/`: generated CSS/JS, portrait, cropped public-application screenshots and compact SVG favicon.
- `tests/skill-map.html`: responsive preview at 320, 390, 768 and 1280 px, plus animation-frame counters.
- Legacy section URLs redirect to current anchors. `public/` redirects the old Firebase host to Pages.

## Content boundaries

The 51-node graph contains one engineering hub, three areas and 47 capabilities. Its 61 relationships include eight explained connections between areas. These cross-area lines appear only when an endpoint is selected. Connections describe conceptual or implementation relationships, not proficiency ratings or prerequisites. The areas are Full-stack & CMS, ML & research engineering, and Software & systems.

Three columns on desktop become three stacked branches with two-column skill rows on phones. Native page scrolling, large touch targets and ordinary HTML buttons keep interaction straightforward. On phones, details appear after the selected row. Related-skill buttons move to the real node with keyboard focus; Escape or the close button clears selection. Public source links are optional; private application source stays private. Coursework and prototypes are labelled explicitly.

No search, canvas, force simulation, pan/zoom, icon downloads or animation loop. CSS owns layout; one SVG layer measures node positions in a batched pass. The graph module loads only on expansion. Animation callbacks are scheduled only for layout/selection changes, and stop when collapsed, offscreen or in a hidden tab. Labels and project links remain readable without JavaScript.

The September 2026 expansion rechecked the complete, non-truncated trees of all 13 accessible repositories. Twelve trees matched the previous source audit; the portfolio was the changed repository. Current key implementation files and both notebook sources were reviewed against that inventory. Reading source does not establish individual authorship, current test success or scientific claims. The latest pass also inspected ML research programmes, learned retrieval, compiler dispatch, profiling and training code, alongside both CMS implementations. Earlier CV material and user-described language, plant-vision and weather-tooling projects remain valid context; inaccessible repositories do not imply absent skills. See `docs/skill-evidence.md` for the capability map and source boundaries.

Employment dates and degree completion must come from confirmed facts, not commit activity. Keep anonymous client labels and live application links. Omit location, phone and Minecraft scale/revenue claims. Do not copy private source into this public repository. Keep coursework and prototypes identified.

## Deployment and verification

GitHub Pages publishes the root of `main`. The separate `xSolumx.github.io` repository is not modified. Existing Firebase configuration/functions/workflows are preserved; their hosting folder points visitors to this Pages site.

Check both desktop and phone widths, labels and touch-target sizes, keyboard selection, graph connections after reflow, the five PDF links, legacy links, and the no-JavaScript reading path. The responsive fixture measures callback scheduling, not physical-device FPS.

## Portfolio presentation

Project narratives distinguish the public application, the contribution and engineering details. Screenshots are crops of the public equipment and nursery catalogues captured on 8 September 2026; company headers, location and contact blocks are excluded. They show the public UI, not private admin screens. The research figure is a conceptual model-to-evaluation workflow, not a benchmark chart. Career dates and degree wording remain as previously supplied.
