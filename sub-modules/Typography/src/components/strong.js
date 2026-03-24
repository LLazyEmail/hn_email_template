import { assertNonEmptyString } from '../validation';

const strongComponent = ({content}) => {
    assertNonEmptyString('strongComponent', 'content', content);
    return `<strong style="font-weight: bolder;">${content}</strong>`;
}

export default strongComponent;
