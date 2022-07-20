import misc from 'atherdon-newsletter-js-layouts-misc';

import { displayFactoryTwo } from 'email-template-object';

import footerComponent from '../components/footer';

//--------
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
  subcomponents: {
    copyrightsComponent,
    unsubscribeComponent,

    // newsletterSponsorshipLinkComponent
  },
};

const FooterFactory = new displayFactoryTwo();
// console.log(FooterFactory.create(settings));

export default FooterFactory.create(settings);

// const DisplayFooter = {

//     checks: () => [
//         // checkingTitle(this.params.title)
