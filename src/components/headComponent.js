const headComponent = (params) => {

  const { title, headStyles, fonts } = params;

  if (!title) {
    throw new Error('no title was passed');
  }
  
  if (typeof headStyles != 'function'){ 
    throw new Error('invalid headStylesComponent, must be a function');
  }
  if (!fonts)   { throw new Error('invalid fonts'); }


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


// removed displayHead method from this file


export default headComponent;
