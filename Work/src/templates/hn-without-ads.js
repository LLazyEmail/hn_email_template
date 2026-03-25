import {
  renderDisplayTemplate,
  renderDisplayFrontMatterTemplate,
} from '../engine/display';

/**
 * HN (Hacker News digest) email template (without ads variant).
 *
 * - Pass a plain string as `data` to render simple content.
 * - Pass `{ string, data }` (with a `data.title` / `data.preview`) to render
 *   the full front-matter variant.
 *
 * @type {import('./types').Template}
 */
const hnWithoutAdsTemplate = {
  id: 'hn-without-ads',

  render: (data) => {
    // When `data` is `{ string, data }` the nested `data` property carries
    // front-matter fields (title, preview, …). A plain string means
    // simple content-only rendering.
    if (data && typeof data === 'object' && data.data !== undefined) {
      return renderDisplayFrontMatterTemplate(data);
    }
    return renderDisplayTemplate(data);
  },
};

export default hnWithoutAdsTemplate;
