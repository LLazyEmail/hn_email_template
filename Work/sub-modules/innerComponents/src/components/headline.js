import { assertNonEmptyString } from '../validation';

const headlineComponent = (content) => {
    assertNonEmptyString('headlineComponent', 'content', content);
    return `content`;
}

export default headlineComponent;