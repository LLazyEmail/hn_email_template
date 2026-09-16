import { validateInput } from '../validation/validateInput';
import { FOOTER_CHECKS, SOCIAL_LINKS } from './footer.config';

const renderSocialIcon = ({ href, icon, alt }) => `
  <a href="${href}" target="_blank">
    <img src="${icon}" alt="${alt}" height="24" width="24" />
  </a>`;

const footerComponent = (params = {}) => {
  validateInput(params, FOOTER_CHECKS);
  const { address, sponsor, copyright, unsubscribe } = params;
  const socialRow = SOCIAL_LINKS.map(renderSocialIcon).join('\n');

  return `<tr>
<td valign="top" id="templateFooter" class="mcnFollowBlock">
  ${socialRow}
  <table class="mcnTextBlock" width="100%">
    <tbody class="mcnTextBlockOuter">
      <tr>
        <td class="mcnTextContent">
          ${copyright}<br />
          ${address}<br />
          ${unsubscribe}
          ${sponsor}
        </td>
      </tr>
    </tbody>
  </table>
</td>
</tr>`;
};

export default footerComponent;
