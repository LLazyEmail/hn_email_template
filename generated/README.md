# generated/

This directory holds generated HTML email output files produced by the
top-level generation scripts.

Generated files are **not committed to version control** (see `.gitignore`).

## Usage

Generate outputs with:

```bash
# From project root (uses scripts/generate-template.js):
node scripts/generate-template.js --data=content/content1.js --out=generated/content1.html
node scripts/generate-template.js --data=content/content2.js --out=generated/content2.html
node scripts/generate-template.js --data=content/content3.js --out=generated/content3.html

# From Work/ (uses Work/scripts/generate-template.js via npm script):
cd Work && npm run generate:template -- --out=generated/hn.html
```
