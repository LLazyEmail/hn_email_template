import { config } from '../config';

export const unsubscribe = `<a href="${config.unsubscribe}"
style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #656565;font-weight: normal;text-decoration: underline;">
unsubscribe
</a>`;


const unsubscribeComponent = (unsubscribe) => {
    if (!unsubscribe) new Error('invalid unsubscribe');

    return `<a href="${unsubscribe}"
    style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #656565;font-weight: normal;text-decoration: underline;">
    unsubscribe
    </a>`;
}




export { unsubscribe, unsubscribeComponent };