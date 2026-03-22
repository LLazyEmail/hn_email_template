import { assertNonEmptyString } from '../validation';

const addressComponent = ({mailingAddress}) => {
  assertNonEmptyString('addressComponent', 'mailingAddress', mailingAddress);

  return `<strong>Our mailing address is:</strong>
    <br>
    ${mailingAddress}`;
};

export default addressComponent;
