/**
 * hn-blocks.js
 * HN content blocks rendered from the dataset (content/*.js):
 *   - ads:    [{ slogan }, { link }, { logo }]  (one ad split across entries)
 *   - images: [{ image1: { src, link } }, ...]  (single-key wrappers)
 * Table-based markup only (no flex/grid) so lintEmail stays clean.
 */
import { escapeHtml } from '@llazyemail/template-runtime-display';

const mergeEntries = (entries = []) => Object.assign({}, ...entries);

export const adsHtml = (ads = []) => {
  const { slogan, link, logo } = mergeEntries(ads);
  if (!slogan && !logo) return '';
  const href = escapeHtml(link || '#');
  const logoImg = logo
    ? `<a href="${href}" target="_blank"><img src="${escapeHtml(logo)}" alt="${escapeHtml(slogan || 'Sponsor')}" width="200" height="100" style="display:block; margin:0 auto; border:0;" /></a>`
    : '';
  const sloganText = slogan
    ? `<p style="margin:8px 0 0 0; font-size:14px;"><a href="${href}" target="_blank" style="color:#111111;">${escapeHtml(slogan)}</a></p>`
    : '';
  return `<table width="100%" border="0" cellpadding="0" cellspacing="0" class="hnAds" style="border-collapse: collapse;">
  <tbody>
    <tr>
      <td align="center" style="padding: 12px 18px; text-align: center;">${logoImg}${sloganText}</td>
    </tr>
  </tbody>
</table>`;
};

const imageCell = ({ src, link }, n) =>
  `<td align="center" valign="top" width="50%" style="padding: 9px;"><a href="${escapeHtml(link || src)}" target="_blank"><img src="${escapeHtml(src)}" alt="Image ${n}" width="220" height="220" style="display:block; width:220px; height:220px; border:0;" /></a></td>`;

export const imageGridHtml = (images = [], columns = 2) => {
  const list = images.map((entry) => Object.values(entry)[0]).filter((img) => img && img.src);
  if (list.length === 0) return '';
  const rows = [];
  for (let i = 0; i < list.length; i += columns) {
    const cells = list.slice(i, i + columns).map((img, j) => imageCell(img, i + j + 1));
    while (cells.length < columns) cells.push('<td width="50%"></td>');
    rows.push(`    <tr>${cells.join('')}</tr>`);
  }
  return `<table width="100%" border="0" cellpadding="0" cellspacing="0" class="hnImageGrid" style="border-collapse: collapse;">
  <tbody>
${rows.join('\n')}
  </tbody>
</table>`;
};
