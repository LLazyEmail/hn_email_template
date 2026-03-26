import { createTemplateFromDefinition } from './definitions/createTemplateFromDefinition';
import hnDefinition from './definitions/hn.definition';

/**
 * HN (Hacker News digest) email template.
 *
 * - Pass a plain string as `data` to render simple content.
 * - Pass `{ string, data }` (with a `data.title` / `data.preview`) to render
 *   the full front-matter variant.
 *
 * @type {import('./types').Template}
 */
const hnTemplate = createTemplateFromDefinition(hnDefinition);

export default hnTemplate;
