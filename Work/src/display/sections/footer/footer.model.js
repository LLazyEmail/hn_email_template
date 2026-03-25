import misc from 'atherdon-newsletter-js-layouts-misc';

const {
  addressComponent,
  copyrightsComponent,
  newsletterSponsorshipLinkComponent,
  unsubscribeComponent,
} = misc;

const mailingAddress = 'PO Box 2206, Edwards CO, 81632, U.S.A.';
const contact = 'https://sponsor.hackernoon.com/newsletter?ref=noonifications.tech';
const unsubscribeLink = 'https://sponsor.hackernoon.com/contact';

export const footerModelDefaults = {
  address: addressComponent({ mailingAddress }),
  sponsor: newsletterSponsorshipLinkComponent({ contact }),
  copyright: copyrightsComponent(),
  unsubscribe: unsubscribeComponent({ unsubscribe: unsubscribeLink }),
};
