# Hayden Austin — CV website

Published on GitHub Pages at https://xsolumx.github.io/CV_Website/.

A static software-engineering CV and portfolio. No runtime frameworks, analytics, external fonts or build dependencies.

## Editing

Edit page content in `index.html`, styles and behaviour in `src/`, and graph context in `data/skills.json`. Run `node scripts/build-skill-map.cjs` and commit the generated assets and HTML together. CSS controls the graph layout; the script generates its static HTML from the same data, validates exactly 51 connected nodes, fingerprints assets, retains older fingerprints for cached pages, and embeds graph context in one lazy module. Do not hand-edit the generated SKILL_BOARD block.

- `cv/`: the five reviewed CV PDFs. `CV.pdf` is the general-CV compatibility copy.
- `assets/`: generated CSS/JS, portrait, cropped public-application screenshots and compact SVG favicon.
- `tests/skill-map.html`: responsive preview at 320, 390, 768 and 1280 px, plus animation-frame counters.
- Legacy section URLs redirect to current anchors. `public/` redirects the old Firebase host to Pages.

## Content boundaries

The 51-node graph contains one engineering hub, three areas and 47 capabilities. Its 61 relationships include eight explained connections between areas. These cross-area lines appear only when an endpoint is selected. Connections describe conceptual or implementation relationships, not proficiency ratings or prerequisites. The areas are Full-stack & CMS, ML & research engineering, and Software & systems.

Three columns on desktop become three stacked branches with two-column skill rows on phones. Native page scrolling, large touch targets and ordinary HTML buttons keep interaction straightforward. At every width, details appear immediately after the selected row. Related-skill buttons move to the real node with keyboard focus; Escape or the close button clears selection. Public source links are optional; private application source stays private. Coursework and prototypes are labelled explicitly.

No search, canvas, force simulation, pan/zoom, icon downloads or animation loop. CSS owns layout; one SVG layer measures node positions in a batched pass. The graph module loads only on expansion. Animation callbacks are scheduled only for layout/selection changes, and stop when collapsed, offscreen or in a hidden tab. Labels and project links remain readable without JavaScript.

The September 2026 expansion rechecked the complete, non-truncated trees of all 13 accessible repositories. Twelve trees matched the previous source audit; the portfolio was the changed repository. Current key implementation files and both notebook sources were reviewed against that inventory. Reading source does not establish individual authorship, current test success or scientific claims. The latest pass also inspected ML research programmes, learned retrieval, compiler dispatch, profiling and training code, alongside both CMS implementations. Earlier CV material remains valid context; inaccessible repositories do not imply absent skills. The latest content pass defers the three inaccessible project narratives at the user’s request and uses the accessible classification coursework for applied ML. See `docs/skill-evidence.md` for the capability map and source boundaries.

Employment dates and degree completion must come from confirmed facts, not commit activity. Keep anonymous client labels and live application links. Omit location, phone and Minecraft scale/revenue claims. Do not copy private source into this public repository. Keep coursework and prototypes identified.

## Deployment and verification

GitHub Pages publishes the root of `main`. The separate `xSolumx.github.io` repository is not modified. Existing Firebase configuration/functions/workflows are preserved; their hosting folder points visitors to this Pages site.

Check both desktop and phone widths, labels and touch-target sizes, keyboard selection, graph connections after reflow, the five PDF links, legacy links, and the no-JavaScript reading path. The responsive fixture measures callback scheduling, not physical-device FPS.

## Portfolio presentation

Project narratives distinguish the public application, the contribution and engineering details. Screenshots are crops of the public equipment and nursery catalogues captured on 8 September 2026; company headers, location and contact blocks are excluded. They show the public UI, not private admin screens. The research figure presents questions about memory, model structure and execution cost, not benchmark results. Applied ML is separately represented by the classification coursework, with its scope and evaluation limits identified. Career dates and degree wording remain as previously supplied.

The content pass distinguishes project purpose, contribution and practical capabilities. No business growth or time savings are inferred from source. Career dates, role labels, degree wording and the downloadable PDFs are unchanged.

The final presentation pass puts project purpose and contribution before the supporting image in document/mobile order, retains paired desktop layouts, and places graph context beside its selected row at every width. Heading levels distinguish the ML group from its individual projects. Without JavaScript, the expanded navigation remains in normal document flow.

## CV and project update — 9 September 2026

Selected work now includes an agronomy field-record application, audio-enhanced EPUB authoring, a strategy-game analytics dashboard and IntegerSpark. Development status is explicit; private source links and operational data are not published. The graph remains 51 nodes across three areas, with 65 relationships.

Rebuild the five role-specific PDFs with `python scripts/build-cvs.py` (ReportLab and DejaVu Sans required). Content lives in `data/cv-variants.json`. Copy the general PDF to `CV.pdf` for the compatibility link. Run `node scripts/build-skill-map.cjs` after changing page styles or graph data.
