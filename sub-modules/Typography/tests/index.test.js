import headingComponent  from '../src/components/heading';
import imageComponent  from '../src/components/image';
import italicComponent  from '../src/components/italic';
import linkComponent from '../src/components/link';
import listComponent  from '../src/components/list';
import listItemComponent from '../src/components/listItem';
import titleComponent  from '../src/components/mainTitle';
import paragraphComponent from '../src/components/paragraph';
import strongComponent   from '../src/components/strong';
import subtitleComponent from '../src/components/subtitle';
import separatorComponent from '../src/components/separator';


describe('all display methods must be initialized', () => {
    test('every component returns a non-empty HTML string', () => {
      expect(typeof headingComponent({ content: 'Heading' })).toBe('string');
      expect(typeof imageComponent({ src: 'img.png', altText: 'alt' })).toBe('string');
      expect(typeof italicComponent({ content: 'italic' })).toBe('string');
      expect(typeof linkComponent({ href: 'https://example.com', content: 'link' })).toBe('string');
      expect(typeof listComponent({ content: '<li>item</li>' })).toBe('string');
      expect(typeof listItemComponent({ content: 'item' })).toBe('string');
      expect(typeof titleComponent({ content: 'Title' })).toBe('string');
      expect(typeof paragraphComponent({ content: 'paragraph' })).toBe('string');
      expect(typeof strongComponent({ content: 'bold' })).toBe('string');
      expect(typeof subtitleComponent({ content: 'Subtitle' })).toBe('string');
      expect(typeof separatorComponent()).toBe('string');
    });
});