import innerComponents from 'atherdon-newsletter-js-layouts-body';

const {
  headline,

  logoBottom,
  logoTop,
  previewText,
  section,
  sponsor,

  ctaList,

  
  headlineComponent,
  logoBottomComponent,
  logoTopComponent,
  previewTextComponent,
  sectionComponent,
  sponsorComponent,
  ctaComponent
} = innerComponents;

// import footer from 'atherdon-newsletter-js-layouts-footer';

import footer from './templates/footer';

// import {
//     address,
//     copyrights,
//     fonts,
//     headStyles,
//     newsletterSponsorshipLink,
//     unsubscribe,
//     head
// } from 'atherdon-newsletter-js-layouts-misc';


import typography from 'atherdon-newsletter-js-layouts-typography';



import fullTemplateOLD from './FULL-TEMPLATE-MISTAKE/full-template';
import fullTemplate from './FULL-TEMPLATE-MISTAKE/tempFT';




import generateTemplateComponent from './templates/generateTemplate'
import generateEmptyTemplateComponent from './templates/emptyTemplate'
// ----

// const {
//   address,
//   copyrights,
//   fonts,
//   headStyles,
//   newsletterSponsorshipLink,
//   unsubscribe,
//   head
// } = misc;




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


  typography,
  main,
  
  fullTemplateOld,


  fullTemplate,


  footer,



  headline,
  logoBottom,
  logoTop,
  previewText,
  section,
  sponsor,
  ctaList,

  
  generateTemplateComponent,
  generateEmptyTemplateComponent
};
