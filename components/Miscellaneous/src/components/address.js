// import { mailingAddress } from '../config';
// import { config } from '../config';

const addressComponent = ({mailingAddress}) => {
  if (!mailingAddress) {
    throw new Error('no mailingAddress was passed');
  }

  return `<strong>Our mailing address is:</strong>
    <br>
    ${mailingAddress}`;
};

export default addressComponent;
