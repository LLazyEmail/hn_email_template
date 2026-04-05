# hn_email_template

> Plain-JavaScript functions for generating production-ready HTML email templates — built for the [Hackernoon](https://hackernoon.com) newsletter pipeline and the broader [`markdown-to-email`](https://github.com/atherdon/markdown-to-email) project.

[![Node.js CI](https://github.com/LLazyEmail/hn_email_template/actions/workflows/node.js.yml/badge.svg)](https://github.com/LLazyEmail/hn_email_template/actions/workflows/node.js.yml)
[![ESLint](https://github.com/LLazyEmail/hn_email_template/actions/workflows/eslint.yml/badge.svg)](https://github.com/LLazyEmail/hn_email_template/actions/workflows/eslint.yml)
[![CodeQL](https://github.com/LLazyEmail/hn_email_template/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/LLazyEmail/hn_email_template/actions/workflows/codeql-analysis.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Architecture & How It Works](#architecture--how-it-works)
4. [Tech Stack](#tech-stack)
5. [Repository Structure](#repository-structure)
6. [Prerequisites](#prerequisites)
7. [Installation & Setup](#installation--setup)
8. [Configuration](#configuration)
9. [Usage](#usage)
10. [Workflow](#workflow)
11. [Development](#development)
12. [Testing & Validation](#testing--validation)
13. [Building & Bundling](#building--bundling)
14. [Deployment & Publishing](#deployment--publishing)
15. [Troubleshooting / FAQ](#troubleshooting--faq)
16. [Security & Privacy Notes](#security--privacy-notes)
17. [Contributing](#contributing)
18. [Roadmap](#roadmap)
19. [Related Resources & Articles](#related-resources--articles)
20. [Recent Changes](#recent-changes)
21. [About the `outerTemplate` Module](#about-the-outertemplate-module)
22. [Architecture Decisions](#architecture-decisions)
23. [Legacy README](#legacy-readme)
24. [License](#license)
25. [Acknowledgements](#acknowledgements)

---

## Overview

`hn_email_template` is a modular JavaScript library that assembles complete, production-grade HTML email templates from small, composable function-based components.

### Problem & Motivation

HTML email markup is notoriously fragile. It relies on HTML4-era table-based layouts, inline styles, and a maze of compatibility quirks across email clients. When the Hackernoon engineering team needed to automate newsletter generation in the [`markdown-to-email`](https://github.com/atherdon/markdown-to-email) pipeline, maintaining monolithic template strings became unsustainable.

This project solves that by:
- Breaking a single large HTML template into small, independently-testable **function components**
- Separating **outer structure** (head, body wrapper, footer) from **inner content** (articles, sponsor blocks, etc.)
- Providing a clear display pipeline so each section can be rendered and previewed in isolation
- Gradually migrating toward a TypeScript / NX monorepo structure for long-term maintainability

---

## Features

| Feature | Details |
|---|---|
| **Composable components** | Each email section (head, body, footer, main, content) is a standalone JS function |
| **Display pipeline** | A `runDisplayPipeline` abstraction maps raw data → validated model → rendered HTML string |
| **Input validation** | Structured validation rules throw descriptive errors on missing required fields |
| **Multiple output formats** | Bundled as CJS, ES module, and IIFE via Rollup |
| **Jest test suite** | 13 unit tests + integration tests covering every component and display section |
| **ESLint + Prettier** | Enforced code style with pre-commit hooks via Husky and lint-staged |
| **Renovate bot** | Automated dependency update PRs |
| **NX / TypeScript workspace** | Active TypeScript migration in the `hackernoon/` directory |
| **Gitpod ready** | One-click cloud development environment via `.gitpod.yml` |

---

## Architecture & How It Works

The template is split into two conceptual layers:

```
┌─────────────────────────────────────────────────────────┐
│                   Full Email Template                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐  │
│  │   Head   │  │   Main   │  │   Body   │  │ Footer │  │
│  └──────────┘  └──────────┘  └──────────┘  └────────┘  │
│                     Outer Template                        │
├─────────────────────────────────────────────────────────┤
│                     Inner Content                         │
│  ┌─────────────┐  ┌──────────┐  ┌───────────────────┐  │
│  │  Articles   │  │ Sponsors │  │   Preview Text     │  │
│  └─────────────┘  └──────────┘  └───────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Display Pipeline

Each section follows the same three-step pipeline defined in `Work/src/display/core/`:

```
Raw Input Data
     │
     ▼
  mapper.js   ←  maps raw input to a normalised internal structure
     │
     ▼
  model.js    ←  validates the structure; throws on missing required fields
     │
     ▼
  display.js  ←  renders the HTML string from the validated model
     │
     ▼
 HTML String
```

`createDisplaySection.js` wraps this three-step pattern, and `runDisplayPipeline.js` orchestrates running it across all sections.

### Template Rendering

`renderTemplate('hn', { string, data })` in `sub-modules/outerTemplate/src/templates/hn.js` is the primary public API. It accepts a content string (or a `{ string, data }` object) and wraps it in the full Hackernoon outer template, producing a ready-to-send HTML email string.

---

## Tech Stack

| Tool / Library | Role |
|---|---|
| **Node.js** | Runtime |
| **Rollup** | Module bundler (CJS, ES, IIFE outputs) |
| **Babel** | ES2015+ transpilation |
| **Jest** | Unit and integration testing |
| **ESLint** | Static analysis |
| **Prettier** | Code formatting |
| **Husky + lint-staged** | Pre-commit hooks |
| **Renovate** | Automated dependency updates |
| **NX** | Monorepo tooling (TypeScript migration workspace) |
| **Lodash** | Utility helpers |
| **atherdon-newsletter-js-layouts-*** | Published npm packages for body, typography, misc layouts |
| **email-template-object** | Shared email template object model |
| **html-typography-tags** | HTML typography helpers |

---

## Repository Structure

> **Note:** `Work/` is the current runtime root and is **transitional/deprecated**.
> New top-level directories (`content/`, `scripts/`, `src/`, `tests/`, `generated/`,
> `docs/`) have been introduced as part of the reorganization. See
> [Target Architecture](#target-architecture) and [`docs/architecture.md`](docs/architecture.md).

```
hn_email_template/
├── .deepsource.toml          # DeepSource code quality config
├── .gitignore
├── .gitpod.yml               # Gitpod cloud dev environment config
├── package-lock.json         # Root lockfile
├── README.md                 # This file
├── README.old.md             # Preserved legacy README (historical reference)
│
├── .github/
│   └── workflows/
│       ├── codeql-analysis.yml   # CodeQL security scanning
│       ├── eslint.yml            # ESLint CI check
│       ├── node.js.yml           # Node.js CI (build & test)
│       └── npm-publish.yml       # NPM publish workflow
│
├── content/                  # All newsletter content datasets (new canonical location)
│   ├── content1.js           # Canonical template dataset
│   ├── content2.js           # HN JSON-authored variant
│   ├── content3.js           # Markdown-derived variant
│   └── data-markdown.js      # Body content blocks array
│
├── scripts/                  # Generation scripts (new canonical location)
│   └── generate-template.js  # Top-level template generator
│
├── src/                      # Rendering/business logic (migration target from Work/src/)
│   └── README.md             # See for migration status
│
├── tests/                    # Test suites (migration target from Work/tests/)
│   └── README.md             # See for migration status
│
├── generated/                # Generated HTML outputs (gitignored)
│
├── docs/                     # Project documentation & ADRs
│   ├── README.md
│   └── architecture.md       # Target architecture & baseline behavior
│
├── Work/                     # ⚠️ DEPRECATED transitional runtime root
│   │                         # Do not add new core logic here. Will be removed
│   │                         # once the top-level migration is complete.
│   ├── package.json          # Package metadata & scripts (v3.9.0)
│   ├── jest.config.js        # Jest configuration
│   ├── rollup.config.js      # Rollup bundler configuration
│   ├── renovate.json         # Renovate bot config
│   │
│   ├── bash/
│   │   ├── lint-fix.sh           # Run ESLint auto-fix
│   │   ├── tests.sh              # Run test suite
│   │   └── update-packages.sh    # Update npm packages
│   │
│   ├── scripts/
│   │   └── generate-template.js  # ⚠️ deprecated — use scripts/ at project root
│   │
│   ├── src/
│   │   ├── index.js              # Public API exports
│   │   ├── config.js             # Shared constants (contact URL, mailing address)
│   │   ├── data-markdown.js      # Body content from content-from-markdown.html (lines 30–225)
│   │   ├── factory.js            # Display factory class
│   │   ├── methods.js            # Top-level print* helper functions
│   │   │
│   │   ├── components/           # Low-level HTML component functions
│   │   │
│   │   ├── templates/            # Template rendering system
│   │   │
│   │   └── display/              # Display pipeline (mapper → model → display)
│   │
│   └── tests/
│       ├── unit/                 # Unit test files (one per component/section)
│       └── integration/          # End-to-end and integration tests
│
├── files/                    # ⚠️ DEPRECATED — re-exports to content/ (backward compat)
│   ├── data.js               # → re-exports content/content1.js
│   ├── data-hn.js            # → re-exports content/content2.js
│   └── data-from-markdown.js # → re-exports content/content3.js
│
├── sub-modules/              # Standalone reusable sub-packages
│   ├── Typography/           # Typography HTML rendering module
│   ├── innerComponents/      # Inner email components module
│   ├── Miscellaneous/        # Miscellaneous utilities
│   └── outerTemplate/        # Outer template module
│
├── packages/                 # Published npm packages
│   ├── template-engine/
│   ├── template-presets-hn/
│   └── template-runtime-display/
│
└── archive/                  # Archived legacy files (historical reference)
```

---

## Target Architecture

> See [`docs/architecture.md`](docs/architecture.md) for the full migration plan.

The project is being reorganized toward a clean top-level structure:

| Directory | Purpose |
|-----------|---------|
| `content/` | All newsletter content datasets (canonical location) |
| `src/` | Rendering and business logic (migrating from `Work/src/`) |
| `scripts/` | Generation and tooling scripts (migrated from `Work/scripts/`) |
| `tests/` | All test suites (migrating from `Work/tests/`) |
| `generated/` | Generated HTML outputs (gitignored) |
| `docs/` | Project documentation and ADRs |

`Work/` will remain as a transitional runtime root until the migration is complete,
then be removed. No new core logic should be added to `Work/`.

---

## Baseline Behavior

Before the reorganization, generation used `files/data-hn.js` as the default
content source and output to `Work/generated/`. These paths are still valid
(via backward-compat re-exports in `files/`), but the canonical commands are now:

```bash
cd Work
# Generate using the canonical HN dataset (content2):
npm run generate:template -- --data=../content/content2.js --out=generated/hn.html

# Generate using the markdown-derived dataset (content3):
npm run generate:template -- \
  --data=../content/content3.js \
  --content=src/content-from-markdown.html \
  --out=generated/hn-markdown.html
```

Or using the new top-level script from the project root:

```bash
node scripts/generate-template.js --data=content/content2.js --out=generated/hn.html
```

Run tests to verify behavior is unchanged:

```bash
cd Work && npm test
```

---

## Prerequisites

- **Node.js** >= 18 (18.x or 20.x; these are the versions tested in CI)
- **npm** >= 7 (workspaces support)
- **Git**

> The NX workspace under `hackernoon/` additionally requires **TypeScript** >= 4.9 (installed as a dev dependency).

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/LLazyEmail/hn_email_template.git
cd hn_email_template
```

### 2. Install dependencies for the main working package

```bash
cd Work
npm install
```

### 3. (Optional) Install NX workspace dependencies

```bash
cd hackernoon
npm install
```

### 4. (Optional) Gitpod one-click environment

Open the repo in [gitpod.io](https://gitpod.io):

```
https://gitpod.io/#https://github.com/LLazyEmail/hn_email_template
```

The `.gitpod.yml` is pre-configured to install dependencies and start the dev watcher automatically.

---

## Configuration

All shared constants live in `Work/src/config.js`:

```js
export const config = {
  contact: 'https://sponsor.hackernoon.com/newsletter?ref=noonifications.tech',
  mailingAddress: 'PO Box 2206, Edwards CO, 81632, U.S.A.',
  unsubscribe: '#',  // Set to your real unsubscribe URL in production
};
```

There are **no required environment variables** for local development. If you extend the project (e.g., to send emails or integrate with an API), consider adding a `.env` file and using a library like `dotenv` — but make sure to add it to `.gitignore` and never commit secrets.

---

## Usage

### Rendering a full template

```js
import { renderTemplate } from 'atherdon-old-newsletter-js-outertemplate';
// or from local source:
// import { renderTemplate } from 'atherdon-newsletter-js-layouts-outertemplate';

// Render with a plain HTML string as body content
const html = renderTemplate('hn', '<p>Hello, world!</p>');

// Render with structured data
const html = renderTemplate('hn', {
  string: '<p>Hello, world!</p>',
  data: { title: 'My Newsletter Issue #1' },
});

console.log(html); // Full HTML email string ready to send
```

### Printing individual sections

```js
import { printMain, printFooter, printBody } from 'atherdon-old-newsletter-js-outertemplate';

const mainHtml   = printMain();    // Renders the main outer wrapper
const footerHtml = printFooter();  // Renders the footer section
const bodyHtml   = printBody();    // Renders the body section
```

### Validation errors

The display pipeline throws descriptive errors on invalid input, for example:

```js
// Missing required `title`
// → Error: `title` is a required option for `renderTemplate`

// Missing required `bodyContent`
// → Error: `bodyContent` is a required option for `renderTemplate`
```

### Markdown-derived content data

`content/data-markdown.js` (previously `Work/src/data-markdown.js`) contains the
newsletter body content extracted from `Work/src/content-from-markdown.html`
(lines 30–225) as an ordered JavaScript array of typed blocks. Each block has a
`type` field (`"heading"`, `"image"`, or `"text"`) plus type-specific fields
(`html`, `src`/`link`/`alt`). The array preserves the original document order
and can be used for rendering comparison, content inspection, or as a data source
for custom renderers.

To generate a full email template using the markdown-derived data and content:

```bash
cd Work
npm run generate:template -- \
  --data=../content/content3.js \
  --content=src/content-from-markdown.html \
  --out=generated/hn-markdown.html
```

---

## Workflow

The intended end-to-end workflow for the Hackernoon newsletter pipeline is:

```
Markdown article content
         │
         ▼
  markdown-to-email  (sibling repository)
         │  converts Markdown → HTML inner content string
         ▼
  renderTemplate('hn', { string: innerContentHtml })
         │  wraps inner content in the full outer template
         ▼
  Full HTML email string
         │
         ▼
  Email service provider  (Mailchimp, SendGrid, etc.)
```

The separation between **inner content** and **outer template** means that the two parts can evolve independently, and the outer template can be tested without any real article content.

---

## Development

### Running the dev watcher (Rollup)

```bash
cd Work
npm run dev
```

This starts Rollup in watch mode — any change to a source file triggers an incremental rebuild.

### Linting

```bash
# Check for lint errors
npm run lint

# Auto-fix lint errors
npm run lint:fix
```

Or use the convenience shell scripts:

```bash
bash bash/lint-fix.sh
```

### Formatting

```bash
# Check formatting
npm run format:check

# Apply formatting
npm run format
```

### Pre-commit hooks

[Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged) are configured to run ESLint + Prettier automatically on every `git commit` for files under `src/**/*.js`.

---

## Testing & Validation

Tests live in `Work/tests/` and are split into unit and integration suites.

### Run all tests

```bash
cd Work
npm test
# or
bash bash/tests.sh
```

### Run only unit tests

```bash
npm run test:unit
```

### Run only integration tests

```bash
npm run test:integration
```

### Run a specific test file

```bash
npm run test:template
# runs tests/integration/template.test.js
```

### Test structure

| Directory | Contents |
|---|---|
| `tests/unit/` | 13 files — one per component / display section |
| `tests/integration/` | End-to-end template rendering test |

Key unit test files:
- `mainComponent.unit.test.js`
- `headComponent.unit.test.js`
- `body.unit.test.js`
- `footer.unit.test.js`
- `displayHead.unit.test.js`, `displayBody.unit.test.js`, `displayFooter.unit.test.js`, `displayMain.unit.test.js`, `displayContent.unit.test.js`
- `templates.unit.test.js`
- `validation.unit.test.js`
- `createDisplaySection.unit.test.js`

---

### Multi-fixture comparison renders

The repository ships a small set of **content fixtures** under `Work/fixtures/` — JSON files that each represent a different newsletter payload. Running the fixture generator renders the same template for every fixture and writes one HTML file per fixture to `Work/generated/fixtures/`.

| Fixture | Description |
|---|---|
| `default.json` | Full payload matching the default `src/data.js` (title, preview, ads, images) |
| `minimal.json` | Bare-minimum payload — title and preview only, no ads or images |
| `no-images.json` | Ads included but no images — validates layout with a missing images array |

#### Run fixture renders locally

```bash
cd Work
npm run generate:fixtures
# outputs: generated/fixtures/default.html  minimal.html  no-images.html
```

Open any of the generated files in a browser and compare side-by-side.

#### Add a new fixture

1. Create a new JSON file in `Work/fixtures/`, e.g. `Work/fixtures/my-variant.json`:

```json
{
  "title": "My Variant Title",
  "preview": "Short preview text for this variant.",
  "ads": [],
  "images": []
}
```

2. Run `npm run generate:fixtures` — the new fixture is picked up automatically (no code changes needed).

3. Open `Work/generated/fixtures/my-variant.html` in a browser to review.

#### CI artifact

The `Node.js CI` workflow runs `npm run generate:fixtures` on every push/PR (Node 20 only) and uploads all generated HTML files — including fixture renders — as a single artifact named **`generated-html-comparison`**. To download it:

1. Open the workflow run in the GitHub Actions UI.
2. Scroll to **Artifacts** at the bottom of the run summary.
3. Click **`generated-html-comparison`** to download the ZIP.
4. Unzip and open the `.html` files in a browser to compare renders across fixtures.

The CI job summary also lists every fixture that was rendered in that run.

---

## Building & Bundling

The project uses [Rollup](https://rollupjs.org/) to produce three output formats from `Work/src/index.js`:

| Format | Output file | Use case |
|---|---|---|
| CommonJS | `dist/index.cjs.js` | Node.js `require()` |
| ES module | `dist/index.es.js` | Modern bundlers (webpack, Vite) |
| IIFE | `dist/index.iife.js` | Direct `<script>` tag in browser |

```bash
cd Work
npm run build        # clean + bundle all formats
npm run bundle       # bundle only (no clean step)
npm run clean        # remove dist/ and coverage/
```

---

## Deployment & Publishing

The package is published to **npm** as `atherdon-old-newsletter-js-outertemplate`.

Publishing is automated via the `.github/workflows/npm-publish.yml` workflow, which triggers on releases. To manually publish:

```bash
cd Work
npm publish
```

> The `publishConfig` in `package.json` sets `"access": "public"` so the package is published publicly.

---

## Troubleshooting / FAQ

### `Cannot find module` errors after cloning

Make sure you have installed dependencies inside the `Work/` directory specifically:

```bash
cd Work && npm install
```

The root `package-lock.json` is separate from `Work/package-lock.json`.

### Husky hooks not running

If you cloned the repo in a CI environment or with `--no-verify`, Husky may not be initialized. Run:

```bash
cd Work && npm run prepare
```

The `prepare` script is CI-aware and will skip Husky when the `CI` environment variable is set.

### ESLint plugin resolution errors

ESLint plugins are resolved relative to the `Work/` directory. Always run `eslint` from `Work/`, or use the provided npm scripts / shell scripts which set the correct `--resolve-plugins-relative-to` flag.

### Tests fail with Babel transform errors

Ensure you are running tests from the `Work/` directory where `jest.config.js` and the Babel preset (`babel-preset-react-app`) are installed:

```bash
cd Work && npm test
```

### How do I add a new email section?

1. Create a folder under `Work/src/display/sections/<sectionName>/` with four files: `<sectionName>.display.js`, `<sectionName>.mapper.js`, `<sectionName>.model.js`, and `index.js`.
2. Follow the mapper → model → display pattern used by existing sections.
3. Export the HTML string from `index.js` and import it in `Work/src/methods.js`.
4. Add a corresponding unit test in `Work/tests/unit/<sectionName>.unit.test.js`.

---

## Security & Privacy Notes

- **No secrets should ever be committed.** The `.gitignore` excludes `node_modules/` but you should add `.env` files to it before storing any API keys or credentials.
- The `config.unsubscribe` field defaults to `'#'` — **always replace this with a real unsubscribe URL** in production emails. Sending emails without a working unsubscribe link may violate CAN-SPAM, GDPR, and similar regulations.
- The `contact` URL in `config.js` points to a Hackernoon-specific sponsorship page — update this if you fork the project for a different newsletter.
- CodeQL security scanning runs automatically on every push via `.github/workflows/codeql-analysis.yml`.
- This project generates **HTML strings** — always sanitize any user-supplied content before passing it to the template to prevent XSS injection in rendered emails. See the [validation & sanitization tools](#try-these-validation--sanitization-tools) below for suitable libraries.

### Try these validation & sanitization tools

- [`html-validate`](https://www.npmjs.com/package/html-validate)
- [`html-validator-cli`](https://www.npmjs.com/package/html-validator-cli)
- [`sanitizer`](https://www.npmjs.com/package/sanitizer)
- [`common-tags`](https://www.npmjs.com/package/common-tags#introduction)
- [`htmljs-parser`](https://www.npmjs.com/package/htmljs-parser)
- [`parse5`](https://www.npmjs.com/package/parse5)
- [`@tehshrike/html-template-tag`](https://www.npmjs.com/package/@tehshrike/html-template-tag)

---

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

Quick reference:

1. **Fork** the repository and create a feature branch.
2. Add new code in the **correct module** — see the table in [CONTRIBUTING.md § Where to Add New Code](CONTRIBUTING.md#where-to-add-new-code).
3. **Run tests** and make sure they pass: `cd Work && npm test`
4. **Run the linter** and fix any issues: `cd Work && npm run lint:fix`
5. Open a **Pull Request** against `main` with a clear description.

### Work/ directory policy

> **`Work/` is integration and orchestration only — no new core logic.**

New template definitions, display sections, and component functions must live in the appropriate package (`sub-modules/outerTemplate`, `packages/template-runtime-display`, etc.), not in `Work/src/`. This rule is documented in [ADR 0001](docs/adr/0001-module-boundaries.md) and enforced by the [`work-policy` CI check](.github/workflows/work-policy.yml).

See [CONTRIBUTING.md](CONTRIBUTING.md) for full details on what belongs where.

---

## Roadmap

> These are ideas and known areas for improvement — not commitments.

- [ ] Complete the TypeScript / NX migration in `hackernoon/`
- [ ] Add a live HTML preview mode for local development
- [ ] Document each sub-module in `sub-modules/` individually
- [ ] Add Storybook or similar component explorer for email components
- [ ] Expand integration test coverage with snapshot tests
- [ ] Add a CLI tool for quick template rendering from the command line
- [ ] Publish NX workspace packages to npm under a `@llazyemail` scope

---

## Related Resources & Articles

### Project Links

- [markdown-to-email](https://github.com/atherdon/markdown-to-email) — sibling project that feeds content into this template
- [LLazyEmail LinkedIn](https://www.linkedin.com/company/llazyemail/)
- [DeepSource Code Quality Dashboard](https://deepsource.io/gh/LLazyEmail/hn_email_template/issues?category=recommended&page=1)

### Articles by Arthur Tkachenko

- [5 Reasons Why Newsletters Should Be Part of Your Business Strategy](https://hackernoon.com/5-reasons-why-newsletters-should-be-part-of-your-business-strategy)
- [Organizing an Advanced Structure for HTML Email Template](https://hackernoon.com/organizing-an-advanced-structure-for-html-email-template)
- [How I Started to Build React Components for Email Templates](https://hackernoon.com/how-i-started-to-build-react-components-for-email-templates)
- [Introducing a Simple npm Module with Email Templates](https://hackernoon.com/introducing-a-simple-npm-module-with-email-templates)
- [Glossary for Non-Techies](https://hackernoon.com/glossary-for-non-technies)
- [Email Marketing and How to Curate an Effective Business Newsletter](https://hackernoon.com/email-marketing-and-how-to-curate-an-effective-business-newsletter)
- [Exploring Substack for Building Your Newsletter](https://hackernoon.com/exploring-substack-for-building-your-newsletter)
- [Building a Design System for Email Templates (React)](https://hackernoon.com/building-a-design-system-for-email-templates-react)
- [Together4Victory: List of Email Marketing Tools](https://hackernoon.com/together4victory-list-of-email-marketing-tools)
- [Cool Newsletters for Developers — Part 1](https://hackernoon.com/cool-newsletters-for-developers-part-1)
- [Cool Resources for Sending Emails](https://hackernoon.com/cool-resources-for-sending-emails)

### Dev.to Posts

- [Created a Module for Markdown Regexes](https://dev.to/atherdon/created-a-module-for-markdown-regexes-3a1b)
- [How I Created a Simple npm Package with Basic Email Templates](https://dev.to/atherdon/how-i-created-a-simple-npm-package-with-basic-email-templates-1efo)

---

## Recent Changes

### Major Recent Changes (March 2026)

- **Template Modularization:** Refactored the codebase to modularize the template system. Introduced `outerTemplate`, `display runtime`, `HN preset definitions`, and `template-engine` workspace packages to enhance code maintainability.
- **Template Definition Updates:** Moved `hn-without-ads` and HN template definitions, along with their assembly logic, to the new `outerTemplate` runtime, improving isolation between data, definitions, and generation.
- **Testing & Artifacts:** Added integration tests using real data, generating and committing verified HTML outputs for visual and functional validation.
- **Validation & CLI:** Introduced robust template input schema validation and a new generator CLI for automation and error reduction.
- **File & Package Structure:** Created new folders and packages for `outerTemplate`, `display runtime`, HN definitions, and utility modules.
- **Documentation:** Updated README and documentation with new architectural details and a roadmap for further development.
- **NPM Packaging:** Updated `.npmignore` to properly exclude generated artifacts and ensure clean npm releases.

---

## About the `outerTemplate` Module

The `outerTemplate` module is responsible for encapsulating the structure, definitions, and static assembly logic for email templates (such as "HN" and "hn-without-ads"). This module organizes all static aspects of template construction, providing a clear separation from dynamic, data-driven, or rendering-specific logic. While `outerTemplate` holds most or all static components, actual HTML rendering and runtime processing may also involve related modules like `display runtime` and `template-engine`. This modular approach enhances maintainability and makes each concern explicit within the repository's structure.

---

## Architecture Decisions

Architecture Decision Records (ADRs) capture significant design choices made during the evolution of this project. They are stored in [`docs/adr/`](docs/adr/).

| ADR | Title | Status |
|-----|-------|--------|
| [0001](docs/adr/0001-module-boundaries.md) | Module Boundaries and Dependency Direction | Accepted |

### Summary — ADR 0001: Module Boundaries

The repository is structured around four primary areas of responsibility:

| Area | Owns |
|------|------|
| `sub-modules/outerTemplate` | Outer-shell layout components, template registry, and template definitions |
| `packages/template-runtime-display` | The three-step display pipeline (mapper → model → renderer) and all section implementations |
| `packages/template-engine` | Generic template factory utilities, shared types, and input validation helpers |
| `Work/` | Integration tests, CLI scripts, build configuration, and sample fixture data — **no core logic** |

**Dependency direction:** `Work/` may depend on any package or sub-module. Packages and sub-modules must never import from `Work/`. Lower-level packages (`template-engine`) must not import from higher-level ones (`template-runtime-display`, `outerTemplate`).

See [`docs/adr/0001-module-boundaries.md`](docs/adr/0001-module-boundaries.md) for the full rules, migration guidance, and acceptance criteria.

---

## Legacy README

The original README is preserved at [`README.old.md`](README.old.md) for historical reference. It contains the original project notes, architecture sketches, and early development narrative written during the initial build phase. No content has been changed.

---

## License

This project is licensed under the **MIT License**. Refer to the `"license": "MIT"` field in `Work/package.json`.

---

## Acknowledgements

- **Arthur Tkachenko** — creator and primary author
- The [Hackernoon](https://hackernoon.com) engineering team for the original email pipeline
- [RollupJS](https://rollupjs.org/), [Jest](https://jestjs.io/), [NX](https://nx.dev/) communities
- All contributors who submitted issues, PRs, or articles about the project
