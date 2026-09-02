# Portfolio Refresh Specification

## Status

Approved for implementation after content confirmation. This document defines the
scope for the production site at `rohan-dev.vercel.app`.

## Goals

- Present a current, credible engineering portfolio with Amazon as the leading
  experience.
- Retain breadth across backend, full-stack, frontend, mobile, and ML work.
- Replace generic AI-portfolio styling with a restrained editorial visual system.
- Remove decorative emojis and ornamental UI that does not improve comprehension.

## Out of Scope

- Changing the contact form behavior, resume viewer, routing, theme toggle, or
  Vercel configuration.
- Replacing the site architecture or adding a component library.
- Adding unverified metrics, projects, work history, or external links.

## Content Specification

### Home

Replace the current heading with:

> Rohan Shinde

Replace the lead paragraph with:

> Software engineer building reliable systems across cloud infrastructure, data,
> and applied AI. I am pursuing an M.S. in Computer Science at USC and recently
> worked on fulfillment tooling at Amazon.

Replace the secondary paragraph with:

> My work spans Java services on AWS, data platforms for university teams, and
> production ML systems. I focus on clear engineering tradeoffs, measurable
> performance, and products people can depend on.

Keep the existing "About" and "Projects" calls to action. Do not use an emoji in
the heading or call-to-action labels.

### Experience

Render entries in this order: Amazon, USC, DMI Finance, ResoluteAI Software.
Keep the existing USC, DMI Finance, and ResoluteAI entries unless a later content
review provides revised copy.

Add this Amazon entry:

| Field | Value |
| --- | --- |
| Company | Amazon - SCOT, Fulfill to Promise |
| Role | Software Development Engineer Intern |
| Type | Internship |
| Location | Bellevue, WA |
| Period | May 2026 - Aug 2026 |

Use these highlights, with the existing timeline formatting:

1. Designed, tested, and deployed a production Model Context Protocol (MCP)
   server with four Java tools using AWS Lambda, API Gateway, DynamoDB, and S3,
   achieving over 95% unit test coverage.
2. Re-engineered retrieval of historical plans from thousands of time-stamped S3
   objects per order, replacing paginated listings with DynamoDB date-range
   queries to accelerate lookup and reduce agent-context usage.
3. Integrated the MCP with an internal troubleshooting service, accelerating
   fulfillment-decision analysis for approximately 5,000 internal users and
   reducing on-call investigation time by 70%, from 50 to 15 minutes.
4. Owned end-to-end delivery across supply-chain teams, coordinating engineers,
   PMs, and BI analysts while driving production readiness through AWS CDK and
   CloudWatch observability.

Do not include the resume's AI productivity-tools bullet on the public site. It
is less useful to a portfolio reader than the four technical and cross-functional
impact bullets above.

Use an approved Amazon logo asset only if it can be added with appropriate rights;
otherwise use the company name without a logo. Do not use a low-quality logo
download or a text substitute pretending to be a logo.

### Projects

Show these projects, ordered to lead with recent and production-oriented work:

1. QueryLens - backend and database performance.
2. RetentionPulse - full-stack ML systems.
3. FinTrackr - full-stack product engineering.
4. GridSweep - frontend quality, accessibility, and testing.
5. SmartJournal - iOS and on-device ML.
6. Autonomous Kart Racing Agent - reinforcement learning and Unity.

Remove Brain Tumor Classifier and Movie Recommender System from the rendered
project list. Their code and assets may remain in the repository unless a later
cleanup task explicitly removes them.

Keep verified GitHub and live-demo URLs. Project cards must not contain the
"Live Demo Available" globe emoji. Project modal actions must use plain text:
"View on GitHub" and "Open Live Demo".

## Visual Specification

### Typography

- Display face: Fraunces, weight 600 or 700, for the name and section headings.
- Body face: IBM Plex Sans, weights 400, 500, and 600, for body copy, controls,
  timeline data, and tags.
- Remove Inter and the current system-font stack as the primary type system.
- Keep monospace only for code-like content if it is introduced later.

### Color Tokens

Use CSS custom properties or the equivalent Tailwind theme tokens. The light mode
palette is the default visual target.

| Token | Value | Use |
| --- | --- | --- |
| `--canvas` | `#F7F4EE` | Page background |
| `--surface` | `#FFFDF8` | Cards and navigation |
| `--ink` | `#1F2521` | Main text |
| `--muted` | `#5E665F` | Supporting text |
| `--line` | `#D8D4CA` | Borders and dividers |
| `--accent` | `#A54B2A` | Links, active states, primary actions |
| `--accent-hover` | `#823A20` | Hover state |
| `--accent-soft` | `#F1E0D7` | Selected filters and quiet emphasis |

Dark mode should retain the same warm, low-saturation character: charcoal canvas,
near-black surfaces, off-white text, muted sage-gray supporting text, and a softer
terracotta accent. Do not introduce purple, neon blue, cyan, or multi-color
gradients.

### Layout and Components

- Use a flat canvas. A subtle paper-like texture is optional only when it is
  CSS-only, very low contrast, and does not impair legibility.
- Replace heavy card shadows with 1px borders and a slight background shift on
  hover. Cards must not appear to float.
- Use modest corner radii: 8px for cards and 6px for controls. Avoid large,
  rounded-pill controls except compact technology tags.
- Keep category filters, but render them as a quiet segmented control rather
  than detached status pills.
- Use clear section dividers and generous vertical spacing to create hierarchy.
- Preserve the existing responsive one-column and two-column behavior.
- Keep motion limited to section/card entry and short hover feedback. Remove
  scale-heavy interactions that feel decorative rather than informative.

### Icon and Emoji Rules

- Remove the waving-hand greeting, globe label, folder button label, and any
  other decorative emoji in visible portfolio UI.
- Keep icons only when they identify a concrete action or navigation state, such
  as the mobile menu toggle or theme control.
- Do not add sparkles, rockets, stars, generic AI icons, or decorative icon rows.

## File-Level Implementation Map

| File | Required change |
| --- | --- |
| `frontend/src/data/experience.js` | Add Amazon and preserve the other three entries. |
| `frontend/src/pages/Home.js` | Replace intro copy and remove the greeting emoji. |
| `frontend/src/pages/Projects.js` | Curate the six projects, remove the globe label, and reduce scale-heavy card motion. |
| `frontend/src/components/ProjectModal.js` | Replace emoji-labeled actions with plain labels. |
| `frontend/src/styles/index.css` | Define the typography and global color system; remove Inter and the gradient body styling. |
| `frontend/src/App.js` | Remove the gradient page wrapper and align document theme metadata with the new palette. |
| Shared components | Update legacy blue/indigo utility classes to the new token system where they remain visible. |

## Acceptance Criteria

1. Amazon is the first experience entry and exactly reflects the approved role,
   dates, location, and four public highlights.
2. USC, DMI Finance, and ResoluteAI remain visible in the experience timeline.
3. Exactly six specified projects render; Brain Tumor Classifier and Movie
   Recommender System do not render.
4. No visible decorative emoji remains in the home, project cards, or project
   modal.
5. Inter, purple/blue/cyan gradients, glow effects, and placeholder-style
   status pills are absent from the production UI.
6. Light and dark modes use the defined visual direction and retain readable
   contrast.
7. Navigation, project filtering, project modal, resume access, and contact
   form behavior continue to work.
8. The frontend production build succeeds without warnings that block deployment.
9. The refreshed site is checked at mobile and desktop widths before a push to
   `main` triggers a Vercel production deployment.

## Implementation Sequence

1. Update data and copy.
2. Establish design tokens and typography.
3. Restyle shared components and sections.
4. Validate responsive behavior, links, filtering, modal behavior, and build.
5. Present the local result for review before committing or pushing.
