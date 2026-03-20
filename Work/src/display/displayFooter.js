import misc from 'atherdon-newsletter-js-layouts-misc';
import footerComponent from '../components/footer';
// import { displayFactoryTwo } from 'email-template-object';
import { createDisplaySection } from './createDisplaySection';

const {
  addressComponent,
  copyrightsComponent,
  newsletterSponsorshipLinkComponent,
  unsubscribeComponent,
} = misc;

const defaults = {
  address: addressComponent({ mailingAddress: 'PO Box 2206, Edwards CO, 81632, U.S.A.' }),
  sponsor: newsletterSponsorshipLinkComponent({ contact: 'https://sponsor.hackernoon.com/newsletter?ref=noonifications.tech' }),
  copyright: copyrightsComponent(),
  unsubscribe: unsubscribeComponent({ unsubscribeLink: 'https://sponsor.hackernoon.com/contact' }),
};

export const displayFooter = createDisplaySection({
  sectionName: 'displayFooter',
  requiredFields: ['address', 'sponsor', 'copyright', 'unsubscribe'],
  defaults,
  render: (params) => footerComponent(params),
});

const settings = {
  component: footerComponent,
  params: { ...defaults },
};

const FooterHTMLString = displayFooter();

export {
  settings,
  FooterHTMLString,
};
