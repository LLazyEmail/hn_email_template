const { printMain, printFooter, printBody } = require('../src/methods');

describe('test helpers', () => {
  test('GOOOOOOOOOOOOOOO', () => {


      const string = printMain();

      console.log(string);

      expect(printMain()).toBeDefined();
    // const wrapper = replaceHTMLWrapper('strong', { content: 'hello world' });
    // expect(wrapper).toBe('<strong style=\"font-weight: bolder;\">hello world</strong>');



  });

//   test('GOOOOOOOOOOOOOOO', () => {


//     const string = printMain();

//     console.log(string);

//     expect(printMain()).toBeDefined();
//   // const wrapper = replaceHTMLWrapper('strong', { content: 'hello world' });
//   // expect(wrapper).toBe('<strong style=\"font-weight: bolder;\">hello world</strong>');



// });

// test('GOOOOOOOOOOOOOOO', () => {


//   const string = printMain();

//   console.log(string);

//   expect(printMain()).toBeDefined();
// // const wrapper = replaceHTMLWrapper('strong', { content: 'hello world' });
// // expect(wrapper).toBe('<strong style=\"font-weight: bolder;\">hello world</strong>');



// });
});



