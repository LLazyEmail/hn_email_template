import misc from 'atherdon-newsletter-js-layouts-misc';
// import displayFactoryTwoPointFive from '../factory';
import { displayFactoryTwo } from 'email-template-object';

import footerComponent from '../components/footer';

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
const settings = {
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

const FooterHTMLString = FooterFactory.create(settings);

// console.log(FooterHTMLString);

export {
  FooterFactory,
  settings,
  FooterHTMLString
}

// const DisplayFooter = {

//     checks: () => [  checkingTitle(this.params.title)
