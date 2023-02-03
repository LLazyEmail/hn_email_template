const newsletterSponsorshipLinkComponent = ({contact}) => {
  if (!contact) {
    throw new Error('no contact was passed');
  }

  return `<div style="text-align: center;">
  <br>
  <a href="${contact}" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #656565;font-weight: normal;text-decoration: underline;">
    Click Here To Sponsor A Newsletter by Hacker Noon
  </a>
  </div>`;
};

export default newsletterSponsorshipLinkComponent;
