const headStylesComponent = () => {
  return `<style type="text/css">
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
};

export default headStylesComponent;
