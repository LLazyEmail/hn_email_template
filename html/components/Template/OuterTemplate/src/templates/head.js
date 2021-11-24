import misc from 'atherdon-newsletter-js-layouts-misc';

import { headStyles } from './head-styles';

const { fonts } = misc;

const head = `<head>
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
<title>The Secrets of High-Performing DevOps teams</title>
${headStyles}
<!--[if !mso]><!-->
${fonts}
<!--<![endif]-->
</head>`;


const headComponent = (title, headStyles, fonts) => {

  if (!title) new Error('no title was passed');
  if (!headStyles) new Error('invalid headStyles');
  if (!fonts)      new Error('invalid fonts');


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
}




export { head, headComponent };
