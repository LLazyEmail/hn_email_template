import headingComponent from '../src/components/heading';
import imageComponent from '../src/components/image';
import italicComponent from '../src/components/italic';
import linkComponent from '../src/components/link';
import listComponent from '../src/components/list';
import listItemComponent from '../src/components/listItem';
import titleComponent from '../src/components/mainTitle';
import paragraphComponent from '../src/components/paragraph';
import separatorComponent from '../src/components/separator';
import strongComponent from '../src/components/strong';
import subtitleComponent from '../src/components/subtitle';

// ---------------------------------------------------------------------------
// headingComponent
// ---------------------------------------------------------------------------
describe('headingComponent', () => {
  test('renders an <h3> element', () => {
    const html = headingComponent({ content: 'Test Heading' });
    expect(html).toContain('<h3');
    expect(html).toContain('</h3>');
  });

  test('injects content inside the element', () => {
    const html = headingComponent({ content: 'My Heading' });
    expect(html).toContain('My Heading');
  });

  test('contains expected font-size style', () => {
    const html = headingComponent({ content: 'x' });
    expect(html).toContain('font-size:18px');
  });

  test('contains expected font-weight style', () => {
    const html = headingComponent({ content: 'x' });
    expect(html).toContain('font-weight: bold');
  });

  test('snapshot', () => {
    expect(headingComponent({ content: 'Snapshot Heading' })).toMatchSnapshot();
  });
});

// ---------------------------------------------------------------------------
// titleComponent (mainTitle)
// ---------------------------------------------------------------------------
describe('titleComponent', () => {
  test('renders an <h1> element', () => {
    const html = titleComponent({ content: 'Newsletter Title' });
    expect(html).toContain('<h1');
    expect(html).toContain('</h1>');
  });

  test('injects content inside the element', () => {
    const html = titleComponent({ content: 'Breaking News' });
    expect(html).toContain('Breaking News');
  });

  test('contains 30px inner font-size span', () => {
    const html = titleComponent({ content: 'x' });
    expect(html).toContain('font-size:30px');
  });

  test('snapshot', () => {
    expect(titleComponent({ content: 'Snapshot Title' })).toMatchSnapshot();
  });
});

// ---------------------------------------------------------------------------
// subtitleComponent
// ---------------------------------------------------------------------------
describe('subtitleComponent', () => {
  test('renders a <p> element', () => {
    const html = subtitleComponent({ content: 'Intro line' });
    expect(html).toContain('<p');
    expect(html).toContain('</p>');
  });

  test('injects content inside the element', () => {
    const html = subtitleComponent({ content: 'Section intro' });
    expect(html).toContain('Section intro');
  });

  test('wraps content in <strong>', () => {
    const html = subtitleComponent({ content: 'Bold intro' });
    expect(html).toContain('<strong');
    expect(html).toContain('</strong>');
  });

  test('contains 17px inner font-size span', () => {
    const html = subtitleComponent({ content: 'x' });
    expect(html).toContain('font-size:17px');
  });

  test('snapshot', () => {
    expect(subtitleComponent({ content: 'Snapshot Subtitle' })).toMatchSnapshot();
  });
});

// ---------------------------------------------------------------------------
// paragraphComponent
// ---------------------------------------------------------------------------
describe('paragraphComponent', () => {
  test('renders a <div> element', () => {
    const html = paragraphComponent({ content: 'Hello' });
    expect(html).toContain('<div');
    expect(html).toContain('</div>');
  });

  test('injects content inside the element', () => {
    const html = paragraphComponent({ content: 'Paragraph text.' });
    expect(html).toContain('Paragraph text.');
  });

  test('contains 16px inner font-size span', () => {
    const html = paragraphComponent({ content: 'x' });
    expect(html).toContain('font-size:16px');
  });

  test('snapshot', () => {
    expect(paragraphComponent({ content: 'Snapshot paragraph.' })).toMatchSnapshot();
  });
});

// ---------------------------------------------------------------------------
// linkComponent
// ---------------------------------------------------------------------------
describe('linkComponent', () => {
  test('renders an <a> element', () => {
    const html = linkComponent({ href: 'https://example.com', content: 'click' });
    expect(html).toContain('<a ');
    expect(html).toContain('</a>');
  });

  test('href attribute is injected', () => {
    const html = linkComponent({ href: 'https://hackernoon.com', content: 'link' });
    expect(html).toContain('href="https://hackernoon.com"');
  });

  test('opens in new tab (target="_blank")', () => {
    const html = linkComponent({ href: 'https://example.com', content: 'link' });
    expect(html).toContain('target="_blank"');
  });

  test('link text content is present', () => {
    const html = linkComponent({ href: 'https://example.com', content: 'Read more' });
    expect(html).toContain('Read more');
  });

  test('contains bold + underline style', () => {
    const html = linkComponent({ href: '#', content: 'x' });
    expect(html).toContain('font-weight: bold');
    expect(html).toContain('text-decoration: underline');
  });

  test('snapshot', () => {
    expect(linkComponent({ href: 'https://example.com', content: 'Snapshot link' })).toMatchSnapshot();
  });
});

// ---------------------------------------------------------------------------
// separatorComponent
// ---------------------------------------------------------------------------
describe('separatorComponent', () => {
  test('renders a <div> element', () => {
    const html = separatorComponent();
    expect(html).toContain('<div');
    expect(html).toContain('</div>');
  });

  test('contains the *** separator text', () => {
    const html = separatorComponent();
    expect(html).toContain('***');
  });

  test('renders consistently without arguments', () => {
    expect(separatorComponent()).toBe(separatorComponent());
  });

  test('snapshot', () => {
    expect(separatorComponent()).toMatchSnapshot();
  });
});

// ---------------------------------------------------------------------------
// strongComponent
// ---------------------------------------------------------------------------
describe('strongComponent', () => {
  test('renders a <strong> element', () => {
    const html = strongComponent({ content: 'bold text' });
    expect(html).toContain('<strong');
    expect(html).toContain('</strong>');
  });

  test('injects content inside the element', () => {
    const html = strongComponent({ content: 'important' });
    expect(html).toContain('important');
  });

  test('snapshot', () => {
    expect(strongComponent({ content: 'Snapshot bold' })).toMatchSnapshot();
  });
});

// ---------------------------------------------------------------------------
// italicComponent
// ---------------------------------------------------------------------------
describe('italicComponent', () => {
  test('renders an <i> element', () => {
    const html = italicComponent({ content: 'italicized' });
    expect(html).toContain('<i>');
    expect(html).toContain('</i>');
  });

  test('injects content inside the element', () => {
    const html = italicComponent({ content: 'emphasis text' });
    expect(html).toContain('emphasis text');
  });

  test('snapshot', () => {
    expect(italicComponent({ content: 'Snapshot italic' })).toMatchSnapshot();
  });
});

// ---------------------------------------------------------------------------
// listItemComponent
// ---------------------------------------------------------------------------
describe('listItemComponent', () => {
  test('renders an <li> element', () => {
    const html = listItemComponent({ content: 'item' });
    expect(html).toContain('<li');
    expect(html).toContain('</li>');
  });

  test('injects content inside the element', () => {
    const html = listItemComponent({ content: 'List entry text' });
    expect(html).toContain('List entry text');
  });

  test('contains a nested <p> element', () => {
    const html = listItemComponent({ content: 'item' });
    expect(html).toContain('<p');
    expect(html).toContain('</p>');
  });

  test('snapshot', () => {
    expect(listItemComponent({ content: 'Snapshot list item' })).toMatchSnapshot();
  });
});

// ---------------------------------------------------------------------------
// listComponent
// ---------------------------------------------------------------------------
describe('listComponent', () => {
  test('renders a <ul> element', () => {
    const html = listComponent({ content: '<li>item</li>' });
    expect(html).toContain('<ul');
    expect(html).toContain('</ul>');
  });

  test('injects content inside the element', () => {
    const html = listComponent({ content: '<li>my item</li>' });
    expect(html).toContain('<li>my item</li>');
  });

  test('renders multiple items passed as content', () => {
    const items = '<li>one</li><li>two</li><li>three</li>';
    const html = listComponent({ content: items });
    expect(html).toContain('<li>one</li>');
    expect(html).toContain('<li>two</li>');
    expect(html).toContain('<li>three</li>');
  });

  test('snapshot', () => {
    const item = listItemComponent({ content: 'Snapshot item' });
    expect(listComponent({ content: item })).toMatchSnapshot();
  });
});

// ---------------------------------------------------------------------------
// imageComponent
// ---------------------------------------------------------------------------
describe('imageComponent', () => {
  test('renders an <img> element', () => {
    const html = imageComponent({ src: 'photo.jpg', altText: 'Photo' });
    expect(html).toContain('<img');
  });

  test('src attribute is injected', () => {
    const html = imageComponent({ src: 'https://example.com/img.png', altText: 'Alt' });
    expect(html).toContain('src="https://example.com/img.png"');
  });

  test('alt attribute is injected', () => {
    const html = imageComponent({ src: 'img.png', altText: 'My Alt Text' });
    expect(html).toContain('alt="My Alt Text"');
  });

  test('wraps image in an anchor element', () => {
    const html = imageComponent({ src: 'img.png', altText: 'alt' });
    expect(html).toContain('<a ');
    expect(html).toContain('</a>');
  });

  test('snapshot', () => {
    expect(imageComponent({ src: 'snapshot.jpg', altText: 'Snapshot image' })).toMatchSnapshot();
  });
});
