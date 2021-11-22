// import innerComponents from 'atherdon-newsletter-js-layouts-body';

import { printMain, printFooter, printBody } from './methods';


// import fullTemplateOLD from './depricated/full-template';
// import fullTemplate from './depricated/tempFT';




import generateTemplateComponent from './templates/generateTemplate'
import generateEmptyTemplateComponent from './templates/emptyTemplate'




import { main } from './templates/main';


export default {
//   body,

//   //spread misc
//   address,
//   copyrights,
//   fonts,
//   headStyles,
//   newsletterSponsorshipLink,
//   unsubscribe,
//   head,

  
  // fullTemplateOLD,
  // fullTemplate,



  // headline,
  // logoBottom,
  // logoTop,
  // previewText,
  // section,
  // sponsor,
  // ctaList,

  
  generateTemplateComponent,
  generateEmptyTemplateComponent,
  
  
  printMain, printFooter, printBody
};
