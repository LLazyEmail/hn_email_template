// https://www.codegrepper.com/code-examples/javascript/jest+test+if+method+exists

import { BodyHTMLString } from '../src/display/displayBody';
import ContentHTMLString from '../src/display/displayContent';
import { FooterHTMLString } from '../src/display/displayFooter';
import HeadHTMLString from '../src/display/displayHead';
import { MainHTMLString } from '../src/display/displayMain';


describe('all display methods must be initialized', () => {
  // test('display body', () => {
  //   expect(BodyHTMLString === true).toBe(true);
  // });

  test('display body', () => {
    expect(typeof BodyHTMLString === 'string').toBe(true);
  });


  test('display content', () => {
    expect(typeof ContentHTMLString === 'string').toBe(true);
  });


  test('display footer', () => {
    expect(typeof FooterHTMLString === 'string').toBe(true);
  });


  test('display head', () => {
    expect(typeof HeadHTMLString === 'string').toBe(true);
  });


  test('display main', () => {
    expect(typeof MainHTMLString === 'string').toBe(true);
  });


});

// test('make sure it returns something', () => {
//   expect(!foo()).toBe(false);
// });
// test('make sure it returns string', () => {
//   var val = foo();
//   expect(typeof val === 'string').toBe(true);
// });
// test('make sure it returns string', () => {
//   expect(foo()==='foo() is working').toBe(true);
// });

// jest.mock("../foo");
// const foo = require("../foo");

// test('make sure foo is called', () => {
//   expect(foo).toBeCalled();
// });
// test('make sure foo run only once', () => {
//    expect(foo.mock.calls.length).toBe(1);
// });


// jest.mock("../foo");
// jest.mock("../bar");

// const foo = require("../foo");
// const bar = require("../bar");

// test("functions are called", done => {
//   require("../index");
//   expect(foo.mock.calls.length).toBe(1);
//   expect(bar.mock.calls.length).toBe(1);
//   done();
// });
