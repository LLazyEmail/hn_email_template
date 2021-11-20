import innerComponents from 'atherdon-newsletter-js-layouts-body';

import { printMain, printFooter, printBody } from './methods';

// const {
//   headline,

//   logoBottom,
//   logoTop,
//   previewText,
//   section,
//   sponsor,

//   ctaList,

  
//   // headlineComponent,
//   // logoBottomComponent,
//   // logoTopComponent,
//   // previewTextComponent,
//   // sectionComponent,
//   // sponsorComponent,
//   // ctaComponent

// } = innerComponents;


// import fullTemplateOLD from './FULL-TEMPLATE-MISTAKE/full-template';
// import fullTemplate from './FULL-TEMPLATE-MISTAKE/tempFT';




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
