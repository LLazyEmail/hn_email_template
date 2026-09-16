import { validateInput } from './validation/validateInput';
import { BODY_CHECKS } from './body.config';

const EmailTemplateBodyComponent = (params) => {
  const { footer, logoTop, logoBottom, content, previewText } = params || {};

  validateInput(params, BODY_CHECKS);

  return `<body
    style="
      height: 100%;
      margin: 0;
      padding: 0;
      width: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      background-color: #ffffff;
    "
    >
    ${previewText}
    <center>
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        height="100%"
        width="100%"
        id="bodyTable"
        style="
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          width: 100%;
          background-color: #ffffff;
        "
      >
        <tr>
          <td
            align="center"
            valign="top"
            id="bodyCell"
            style="
              mso-line-height-rule: exactly;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              height: 100%;
              margin: 0;
              padding: 10px;
              width: 100%;
              border-top: 0;
            "
          >
            <!-- BEGIN TEMPLATE // -->
            <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                        <tr>
                        <td align="center" valign="top" width="600" style="width:600px;">
                        <![endif]-->
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              class="templateContainer"
              style="
                border-collapse: collapse;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
                border: 0;
                max-width: 600px !important;
              "
            >
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
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
            <!-- // END TEMPLATE -->
          </td>
        </tr>
      </table>
    </center>
    </body>`;
};

export default EmailTemplateBodyComponent;
