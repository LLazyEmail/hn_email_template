/**
 * hn-parts.js
 * HN-specific markup slots fed into @llazyemail/template-runtime-display.
 * Ported from sub-modules/outerTemplate/src/components (head, headStyles,
 * body, footer). The document shell (doctype + <html>) now comes from the
 * runtime's xhtmlDocument() instead of the old mainComponent.
 */

export const FONTS =
  '<link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Merriweather+Sans:400,400i,700,700i|Source+Sans+Pro:400,400i,700,700i" rel="stylesheet">';

export const HEAD_STYLES = `<style type="text/css">
    p{margin:10px 0;padding:0;}
    table{border-collapse:collapse;}
    body,#bodyTable,#bodyCell{height:100%;margin:0;padding:0;width:100%;}
    .mcnPreviewText{display:none !important;}
    .templateContainer{max-width:600px !important;}
    #templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
      color:#656565;
      font-family:'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size:12px;
      line-height:150%;
      text-align:center;
    }
  </style>`;

export const SOCIAL_LINKS = [
  ['https://twitter.com/hackernoon', 'twitter', 'Twitter'],
  ['https://www.facebook.com/hackernoon', 'facebook', 'Facebook'],
  ['https://instagram.com/hackernoon/', 'instagram', 'Instagram'],
  ['https://hackernoon.com', 'link', 'Website'],
  ['https://www.youtube.com/channel/UChu5YILgrOYOfkfRlTB-D-g', 'youtube', 'YouTube'],
  ['mailto:stories@hackernoon.com', 'forwardtofriend', 'Email'],
].map(([href, icon, alt]) => ({
  href,
  icon: `https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/${icon}.png`,
  alt,
}));

export const FOOTER_DEFAULTS = {
  copyright: `<em>Copyright © ${new Date().getFullYear()} Hacker Noon. All rights reserved.</em>`,
  address: '<strong>Our mailing address is:</strong><br />PO Box 2206, Edwards CO, 81632, U.S.A.',
  unsubscribe: '<a href="*|UNSUB|*">unsubscribe</a>',
  sponsor:
    '<div style="text-align: center;"><br /><a href="https://sponsor.hackernoon.com/newsletter?ref=noonifications.tech" target="_blank">Click Here To Sponsor A Newsletter by Hacker Noon</a></div>',
};

export const headHtml = ({ title }) => `<head>
  <!-- NAME: 1 COLUMN -->
  <!--[if gte mso 15]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG />
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  <![endif]-->
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  ${HEAD_STYLES}
  <!--[if !mso]><!-->
  ${FONTS}
  <!--<![endif]-->
  </head>`;

export const preheaderHtml = ({ preview }) =>
  `<span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">${preview}</span>`;

export const footerHtml = (params = {}) => {
  const { copyright, address, unsubscribe, sponsor } = { ...FOOTER_DEFAULTS, ...params };
  const socialRow = SOCIAL_LINKS.map(
    ({ href, icon, alt }) => `
  <a href="${href}" target="_blank">
    <img src="${icon}" alt="${alt}" height="24" width="24" />
  </a>`
  ).join('\n');

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

/** HN layout chrome (bodyTable / templateContainer) around content + footer. */
export const mainHtml = ({ content, footer, logoTop = '', logoBottom = '' }) => `<center>
      <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; height: 100%; margin: 0; padding: 0; width: 100%; background-color: #ffffff;">
        <tr>
          <td align="center" valign="top" id="bodyCell" style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; height: 100%; margin: 0; padding: 10px; width: 100%; border-top: 0;">
            <!-- BEGIN TEMPLATE // -->
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;"><tr><td align="center" valign="top" width="600" style="width:600px;">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border: 0; max-width: 600px !important;">
              <tr>
                <td valign="top" id="templatePreheader">${logoTop}</td>
              </tr>
              <tr>
                <td valign="top" id="templateHeader">${content}</td>
              </tr>
              <tr>
                <td valign="top" id="templateBody">${logoBottom}</td>
              </tr>
              ${footer}
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td></tr></table>
            <![endif]-->
            <!-- // END TEMPLATE -->
          </td>
        </tr>
      </table>
    </center>`;
