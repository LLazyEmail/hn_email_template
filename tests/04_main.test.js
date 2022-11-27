import { writingFile } from 'markup-generator';

import { MainHTMLString } from '../src/display/displayMain';


describe('main display method must be initialized', () => {
  
    test('display main', () => {
    expect(typeof MainHTMLString === 'string').toBe(true);
  });
  
  
});


describe('writing components into files', () => {
  test('write main', () => {
    const string3 = MainHTMLString;

    // console.log(string);
    expect(MainHTMLString).toBeDefined();

    writingFile(string3, 'HN-Main');
  });
  
});


