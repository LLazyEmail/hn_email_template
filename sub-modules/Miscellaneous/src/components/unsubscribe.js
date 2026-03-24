import { assertNonEmptyString } from '../validation';

const unsubscribeComponent = ({unsubscribe}) => {
  assertNonEmptyString('unsubscribeComponent', 'unsubscribe', unsubscribe);

  return `<a href="${unsubscribe}"
    style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #656565;font-weight: normal;text-decoration: underline;">
    unsubscribe
    </a>`;
};

export default unsubscribeComponent;
