import misc from 'atherdon-newsletter-js-layouts-misc';
import footerComponent from '../components/footer';
// import { displayFactoryTwo } from 'email-template-object';
import { createDisplaySection } from './createDisplaySection';
import { buildFooterModel } from './models/buildFooterModel';

const {
  addressComponent,
  copyrightsComponent,
  newsletterSponsorshipLinkComponent,
  unsubscribeComponent,
} = misc;

const mailingAddress = 'PO Box 2206, Edwards CO, 81632, U.S.A.';
const contact = 'https://sponsor.hackernoon.com/newsletter?ref=noonifications.tech';
const unsubscribeLink = 'https://sponsor.hackernoon.com/contact';

const defaults = {
  address: addressComponent({ mailingAddress }),
  sponsor: newsletterSponsorshipLinkComponent({ contact }),
  copyright: copyrightsComponent(),
  unsubscribe: unsubscribeComponent({ unsubscribeLink }),
};

export const footerSectionConfig = {
  sectionName: 'displayFooter',
  requiredFields: ['address', 'sponsor', 'copyright', 'unsubscribe'],
  defaults,
  mapToFactorySettings: buildFooterModel,
  render: (params) => footerComponent(params),
};

export const displayFooter = createDisplaySection(footerSectionConfig);

const settings = {
  component: footerComponent,
  params: { ...defaults },
};

const FooterHTMLString = displayFooter();

export {
  settings,
  FooterHTMLString,
};
