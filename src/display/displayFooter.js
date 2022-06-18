import misc from 'atherdon-newsletter-js-layouts-misc';

// import factory from './factory';
import displayFactoryTwo from './factoryTwo';


import footerComponent from "../components/footer";

import config from "../config";

const {
  addressComponent,
  copyrightsComponent,
  
  newsletterSponsorshipLinkComponent,
  unsubscribeComponent,
} = misc;


const addon1 = {
  address: addressComponent(config.mailingAddress),

}



//variant one
const settings = {
  component: footerComponent,
  params: addon1,
  subcomponents: {  
    copyrightsComponent, 
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