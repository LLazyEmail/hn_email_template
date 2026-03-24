import { assertNonEmptyString } from '../validation';

const italicComponent = ({content}) => {
    assertNonEmptyString('italicComponent', 'content', content);
    return `<i>${content}</i>`;
}

export default italicComponent;
