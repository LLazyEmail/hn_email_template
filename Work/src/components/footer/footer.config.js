export const FOOTER_CHECKS = [
  {
    field: 'copyright',
    errorMessage: 'no copyright was passed in footer component',
    rules: ['required', 'nonEmptyString'],
  },
  {
    field: 'address',
    errorMessage: 'no address was passed',
    rules: ['required', 'nonEmptyString'],
  },
  {
    field: 'unsubscribe',
    errorMessage: 'no unsubscribe was passed',
    rules: ['required', 'nonEmptyString'],
  },
  {
    field: 'sponsor',
    errorMessage: 'no newsletterSponsorshipLink was passed',
    rules: ['required', 'nonEmptyString'],
  },
];

export const SOCIAL_LINKS = [
  {
    href: 'https://twitter.com/hackernoon',
    icon: 'https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/twitter.png',
    alt: 'Twitter',
  },
  {
    href: 'https://www.facebook.com/hackernoon',
    icon: 'https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/facebook.png',
    alt: 'Facebook',
  },
  {
    href: 'https://instagram.com/hackernoon/',
    icon: 'https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/instagram.png',
    alt: 'Instagram',
  },
  {
    href: 'https://hackernoon.com',
    icon: 'https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/link.png',
    alt: 'Website',
  },
  {
    href: 'https://www.youtube.com/channel/UChu5YILgrOYOfkfRlTB-D-g',
    icon: 'https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/youtube.png',
    alt: 'YouTube',
  },
  {
    href: 'mailto:stories@hackernoon.com',
    icon: 'https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/forwardtofriend.png',
    alt: 'Email',
  },
];
