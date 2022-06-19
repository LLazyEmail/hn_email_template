import misc from 'atherdon-newsletter-js-layouts-misc';

// import factory from './factory';
import displayFactoryTwo from './factoryTwo';


import footerComponent from "../components/footer";


//--------
// import config from "../config";

// console.log(config)

let mailingAddress = "PO Box 2206, Edwards CO, 81632, U.S.A.";
let contact =  'https://sponsor.hackernoon.com/newsletter?ref=noonifications.tech';



const {
  addressComponent,
  copyrightsComponent,
  
  newsletterSponsorshipLinkComponent,
  unsubscribeComponent,
} = misc;


const addon1 = {
  address: addressComponent(mailingAddress),
  sponsor: newsletterSponsorshipLinkComponent(contact),

  // copyright: copyrightsComponent(),
  // unsubscribe: unsubscribeComponent()
}



//variant one
const settings = {
  component: footerComponent,
  params: addon1,
  subcomponents: {  
    copyrightsComponent, 
    unsubscribeComponent, 

    // newsletterSponsorshipLinkComponent 
  }
  
}


const DDDDM = new displayFactoryTwo();

export default DDDDM.create(settings);
// console.log(DDDDM);

// export default DDDDM;



// const DisplayFooter = {
//     component: footerComponent,
//     params: { copyrights, address, unsubscribe, newsletterSponsorshipLink },

//     checks: () => [
//         // checkingTitle(this.params.title)
//     ]
    
//   }
