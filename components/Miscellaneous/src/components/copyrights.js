const getYear = () => {
  return new Date().getFullYear();
};

const copyrightsComponent = () => {
  return `<em>Copyright © ${getYear()} Hacker Noon. All rights reserved.</em>`;
};

export default copyrightsComponent;
