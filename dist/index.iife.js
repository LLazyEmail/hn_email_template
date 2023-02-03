var newsletterLayoutsBodyPlainJS = (function (misc) {
  'use strict';

  class displayFactoryTwo {
    error = false;
    partial = '';
    isError = () => {
      return this.error;
    };
    setPartial = string => {
      this.partial = string;
    };
    getPartial = () => {
      return this.partial;
    };
    display = () => {
      this.getPartial();
    };
    create = settings => {
      const {
        component,
        params,
        subcomponents
      } = settings;
      let partial;

      try {
        partial = component(params, subcomponents);
        return partial;
      } catch (err) {
        console.log(err);
      }
    };
  }

  const headStylesComponent = () => {
    return `<style type="text/css">
    p{
      margin:10px 0;
      padding:0;
    }
    table{
      border-collapse:collapse;
    }
    h1,h2,h3,h4,h5,h6{
      display:block;
      margin:0;
      padding:0;
    }
    img,a img{
      border:0;
      height:auto;
      outline:none;
      text-decoration:none;
    }
    body,#bodyTable,#bodyCell{
      height:100%;
      margin:0;
      padding:0;
      width:100%;
    }
    .mcnPreviewText{
      display:none !important;
    }
    #outlook a{
      padding:0;
    }
    img{
      -ms-interpolation-mode:bicubic;
    }
    table{
      mso-table-lspace:0pt;
      mso-table-rspace:0pt;
    }
    .ReadMsgBody{
      width:100%;
    }
    .ExternalClass{
      width:100%;
    }
    p,a,li,td,blockquote{
      mso-line-height-rule:exactly;
    }
    a[href^=tel],a[href^=sms]{
      color:inherit;
      cursor:default;
      text-decoration:none;
    }
    p,a,li,td,body,table,blockquote{
      -ms-text-size-adjust:100%;
      -webkit-text-size-adjust:100%;
    }
    .ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
      line-height:100%;
    }
    a[x-apple-data-detectors]{
      color:inherit !important;
      text-decoration:none !important;
      font-size:inherit !important;
      font-family:inherit !important;
      font-weight:inherit !important;
      line-height:inherit !important;
    }
    #bodyCell{
      padding:10px;
    }
    .templateContainer{
      max-width:600px !important;
    }
    a.mcnButton{
      display:block;
    }
    .mcnImage,.mcnRetinaImage{
      vertical-align:bottom;
    }
    .mcnTextContent{
      word-break:break-word;
    }
    .mcnTextContent img{
      height:auto !important;
    }
    .mcnDividerBlock{
      table-layout:fixed !important;
    }
    body,#bodyTable{
      background-color:#ffffff;
    }
    #bodyCell{
      border-top:0;
    }
    .templateContainer{
      border:0;
    }
    h1{
      color:#111111;
      font-family:'Merriweather Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size:26px;
      font-style:normal;
      font-weight:bold;
      line-height:125%;
      letter-spacing:normal;
      text-align:left;
    }
    h2{
      color:#202020;
      font-family:Helvetica;
      font-size:22px;
      font-style:normal;
      font-weight:bold;
      line-height:125%;
      letter-spacing:normal;
      text-align:left;
    }
    h3{
      color:#202020;
      font-family:Helvetica;
      font-size:20px;
      font-style:normal;
      font-weight:bold;
      line-height:125%;
      letter-spacing:normal;
      text-align:left;
    }
    h4{
      color:#202020;
      font-family:Helvetica;
      font-size:18px;
      font-style:normal;
      font-weight:bold;
      line-height:125%;
      letter-spacing:normal;
      text-align:left;
    }
    #templatePreheader{
      background-color:#ffffff;
      background-image:none;
      background-repeat:no-repeat;
      background-position:center;
      background-size:cover;
      border-top:0;
      border-bottom:0;
      padding-top:9px;
      padding-bottom:9px;
    }
    #templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
      color:#656565;
      font-family:Helvetica;
      font-size:12px;
      line-height:150%;
      text-align:left;
    }
    #templatePreheader .mcnTextContent a,#templatePreheader .mcnTextContent p a{
      color:#656565;
      font-weight:normal;
      text-decoration:underline;
    }
    #templateHeader{
      background-color:#ffffff;
      background-image:none;
      background-repeat:no-repeat;
      background-position:center;
      background-size:cover;
      border-top:0;
      border-bottom:0;
      padding-top:9px;
      padding-bottom:0;
    }
    #templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
      color:#111111;
      font-family:'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size:18px;
      line-height:150%;
      text-align:left;
    }
    #templateHeader .mcnTextContent a,#templateHeader .mcnTextContent p a{
      color:#111111;
      font-weight:bold;
      text-decoration:underline;
    }
    #templateBody{
      background-color:#ffffff;
      background-image:none;
      background-repeat:no-repeat;
      background-position:center;
      background-size:cover;
      border-top:0;
      border-bottom:4px solid #00ff00;
      padding-top:0;
      padding-bottom:9px;
    }
    #templateBody .mcnTextContent,#templateBody .mcnTextContent p{
      color:#111111;
      font-family:'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size:18px;
      line-height:150%;
      text-align:left;
    }
    #templateBody .mcnTextContent a,#templateBody .mcnTextContent p a{
      color:#111111;
      font-weight:bold;
      text-decoration:underline;
    }
    #templateFooter{
      background-color:#ffffff;
      background-image:none;
      background-repeat:no-repeat;
      background-position:center;
      background-size:cover;
      border-top:0;
      border-bottom:0;
      padding-top:9px;
      padding-bottom:9px;
    }
    #templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
      color:#656565;
      font-family:'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size:12px;
      line-height:150%;
      text-align:center;
    }
    #templateFooter .mcnTextContent a,#templateFooter .mcnTextContent p a{
      color:#656565;
      font-weight:normal;
      text-decoration:underline;
    }
    @media only screen and (min-width:768px){
    .templateContainer{
      width:600px !important;
    }
    
    }	@media only screen and (max-width: 480px){
    body,table,td,p,a,li,blockquote{
      -webkit-text-size-adjust:none !important;
    }
    
    }	@media only screen and (max-width: 480px){
    body{
      width:100% !important;
      min-width:100% !important;
    }
    
    }	@media only screen and (max-width: 480px){
    .mcnRetinaImage{
      max-width:100% !important;
    }
    
    }	@media only screen and (max-width: 480px){
    .mcnImage{
      width:100% !important;
    }
    
    }	@media only screen and (max-width: 480px){
    .mcnCartContainer,.mcnCaptionTopContent,.mcnRecContentContainer,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer,.mcnImageCardLeftImageContentContainer,.mcnImageCardRightImageContentContainer{
      max-width:100% !important;
      width:100% !important;
    }
    
    }	@media only screen and (max-width: 480px){
    .mcnBoxedTextContentContainer{
      min-width:100% !important;
    }
    
    }	@media only screen and (max-width: 480px){
    .mcnImageGroupContent{
      padding:9px !important;
    }
    
    }	@media only screen and (max-width: 480px){
    .mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{
      padding-top:9px !important;
    }
    
    }	@media only screen and (max-width: 480px){
    .mcnImageCardTopImageContent,.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{
      padding-top:18px !important;
    }
    
    }	@media only screen and (max-width: 480px){
    .mcnImageCardBottomImageContent{
      padding-bottom:9px !important;
    }
    
    }	@media only screen and (max-width: 480px){
    .mcnImageGroupBlockInner{
      padding-top:0 !important;
      padding-bottom:0 !important;
    }
    
    }	@media only screen and (max-width: 480px){
    .mcnImageGroupBlockOuter{
      padding-top:9px !important;
      padding-bottom:9px !important;
    }
    
    }	@media only screen and (max-width: 480px){
    .mcnTextContent,.mcnBoxedTextContentColumn{
      padding-right:18px !important;
      padding-left:18px !important;
    }
    
    }	@media only screen and (max-width: 480px){
    .mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{
      padding-right:18px !important;
      padding-bottom:0 !important;
      padding-left:18px !important;
    }
    
    }	@media only screen and (max-width: 480px){
    .mcpreview-image-uploader{
      display:none !important;
      width:100% !important;
    }
    
    }	@media only screen and (max-width: 480px){
    h1{
      font-size:22px !important;
      line-height:125% !important;
    }
    
    }	@media only screen and (max-width: 480px){
    h2{
      font-size:20px !important;
      line-height:125% !important;
    }
    
    }	@media only screen and (max-width: 480px){
    h3{
      font-size:18px !important;
      line-height:125% !important;
    }
    
    }	@media only screen and (max-width: 480px){
    h4{
      font-size:16px !important;
      line-height:150% !important;
    }
    
    }	@media only screen and (max-width: 480px){
    .mcnBoxedTextContentContainer .mcnTextContent,.mcnBoxedTextContentContainer .mcnTextContent p{
      font-size:14px !important;
      line-height:150% !important;
    }
    
    }	@media only screen and (max-width: 480px){
    #templatePreheader{
      display:block !important;
    }
    
    }	@media only screen and (max-width: 480px){
    #templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
      font-size:14px !important;
      line-height:150% !important;
    }
    
    }	@media only screen and (max-width: 480px){
    #templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
      font-size:16px !important;
      line-height:150% !important;
    }
    
    }	@media only screen and (max-width: 480px){
    #templateBody .mcnTextContent,#templateBody .mcnTextContent p{
      font-size:16px !important;
      line-height:150% !important;
    }
    
    }	@media only screen and (max-width: 480px){
    #templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
      font-size:14px !important;
      line-height:150% !important;
    }
    
    }</style>`;
  };

  const headComponent = (params) => {
    const { title, headStyles, fonts } = params;

    if (!title) {
      throw new Error('no title was passed');
    }

    if (!headStyles) {
      throw new Error('no headStyles was passed');
    }

    if (!fonts) {
      throw new Error('no fonts was passed');
    }

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

  const { fontsComponent } = misc;

  const title = `The Secrets of High-Performing DevOps teams`;





  //variant one
  const settings$3 = {
    component: headComponent,
    params: {
      title,
      headStyles: headStylesComponent(),
      fonts: fontsComponent(),
    },
  };

  const Factory = new displayFactoryTwo();
  // Factory.create(settings);

  var HeadString = Factory.create(settings$3);

  // export {

  // }

  //   checks: () => [
  //       // checkingTitle(this.params.title)


  // console.log(FruitFactory)

  // const fruit = FruitFactory.create({
    // size: 10, sugar: 10}, 'constructor argument'
    // );
  // console.log(fruit.name());

  const headlineComponent = (content) => {
      // if (!unsubscribe) new Error('invalid unsubscribe');
      return `content`;
  };

  const logoBottomComponent$1 = () => {
    return `<table
  border="0"
  cellpadding="0"
  cellspacing="0"
  width="100%"
  class="mcnImageBlock"
  style="
    min-width: 100%;
    border-collapse: collapse;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  "
  >
  <tbody class="mcnImageBlockOuter">
    <tr>
      <td
        valign="top"
        style="
          padding: 9px;
          mso-line-height-rule: exactly;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        "
        class="mcnImageBlockInner"
      >
        <table
          align="left"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="mcnImageContentContainer"
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
                class="mcnImageContent"
                valign="top"
                style="
                  padding-right: 9px;
                  padding-left: 9px;
                  padding-top: 0;
                  padding-bottom: 0;
                  text-align: center;
                  mso-line-height-rule: exactly;
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                "
              >
                <a
                  href="https://hackernoon.com/"
                  title=""
                  class=""
                  target="_blank"
                  style="
                    mso-line-height-rule: exactly;
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                  "
                >
                  <img
                    align="center"
                    alt=""
                    src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/logos/brand/hackernoon.png"
                    width="564"
                    style="
                      max-width: 15426px;
                      padding-bottom: 0;
                      display: inline !important;
                      vertical-align: bottom;
                      border: 0;
                      height: auto;
                      outline: none;
                      text-decoration: none;
                      -ms-interpolation-mode: bicubic;
                    "
                    class="mcnImage"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
  </table>`;
  };

  const logoTopComponent$1 = () => {
    return `<table
  border="0"
  cellpadding="0"
  cellspacing="0"
  width="100%"
  class="mcnImageBlock"
  style="
    min-width: 100%;
    border-collapse: collapse;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  "
  >
  <tbody class="mcnImageBlockOuter">
    <tr>
      <td
        valign="top"
        style="
          padding: 0px;
          mso-line-height-rule: exactly;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        "
        class="mcnImageBlockInner"
      >
        <table
          align="left"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="mcnImageContentContainer"
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
                class="mcnImageContent"
                valign="top"
                style="
                  padding-right: 0px;
                  padding-left: 0px;
                  padding-top: 0;
                  padding-bottom: 0;
                  text-align: center;
                  mso-line-height-rule: exactly;
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                "
              >
                <a
                  href="https://www.hackernoon.com"
                  title=""
                  class=""
                  target="_blank"
                  style="
                    mso-line-height-rule: exactly;
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                  "
                >
                  <img
                    align="center"
                    alt=""
                    src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/logos/brand/hackernoon.png"
                    width="600"
                    style="
                      max-width: 1200px;
                      padding-bottom: 0;
                      display: inline !important;
                      vertical-align: bottom;
                      border: 0;
                      height: auto;
                      outline: none;
                      text-decoration: none;
                      -ms-interpolation-mode: bicubic;
                    "
                    class="mcnImage"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
  </table>`;
  };

  const previewTextComponent$1 = ({ content }) => {

    return `<span class="mcnPreviewText" style="display: none;font-size: 0px;line-height: 0px;max-height: 0px;max-width: 0px;opacity: 0;overflow: hidden;visibility: hidden;mso-hide: all;">${content}</span>`;
  };

  const sectionComponent = (content) => {
    return `
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
                                <tr>
                                  <td
                                    valign="top"
                                    class="mcnTextContent"
                                    style="
                                      padding: 0px 18px 9px;
                                      line-height: 150%;
                                      mso-line-height-rule: exactly;
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                      word-break: break-word;
                                      color: #111111;
                                      font-family: 'Source Sans Pro',
                                        'Helvetica Neue', Helvetica, Arial,
                                        sans-serif;
                                      font-size: 18px;
                                      text-align: left;
                                    "
                                  >
                                    ${content}
                                  </td>
                                </tr>
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
                    </table>`;
  };

  const sponsorComponent = ({ href, src, content }) => {
    return `<table
  border="0"
  cellpadding="0"
  cellspacing="0"
  class="mcnImageCardRightContentOuter"
  width="100%"
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
        class="mcnImageCardRightContentInner"
        style="
          padding: 0;
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
          class="mcnImageCardRightImageContentContainer"
          width="200"
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
                class="mcnImageCardRightImageContent"
                align="center"
                valign="top"
                style="
                  padding-top: 18px;
                  padding-right: 0;
                  padding-bottom: 18px;
                  padding-left: 18px;
                  mso-line-height-rule: exactly;
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                "
              >
                <a
                  href="${href}"
                  title=""
                  class=""
                  target="_blank"
                  style="
                    mso-line-height-rule: exactly;
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                  "
                >
                  <img
                    alt=""
                    src="${src}"
                    width="150"
                    style="
                      max-width: 150px;
                      border-radius: 0%;
                      border: 0;
                      height: auto;
                      outline: none;
                      text-decoration: none;
                      -ms-interpolation-mode: bicubic;
                      vertical-align: bottom;
                    "
                    class="mcnImage"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          class="mcnImageCardRightTextContentContainer"
          align="right"
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="346"
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
                valign="top"
                class="mcnTextContent"
                style="
                  padding-right: 18px;
                  padding-top: 18px;
                  padding-bottom: 18px;
                  color: #f2f2f2;
                  font-family: Helvetica;
                  font-size: 14px;
                  font-weight: normal;
                  text-align: center;
                  mso-line-height-rule: exactly;
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                  word-break: break-word;
                  line-height: 150%;
                "
              >
                <h1
                  class="mc-toc-title"
                  style="
                    text-align: center;
                    display: block;
                    margin: 0;
                    padding: 0;
                    color: #111111;
                    font-family: 'Merriweather Sans', 'Helvetica Neue',
                      Helvetica, Arial, sans-serif;
                    font-size: 26px;
                    font-style: normal;
                    font-weight: bold;
                    line-height: 125%;
                    letter-spacing: normal;
                  "
                >
                  <br />
                  <a
                    href="${href}"
                    style="
                      mso-line-height-rule: exactly;
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                      color: #111111;
                      font-weight: bold;
                      text-decoration: underline;
                    "
                  >
                    <strong
                      id="docs-internal-guid-98b2620b-7fff-d936-82b8-a8d3a3d3c470"
                      >${content}</strong>
                  </a>
                </h1>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
  </table>`;
  };

  const ctaComponent = () => {
      return `<div dir="ltr" style="text-align: justify;"><strong style="font-weight: bolder;">Ready to Claim Your Internet Name on Hacker Noon?</strong><ol><li dir="ltr" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><p dir="ltr" role="presentation" style="line-height: 125%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;"><a href="https://hackernoon.com/signup?ref=noonifications.tech" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;">Create a free account</a>.</p></li><li dir="ltr" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><p dir="ltr" role="presentation" style="line-height: 125%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;"><a href="https://app.hackernoon.com/subscriptions?ref=noonifications.tech" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;">Tell us what you want to read about</a>.</p></li><li dir="ltr" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><p dir="ltr" role="presentation" style="line-height: 125%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;"><a href="https://app.hackernoon.com/new?ref=noonifications.tech" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;">Submit your own tech stories</a>. </p></li><li dir="ltr" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><p dir="ltr" role="presentation" style="line-height: 125%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;"><a href="https://sponsor.hackernoon.com/brand-as-author?ref=noonifications.tech" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;">Gain Access to Brand-As-Author</a>™ Program. </p></li><li dir="ltr" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><p dir="ltr" role="presentation" style="line-height: 125%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;">Get Your Tech Stories Featured on the <a href="https://hackernoon.com/?ref=noonifications.tech" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;">Homepage of Hacker Noon</a>.</p></li></ol></div>`;
  };

  const body = {
    headlineComponent,
    logoBottomComponent: logoBottomComponent$1,
    logoTopComponent: logoTopComponent$1,
    previewTextComponent: previewTextComponent$1,
    sectionComponent,
    sponsorComponent,
    ctaComponent
  };

  const EmailTemplateBodyComponent = (params) => {
    const { footer, logoTop, logoBottom, content, previewText } = params;

    // console.log(logoTop);
    // console.log(logoBottom);

    if (!footer) {
      throw new Error('no footer was passed');
    }

    if (!logoTop || !logoBottom) {
      throw new Error('invalid logo');
    }

    if (!previewText) {
      throw new Error('invalid preview text');
    }

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
                <td
                  valign="top"
                  id="templatePreheader"
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
                  ${logoTop}
                </td>
              </tr>
              <tr>
                <td
                  valign="top"
                  id="templateHeader"
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
                    padding-bottom: 0;
                  "
                >
                  ${content}
                </td>
              </tr>
              <tr>
                <td
                  valign="top"
                  id="templateBody"
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
                    border-bottom: 4px solid #00ff00;
                    padding-top: 0;
                    padding-bottom: 9px;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    width="100%"
                    class="mcnDividerBlock"
                    style="
                      min-width: 100%;
                      border-collapse: collapse;
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                      table-layout: fixed !important;
                    "
                  >
                    <tbody class="mcnDividerBlockOuter">
                      <tr>
                        <td
                          class="mcnDividerBlockInner"
                          style="
                            min-width: 100%;
                            padding: 12px 18px;
                            mso-line-height-rule: exactly;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                        >
                          <table
                            class="mcnDividerContent"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            style="
                              min-width: 100%; border-top: 2px none #eaeaea;
                              border-collapse: collapse;    mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;    -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;  "
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    mso-line-height-rule: exactly;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <span></span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--
                <td class="mcnDividerBlockInner" style="padding: 18px;">
                <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
    -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  ${logoBottom}
                </td>
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

  // Hey, this component was created only for testing purposes. it wouldnt be returned or used at all.

  const innerContentComponent = () => {
    return `                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%" class="mcnTextContentContainer">
   <tbody><tr>

       <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px;line-height: 150%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;">



           <h1 class="null" dir="ltr" style="text-align: center;display: block;margin: 0;padding: 0;color: #111111;font-family: 'Merriweather Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 26px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;">The Secrets of High-Performing DevOps teams</h1>
           <br>
           <div dir="ltr" style="text-align: justify;"><span style="font-size:15px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">Ultra-fast innovation holds the key for conglomerates like <a href="https://hackernoon.com/tagged/apple" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">Apple</a>, <a href="https://hackernoon.com/tagged/microsoft" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">Microsoft</a>, and <a href="https://hackernoon.com/tagged/china" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">Tencent</a> known as the pacesetters in the modern markets. However, they all <a href="https://hackernoon.com/how-to-reduce-software-development-costs-h3153t9u" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">faced challenges</a> that are typical for established companies. For the most obvious examples, Laggard, tricky releases and a gap between dev and ops plugged them into implementing a <a href="https://hackernoon.com/how-to-make-a-devops-strategy-pk153uyb" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">radical DevOps strategy</a>.</span></span></div>
           <br>
           <div dir="ltr" style="text-align: justify;"><span style="font-size:15px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">Before <a href="https://hackernoon.com/how-the-devops-model-redefines-qa-best-practices-8f1t3t7u" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">Superman aka DevOps</a> came on stage, organizations used to have walled-off teams that had little to no idea of what was going on at other departments.  As a result, developers would spend several months’ worth of work and pass their <a href="https://hackernoon.com/how-the-devops-model-redefines-qa-best-practices-8f1t3t7u" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">code on to QA</a>. Guess what came next? Yep, <a href="https://hackernoon.com/how-goji-investments-enhances-developer-experience-via-observability-641f3w2q" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">bugs, bugs, and...lots of bugs</a>. Surely, that classic cop-out “It works fine on my computer” was a <a href="https://hackernoon.com/a-z-of-devops-managing-multiple-environments-with-the-help-of-these-tools-n6x3thm" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;"> go-to for developers</a>. As for Ops, they would <a href="https://hackernoon.com/4-skills-you-need-to-become-a-distinguished-developer-ly2d3tjl" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">get the same lame code</a> lame code, swallow their pride, and <a href="https://hackernoon.com/9-functional-programming-concepts-everyone-should-know-uy503u21" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">clean up the mess</a>.</span></span></div>
           <br>
           <div dir="ltr" style="text-align: center;"><span style="font-family:georgia,times,times new roman,serif"><span style="font-size:17px"><a href="https://hackernoon.com/10-best-object-oriented-online-programming-and-design-courses-2020-updated-wv83uff" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;"><img data-file-id="1168" alt="" height="220" src="https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2020/october/24.10/image4.gif" style="border: 0px initial;width: 220px;height: 220px;margin: 0px;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" width="220"></a></span></span></div>
           <br>
           <div dir="ltr" style="text-align: justify;"><span style="font-size:15px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">Luckily, we have the <a href="https://hackernoon.com/the-highest-paying-jobs-in-america-dlj3uaw" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">DevOps</a> approach that allows companies to keep the <a href="https://hackernoon.com/10-best-object-oriented-online-programming-and-design-courses-2020-updated-wv83uff" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">delivery process</a> in full gear and improve products at a <a href="https://hackernoon.com/10-best-object-oriented-online-programming-and-design-courses-2020-updated-wv83uff" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE;font-weight: bold;text-decoration: underline;">supersonic speed</a>. However, implementing a DevOps philosophy is not enough. Only <a href="https://hackernoon.com/rework-costs-your-company-millions-how-to-cut-back-nwq3wdv" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">high-performing DevOps teams</a> that have mastered some key capabilities can <a href="https://hackernoon.com/tagged/jfrog" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">deliver faster</a>, more accurately, and with <a href="https://hackernoon.com/data-persistent-prometheus-grafana-intergration-with-jenkins-5d263uvv" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">less downtime</a>. We have curated some secrets that differentiate <a href="https://hackernoon.com/ryan-dawson-on-open-source-tools-and-mlops-a-noonie-nom-interview-1hcy3u7x" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #0000EE ;font-weight: bold;text-decoration: underline;">DevOps leaders from laggards</a>.</span></span></div>


           <br>
           <div dir="ltr" style="text-align: center;"><span style="font-family:georgia,times,times new roman,serif"><span style="font-size:17px"><a href="https://hackernoon.com/how-to-build-an-effective-and-sustainable-on-call-schedule-for-your-team-3p11a3txy" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;"><img data-file-id="101168" alt="" height="220" src="https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2020/october/24.10/image1.gif" style="border: 0px initial;width: 220px;height: 220px;margin: 0px;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" width="220"></a></span></span></div>


       </td>
   </tr>
</tbody></table>`;
  };

  //const ERROR_PREVIEW = '`previewText` is a required option for `renderTemplate`';

  const previewTextComponent = (content) => {
    if (!content) {
      throw new Error('invalid preview text');
    }

    return `<!--[if !gte mso 9]><!---->
    ${content}
    <!--<![endif]-->`;
  };

  const mainComponent = (params) => {
    if (!params) {
      throw new Error('no Sub Components was passed');
    }

    // TODO make it better
    const { head, body } = params;

    if (!head || typeof head !== 'string') {
      throw new Error('no head was passed');
    }

    if (!body || typeof body !== 'string') {
      throw new Error('no body was passed');
    }

    // headComponent.isError();
    // bodyComponent.isError();

    return `<!DOCTYPE html>
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
   ${head}
   ${body}
    
  </html>`;
  };

  const renderCustomBlock = (params) => {


    const { address, sponsor, copyright, unsubscribe } = params;


    if (!copyright) {
      throw new Error('no copyrights was passed');
    }
    // if (typeof copyright != 'function') {
    //   throw new Error('no copyrights was passed');
    // }

    if (!address) {
      throw new Error('invalid address');
    }
    if (!unsubscribe) {
      throw new Error('invalid unsubscribe');
    }
    
    // if (typeof address != 'function'){
    //   throw new Error('invalid invalid address, must be a function');
    // }

    // if (typeof unsubscribe != 'function') {
    //   throw new Error('invalid unsubscribe, must be a function');
    // }

    if (!sponsor) {
      throw new Error('invalid newsletterSponsorshipLink');
    }
    // if (typeof newsletterSponsorshipLink != 'function'){
    //   throw new Error('invalid newsletterSponsorshipLink, must be a function');
    // }

    return `<tr>
    <td
      valign="top"
      class="mcnTextContent"
      style="
        padding-top: 0; padding-right: 18px; padding-bottom: 9px;
        padding-left: 18px; mso-line-height-rule: exactly;
        -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;
        word-break: break-word; color: #656565;
        font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial,  sans-serif; 
        font-size: 12px;line-height: 150%; text-align: center;
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
  };

  const footerComponent = ( params ) => {
    const { address, sponsor, copyright, unsubscribe } = params;

    // const {
    //   copyrightsComponent,
    //   // addressComponent,
    //   unsubscribeComponent,
    //   // newsletterSponsorshipLinkComponent
    // } = subcomponents;

    if (!copyright) throw new Error('no copyright was passed in footer component');
    if (!address) throw new Error('no address was passed');
    if (!unsubscribe) throw new Error('no unsubscribe was passed');
    if (!sponsor) throw new Error('no newsletterSponsorshipLink was passed');

    // console.log(copyright)


    // if (typeof copyrightsComponent != 'function') {
    //   throw new Error('no copyrights was passed');
    // }

    // if (typeof unsubscribeComponent != 'function') {
    //   throw new Error('invalid unsubscribeComponent, must be a function');
    // }

    // if (!newsletterSponsorshipLink)  {
    //   throw new Error('invalid newsletterSponsorshipLink');
    // }



    return (
      `<tr>
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

                                  <!--[if mso]>
                        <td align="center" valign="top">
                        <![endif]-->

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
                                                            href="https://twitter.com/hackernoon"
                                                            target="_blank"
                                                            style="
                                                              mso-line-height-rule: exactly;
                                                              -ms-text-size-adjust: 100%;
                                                              -webkit-text-size-adjust: 100%;
                                                            "
                                                          >
                                                            <img
                                                              src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/twitter.png"
                                                              alt="Twitter"
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
                                                              class=""
                                                          /></a>
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

                                  <!--[if mso]>
                        </td>
                        <![endif]-->

                                  <!--[if mso]>
                        <td align="center" valign="top">
                        <![endif]-->

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
                                                            href="https://www.facebook.com/hackernoon"
                                                            target="_blank"
                                                            style="
                                                              mso-line-height-rule: exactly;
                                                              -ms-text-size-adjust: 100%;
                                                              -webkit-text-size-adjust: 100%;
                                                            "
                                                          >
                                                            <img
                                                              src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/facebook.png"
                                                              alt="Facebook"
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
                                                              class=""
                                                          /></a>
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

                                  <!--[if mso]>
                        </td>
                        <![endif]-->

                                  <!--[if mso]>
                        <td align="center" valign="top">
                        <![endif]-->

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
                                                            href="https://instagram.com/hackernoon/"
                                                            target="_blank"
                                                            style="
                                                              mso-line-height-rule: exactly;
                                                              -ms-text-size-adjust: 100%;
                                                              -webkit-text-size-adjust: 100%;
                                                            "
                                                            ><img
                                                              src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/instagram.png"
                                                              alt="Instagram"
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
                                                              class=""
                                                          /></a>
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

                                  <!--[if mso]>
                        </td>
                        <![endif]-->

                                  <!--[if mso]>
                        <td align="center" valign="top">
                        <![endif]-->

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
                                                            href="https://hackernoon.com"
                                                            target="_blank"
                                                            style="
                                                              mso-line-height-rule: exactly;
                                                              -ms-text-size-adjust: 100%;
                                                              -webkit-text-size-adjust: 100%;
                                                            "
                                                            ><img
                                                              src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/link.png"
                                                              alt="Website"
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
                                                              class=""
                                                          /></a>
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

                                  <!--[if mso]>
                        </td>
                        <![endif]-->

                                  <!--[if mso]>
                        <td align="center" valign="top">
                        <![endif]-->

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
                                            padding-right: 10px;padding-bottom: 9px;mso-line-height-rule: exactly;
                                            -ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                          class="mcnFollowContentItemContainer"
                                        >
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            class="mcnFollowContentItem"
                                            style="
                                              border-collapse: collapse;mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  align="left"
                                                  valign="middle"
                                                  style="
                                                    padding-top: 5px;padding-right: 10px;padding-bottom: 5px;
                                                    padding-left: 9px;mso-line-height-rule: exactly;
                                                    -ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;
                                                  "
                                                >
                                                  <table
                                                    align="left"
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    width=""
                                                    style="
                                                      border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;
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
                                                            mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;
                                                          "
                                                        >
                                                          <a
                                                            href="https://www.youtube.com/channel/UChu5YILgrOYOfkfRlTB-D-g"
                                                            target="_blank"
                                                            style="
                                                              mso-line-height-rule: exactly;
                                                              -ms-text-size-adjust: 100%;
                                                              -webkit-text-size-adjust: 100%;
                                                            "
                                                            ><img
                                                              src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/youtube.png"
                                                              alt="YouTube"
                                                              style="display: block;  border: 0;
                                                                height: auto; outline: none;
                                                                text-decoration: none;  -ms-interpolation-mode: bicubic;"
                                                              height="24"
                                                              width="24"
                                                              class=""
                                                          /></a>
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

                                  <!--[if mso]>
                        </td>
                        <![endif]-->

                                  <!--[if mso]>
                        <td align="center" valign="top">
                        <![endif]-->

                                  <table
                                    align="left"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    style="
                                      display: inline;border-collapse: collapse;mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          valign="top"
                                          style="
                                            padding-right: 0;padding-bottom: 9px;
                                            mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;
                                          "
                                          class="mcnFollowContentItemContainer"
                                        >
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            class="mcnFollowContentItem"
                                            style="border-collapse: collapse;mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  align="left"
                                                  valign="middle"
                                                  style="padding-top: 5px;padding-right: 10px; padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                                >
                                                  <table
                                                    align="left"
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    width=""
                                                    style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          align="center"
                                                          valign="middle"
                                                          width="24"
                                                          class="mcnFollowIconContent"
                                                          style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                                        >
                                                          <a
                                                            href="mailto:stories@hackernoon.com"
                                                            target="_blank"
                                                            style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;                                                            "
                                                            ><img
                                                              src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/forwardtofriend.png"
                                                              alt="Email"
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
                                                              class=""
                                                          /></a>
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
      min-width: 100%;border-collapse: collapse;
      mso-table-lspace: 0pt;mso-table-rspace: 0pt;
      -ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;
    "
  >
    <tbody class="mcnTextBlockOuter">
      <tr>
        <td
          valign="top"
          class="mcnTextBlockInner"
          style="
            padding-top: 9px;mso-line-height-rule: exactly;
            -ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;
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
              max-width: 100%;min-width: 100%;border-collapse: collapse;
              mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;
            "
            width="100%"
            class="mcnTextContentContainer"
          >
            <tbody>
              ` +
      renderCustomBlock(
        params
        // copyright,
        // address,
        // unsubscribe,
        // sponsor
      ) +
      `
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
</tr>`
    );
  };

  // import config from "../config";

  // console.log(config)

  let mailingAddress = 'PO Box 2206, Edwards CO, 81632, U.S.A.';

  let contact =
    'https://sponsor.hackernoon.com/newsletter?ref=noonifications.tech';

  let unsubscribeLink = 'https://sponsor.hackernoon.com/contact';

  const {
    addressComponent,
    copyrightsComponent,

    newsletterSponsorshipLinkComponent,
    unsubscribeComponent,
  } = misc;

  // all params here must be passed from the outside.
  const addon1 = {
    address: addressComponent({mailingAddress}),
    sponsor: newsletterSponsorshipLinkComponent({contact}),

    copyright: copyrightsComponent(),
    unsubscribe: unsubscribeComponent({unsubscribeLink})
  };



  //variant one
  const settings$2 = {
    component: footerComponent,
    params: addon1,

    // TODO FIX THIS sub-components flow, it's driving me crazy
    // subcomponents: {
     
    //   copyrightsComponent,
    //   unsubscribeComponent,

    //   // addon1.copyright,
    //   // addon1.unsubscribe

    // },

  };

  // console.log(settings);

  const FooterFactory = new displayFactoryTwo();

  const FooterHTMLString = FooterFactory.create(settings$2);

  // const DisplayFooter = {

  //     checks: () => [  checkingTitle(this.params.title)

  const { logoBottomComponent, logoTopComponent } = body;



  // note that footer param here is a subcomponent,
  // so we passing footerDisplay instead of just a component

  let addon = {
    footer: FooterHTMLString,

    logoTop: logoTopComponent(),
    logoBottom: logoBottomComponent(),

    // theese two variuables must beeing passed from the outside

    content: innerContentComponent(),
    // content: '[[THIS IS PLACE FOR A CONTENT INSIDE]',
    previewText: previewTextComponent('[AMA PREVIEW TEXT]'),
  };

  //variant one
  const settings$1 = {
    component: EmailTemplateBodyComponent,
   
    params: addon,
  };

  // console.log( settings );

  const BodyFactory = new displayFactoryTwo();
  const BodyHTMLString = BodyFactory.create(settings$1);

  // title must be passed from the outside
  // const title = `The Secrets of High-Performing DevOps teams`;
  //     const head = displayHead(title);


  //variant one
  const settings = {
    component: mainComponent,
    params: { head: HeadString, body: BodyHTMLString },
  };

  // TODO it's not ideal to pass our factory (yeeeah) because it's just an empty box
  const MainFactory = new displayFactoryTwo();

  let MainHTMLString = MainFactory.create(settings);

  // title must be passed from the outside
  // const title = `The Secrets of High-Performing DevOps teams`;
  //     const head = displayHead(title);

  function displayTemplate(generated_content) {


      const BodyFactory = new displayFactoryTwo();

      settings$1.params.content = generated_content;


      const BodyHTMLString = BodyFactory.create(settings$1);
      
      // console.log(BodyHTMLString)
      // ------

      const MainFactory = new displayFactoryTwo();

      settings.params.body = BodyHTMLString;

      let MainHTMLString = MainFactory.create(settings);

      // console.log(MainHTMLString)

      return MainHTMLString;

      // const TemplateFactory = new displayFactoryTwo();
  // let Template = TemplateFactory.create(settings);
  // console.log(TemplateFactory.create(settings));
  // export default Template;


  }

  const printMain = () => {
    return MainHTMLString;
  };
  const printFooter = () => {
    return FooterHTMLString;
  };
  const printBody = () => {
    return BodyHTMLString;
  };
  const printTemplate = string => {
    return displayTemplate(string);
  };

  var index = {

    printMain,
    printFooter,
    printBody,
    printTemplate
  };

  return index;

})(misc);
