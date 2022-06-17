const headComponent = (params, subcomponents) => {

  const { title } = params;

  const { headStylesComponent, fontsComponent } = subcomponents;
 
  if (!title) {
    throw new Error('no title was passed');
  }
  
  if (typeof headStylesComponent != 'function'){ 
    throw new Error('invalid headStylesComponent, must be a function');
  }


  if (!fontsComponent)   { throw new Error('invalid fontsComponent'); }


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
  ${headStylesComponent()}
  <!--[if !mso]><!-->
  ${fontsComponent()}
  <!--<![endif]-->
  </head>`;
}

export default headComponent;
