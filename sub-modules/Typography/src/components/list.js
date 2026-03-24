import { assertNonEmptyString } from '../validation';

const listComponent = ({content}) => {
    assertNonEmptyString('listComponent', 'content', content);
    return `<ul dir="ltr">${content}</ul>`;
}

export default listComponent;
