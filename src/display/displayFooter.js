import footerComponent from "../components/footer";

import misc from 'atherdon-newsletter-js-layouts-misc';

const {
  address,
  copyrights,
  
  newsletterSponsorshipLink,
  unsubscribe,
} = misc;



const DisplayFooter = {
    component: footerComponent,
    params: { copyrights, address, unsubscribe, newsletterSponsorshipLink },
    display: () => {
        
  //         return footerComponent(copyrights, address, unsubscribe, newsletterSponsorshipLink)
//         return footerComponent(this.params)
        
        console.log( this.component );
  //     return this.component(....)
        
    },
    checks: () => [
        // checkingTitle(this.params.title)
    ]
    
  }
  
  export default DisplayFooter;