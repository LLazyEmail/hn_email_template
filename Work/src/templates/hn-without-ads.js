import {
  createTemplateFromDefinition,
  hnWithoutAdsDefinition,
} from './definitions';

/**
 * HN (Hacker News digest) email template (without ads variant).
 *
 * - Pass a plain string as `data` to render simple content.
 * - Pass `{ string, data }` (with a `data.title` / `data.preview`) to render
 *   the full front-matter variant.
 *
 * @type {import('./types').Template}
 */
const hnWithoutAdsTemplate = createTemplateFromDefinition(
  hnWithoutAdsDefinition
);

export default hnWithoutAdsTemplate;
