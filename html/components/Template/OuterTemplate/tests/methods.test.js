// https://github.com/abritinthebay/jest-tobetype

const { printMain, printFooter, printBody } = require('../src/methods');

describe('test helpers', () => {
  test('rendering Main Component', () => {


      const string = printMain();

      console.log(string);

      expect(printMain()).toBeDefined();

      // expect(typeof string).toBe('string');

  });


  test('rendering Body Component', () => {


      const string = printBody();

      console.log(string);

      expect(printMain()).toBeDefined();

      // expect(typeof string).toBe('string');


  });


  test('rendering Footer Component', () => {


    const string = printFooter();

    console.log(string);

    expect(printMain()).toBeDefined();

    // expect(typeof string).toBe('string');


  });

});



