import { writeGeneratedFile } from 'markup-generator';

import {BodyHTMLString} from '../../src/display/sections/body';
// import { BodyHTMLString } from '../../src/display/sections/body';


describe('body display method must be initialized', () => {
  
   // test('display body', () => {
  //   expect(BodyHTMLString === true).toBe(true);
  // });

  test('display body', () => {
    expect(typeof BodyHTMLString === 'string').toBe(true);
  });
  
});


describe('writing components into files', () => {
  
    test('write body', async () => {
      const string5 = BodyHTMLString;

      // console.log(string);
      expect(BodyHTMLString).toBeDefined();

      await writeGeneratedFile({ content: string5, prefix: 'HN-Body' });
  });
});
