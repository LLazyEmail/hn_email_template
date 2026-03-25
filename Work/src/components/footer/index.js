import { validateInput } from '../validation/validateInput';
import { FOOTER_CHECKS, SOCIAL_LINKS } from './footer.config';

const renderSocialIcon = ({ href, icon, alt }) => `
  <table
    align="left"
    border="0"
    cellpadding="0"
    cellspacing="0"
    style="
      display: inline;
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    "
  >
    <tbody>
      <tr>
        <td
          valign="top"
          style="
            padding-right: 10px;
            padding-bottom: 9px;
            mso-line-height-rule: exactly;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          "
          class="mcnFollowContentItemContainer"
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            class="mcnFollowContentItem"
            style="
              border-collapse: collapse;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
            "
          >
            <tbody>
              <tr>
                <td
                  align="left"
                  valign="middle"
                  style="
                    padding-top: 5px;
                    padding-right: 10px;
                    padding-bottom: 5px;
                    padding-left: 9px;
                    mso-line-height-rule: exactly;
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                  "
                >
                  <table
                    align="left"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    width=""
                    style="
                      border-collapse: collapse;
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    "
                  >
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          valign="middle"
                          width="24"
                          class="mcnFollowIconContent"
                          style="
                            mso-line-height-rule: exactly;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                        >
                          <a
                            href="${href}"
                            target="_blank"
                            style="
                              mso-line-height-rule: exactly;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                          >
                            <img
                              src="${icon}"
                              alt="${alt}"
                              style="
                                display: block;
                                border: 0;
                                height: auto;
                                outline: none;
                                text-decoration: none;
                                -ms-interpolation-mode: bicubic;
                              "
                              height="24"
                              width="24"
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>`;

const renderSocialRow = () => SOCIAL_LINKS.map(renderSocialIcon).join('\n');

const renderCustomBlock = ({ address, sponsor, copyright, unsubscribe }) => `<tr>
  <td
    valign="top"
    class="mcnTextContent"
    style="
      padding-top: 0; padding-right: 18px; padding-bottom: 9px;
      padding-left: 18px; mso-line-height-rule: exactly;
      -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;
      word-break: break-word; color: #656565;
      font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 12px; line-height: 150%; text-align: center;
    "
  >
    ${copyright}
    <br />
    ${address}
    <br />
    ${unsubscribe}
    ${sponsor}
  </td>
</tr>`;

const footerComponent = (params = {}) => {
  validateInput(params, FOOTER_CHECKS);

  const { address, sponsor, copyright, unsubscribe } = params;
  const socialRow = renderSocialRow();
  const customBlock = renderCustomBlock({ address, sponsor, copyright, unsubscribe });

  return `<tr>
<td
  valign="top"
  id="templateFooter"
  style="
    background: #ffffff none no-repeat center/cover;
    mso-line-height-rule: exactly;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    background-color: #ffffff;
    background-image: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-top: 0;
    border-bottom: 0;
    padding-top: 9px;
    padding-bottom: 9px;
  "
>
  <table
    border="0"
    cellpadding="0"
    cellspacing="0"
    width="100%"
    class="mcnFollowBlock"
    style="
      min-width: 100%;
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    "
  >
    <tbody class="mcnFollowBlockOuter">
      <tr>
        <td
          align="center"
          valign="top"
          style="
            padding: 9px;
            mso-line-height-rule: exactly;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          "
          class="mcnFollowBlockInner"
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            class="mcnFollowContentContainer"
            style="
              min-width: 100%;
              border-collapse: collapse;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
            "
          >
            <tbody>
              <tr>
                <td
                  align="center"
                  style="
                    padding-left: 9px;
                    padding-right: 9px;
                    mso-line-height-rule: exactly;
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    width="100%"
                    style="
                      min-width: 100%;
                      border-collapse: collapse;
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    "
                    class="mcnFollowContent"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          valign="top"
                          style="
                            padding-top: 9px;
                            padding-right: 9px;
                            padding-left: 9px;
                            mso-line-height-rule: exactly;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                        >
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            style="
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                          >
                            <tbody>
                              <tr>
                                <td
                                  align="center"
                                  valign="top"
                                  style="
                                    mso-line-height-rule: exactly;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <!--[if mso]>
                    <table align="center" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                    <![endif]-->
                                  ${socialRow}
                                  <!--[if mso]>
                    </tr>
                    </table>
                    <![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  <table
    border="0"
    cellpadding="0"
    cellspacing="0"
    width="100%"
    class="mcnTextBlock"
    style="
      min-width: 100%;
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    "
  >
    <tbody class="mcnTextBlockOuter">
      <tr>
        <td
          valign="top"
          class="mcnTextBlockInner"
          style="
            padding-top: 9px;
            mso-line-height-rule: exactly;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          "
        >
          <!--[if mso]>
<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
<tr>
<![endif]-->
          <!--[if mso]>
<td valign="top" width="600" style="width:600px;">
<![endif]-->
          <table
            align="left"
            border="0"
            cellpadding="0"
            cellspacing="0"
            style="
              max-width: 100%;
              min-width: 100%;
              border-collapse: collapse;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
            "
            width="100%"
            class="mcnTextContentContainer"
          >
            <tbody>
              ${customBlock}
            </tbody>
          </table>
          <!--[if mso]>
</td>
<![endif]-->
          <!--[if mso]>
</tr>
</table>
<![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
</td>
</tr>`;
};

export default footerComponent;
