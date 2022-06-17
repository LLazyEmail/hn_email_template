// import factory from './factory';
import displayFactoryTwo from './factoryTwo';


import footerComponent from "../components/footer";

import misc from 'atherdon-newsletter-js-layouts-misc';

const {
  addressComponent,
  copyrightsComponent,
  
  newsletterSponsorshipLinkComponent,
  unsubscribeComponent,
} = misc;



//variant one
const settings = {
  component: footerComponent,
  params: { },
  subcomponents: {  
    copyrightsComponent, addressComponent, 
    unsubscribeComponent, newsletterSponsorshipLinkComponent 
  }
  
}


const DDDDM = new displayFactoryTwo();

DDDDM.create(settings);



// const DisplayFooter = {
//     component: footerComponent,
//     params: { copyrights, address, unsubscribe, newsletterSponsorshipLink },
//     display: () => {
        
//   //         return footerComponent(copyrights, address, unsubscribe, newsletterSponsorshipLink)
// //         return footerComponent(this.params)
        
//         // console.log( this.component );
//   //     return this.component(....)
        
//     },
//     checks: () => [
//         // checkingTitle(this.params.title)
//     ]
    
//   }
  
//   export default DisplayFooter;