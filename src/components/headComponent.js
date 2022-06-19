const headComponent = (params) => {

  const { title, headStyles, fonts } = params;

  // const { headStyles, fonts } = subcomponents;
  // const { headStylesComponent, fontsComponent } = subcomponents;
 




  if (!title) {
    throw new Error('no title was passed');
  }
  
  if (!headStyles) {
    throw new Error('no headStyles was passed');
  }
  
  if (!fonts) {
    throw new Error('no fonts was passed');
  }
  

  // if (typeof headStylesComponent != 'function'){ 
  //   throw new Error('invalid headStylesComponent, must be a function');
  // }



  // if (!fontsComponent)   { 
  //   throw new Error('invalid fontsComponent'); 
  // }


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
