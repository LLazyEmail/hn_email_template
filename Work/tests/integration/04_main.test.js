import { writeGeneratedFile } from 'markup-generator';

import { MainHTMLString } from '../../src/display/sections/main';


describe('main display method must be initialized', () => {
  
    test('display main', () => {
    expect(typeof MainHTMLString === 'string').toBe(true);
  });
  
  
});


describe('writing components into files', () => {
  test('write main', async () => {
    const string3 = MainHTMLString;

    // console.log(string);
    expect(MainHTMLString).toBeDefined();

    await writeGeneratedFile({ content: string3, prefix: 'HN-Main' });
  });
  
});


