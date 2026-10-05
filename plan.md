# VitalForge Project Portfolio — Implementation Plan

## Product scope

A complete, single-page project portfolio and project résumé website for the VitalForge health and fitness application. The site presents the existing Python/Tkinter + MySQL product as a polished case study: purpose, story, capabilities, architecture, technology, delivery timeline, outcomes, and learnings. It is a static frontend with no auth, database, or server capability required for this presentation layer.

## Design direction

- **Design movement:** Editorial bio-tech / nature-modernism: the calm precision of a product case study combined with the organic texture of a trail map and the disciplined rhythm of a training plan.
- **Core principles:** (1) Clear hierarchy over decoration, (2) organic accents anchored by a rigorous grid, (3) proof-led storytelling, (4) motion that feels like progress rather than spectacle.
- **Color philosophy:** Ink black and warm parchment keep the narrative professional and readable. Deep forest green is the signature brand color: grounded, energetic, and ownable. Moss, lime, and clay accents introduce nutrition, movement, and human warmth without becoming loud.
- **Layout paradigm:** Long-form editorial scroll with a sticky chapter rail, asymmetric split sections, oversized numerals, and occasional full-bleed dark bands. Content moves like a guided case study rather than a centered marketing grid.
- **Signature elements:** Seed-shaped VitalForge mark; thin contour-line / grid overlays; progress bars and pill-shaped chapter tags echoing trail markers and workout metrics.
- **Interaction philosophy:** Every interactive affordance should clarify where the visitor is in the story. Sticky navigation shows the active chapter; progress cues reward scroll depth; cards lift subtly on hover; no interaction exists only for novelty.
- **Animation:** GSAP timelines for hero wordmark and UI-card entrance; ScrollTrigger for chapter reveals, count-up metrics, progress line, horizontal case-study track, and parallax contour layers. Lenis provides a restrained smooth-scroll layer. Respect `prefers-reduced-motion` by disabling smoothing, scrubbed movement, and large transforms while preserving visibility.
- **Typography system:** `DM Sans` for UI and body copy, `Space Grotesk` for headings and display numbers, with `ui-monospace` for labels and metadata. Tight display tracking, generous body measure, and uppercase micro-labels create a product-resume tone.
- **Brand essence:** “A living project brief for a calmer, more capable way to build healthy habits.” Personality: grounded, precise, optimistic.
- **Brand voice:** Direct, observant, quietly confident. Example lines: “Make the invisible work measurable.” “A fitness tracker shaped around the whole day.”
- **Wordmark & logo:** The wordmark pairs a custom seed / flame SVG mark with a two-line “Vital / Forge” lockup, visually joining growth and craft.
- **Signature brand color:** Forest `#174b3a`, used as the unmistakable anchor for the brand.

## Implementation approach

- Vite + vanilla JavaScript in a small, readable `src/` structure; no framework overhead for a single narrative page.
- `src/main.js` owns semantic page content, menu behavior, active-section state, metric count-up, and animation initialization.
- `src/styles.css` owns the responsive editorial layout, theme tokens, contrast states, reduced-motion rules, and CSS-only decorative textures.
- GSAP and ScrollTrigger provide motion; Lenis provides linear-feeling inertial scroll. Both are loaded from npm and bundled locally for reliable Preview and production builds.
- `public/manus-routes.json` declares the single `/` route for Webdev route inspection.
- `app.config.ts` declares a small inline SVG data URL as the project logo so the project metadata remains self-contained and durable.
- No user-uploaded or generated images are required: the visual system uses CSS texture, SVG marks, and HTML/CSS product mockups so the site remains fast, art-directed, and grounded in the existing app’s interface language.

## Project structure

```text
vitalforge/
├── index.html                 # document shell, SEO metadata, font preconnects
├── package.json               # Vite + GSAP + Lenis toolchain
├── app.config.ts              # durable project logo metadata
├── plan.md                    # approved design and implementation plan
├── TODO.md                    # acceptance outcomes
├── public/
│   └── manus-routes.json      # declared page route set
└── src/
    ├── main.js                # content, interactions, GSAP/Lenis orchestration
    └── styles.css             # tokens, layout, responsive behavior, motion states
```

## Content grounding

The story and architecture are based on the existing repository: a Python Tkinter desktop application with reusable UI components, MySQL-backed users/profiles/tracking/workouts/food logs/goal progress, Matplotlib charts, seeded food and workout data, and demo-mode login flow.

## Runtime

The Vite dev server listens on `0.0.0.0:3000` for managed Preview. Production uses `vite build` to `dist/` and is configured as a static build.
