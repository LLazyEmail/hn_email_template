# content/

This directory is the **canonical location** for all newsletter content datasets and source manuscripts.

## Sources

Raw HackerNoon newsletter manuscripts live in `content/sources/`:

| File | Description |
|------|-------------|
| `sources/01-hackernoon-source.md` | Full newsletter markdown (source for `content3.js` and the markdown-derived HTML body) |
| `sources/02-hackernoon-source.md` | Shorter sample newsletter markdown |
| `sources/03-hackernoon-source.mdx` | MDX variant of the newsletter source |

## Files

| File | Description |
|------|-------------|
| `content1.js` | Canonical template dataset (previously `files/data.js`) |
| `content2.js` | HN JSON-authored variant (previously `files/data-hn.js`) |
| `content3.js` | Markdown-derived variant (previously `files/data-from-markdown.js`) |
| `data-markdown.js` | Body content blocks extracted from `Work/src/content-from-markdown.html` |

## Data Shape

`content1.js`, `content2.js`, and `content3.js` all share the same data shape:

```js
{
  preview: string,   // preheader text shown in inbox summary
  title:   string,   // newsletter title / subject line
  ads:     Array,    // ad block descriptors [{ slogan?, link?, logo? }]
  images:  Array,    // image blocks [{ imageN: { src, link } }]
}
```

## Backward Compatibility

The old `files/data*.js` paths remain as re-export shims for backward
compatibility. They will be removed in a future cleanup PR.

Use the `content/` paths for all new code.
