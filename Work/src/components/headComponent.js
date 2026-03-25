import { validateInput } from './validation/validateInput';

const HEAD_CHECKS = [
  {
    field: 'title',
    errorMessage: 'no title was passed',
    rules: ['required', 'nonEmptyString'],
  },
  {
    field: 'headStyles',
    errorMessage: 'no headStyles was passed',
    rules: ['required', 'nonEmptyString'],
  },
  {
    field: 'fonts',
    errorMessage: 'no fonts was passed',
    rules: ['required', 'nonEmptyString'],
  },
];

const headComponent = (params = {}) => {
  validateInput(params, HEAD_CHECKS);
  const { title, headStyles, fonts } = params;

  return `<head>
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
  ${headStyles}
  <!--[if !mso]><!-->
  ${fonts}
  <!--<![endif]-->
  </head>`;
};

export default headComponent;
