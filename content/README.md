# content/

This directory is the **canonical location** for all newsletter content datasets.

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

`data-markdown.js` is an ordered array of typed body-content blocks:

```js
[
  { type: 'heading', level: number, html: string },
  { type: 'image',   src: string,   link: string, alt: string },
  { type: 'text',    html: string },
  ...
]
```

## Backward Compatibility

The old `files/data*.js` paths remain as re-export shims for backward
compatibility. They will be removed in a future cleanup PR.

Use the `content/` paths for all new code.
