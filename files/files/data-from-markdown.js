/**
 * data-from-markdown.js
 * Data module derived from 01-hackernoon-source.md.
 *
 * The source markdown uses custom HackerNoon newsletter conventions:
 *   - "#~ text"          → preview text
 *   - "# Title"          → newsletter title (first heading after [separator])
 *   - "~[slogan][link][logo]" → ad block
 *   - standard markdown images → newsletter images
 *
 * This module exposes the same shape as files/files/data.js so it can be
 * consumed interchangeably by generate-template.js and the display pipeline.
 *
 * Note: the `images` array uses single-key wrapper objects (e.g. { image1: { src, link } })
 * to match the existing data.js contract. The display pipeline iterates with
 * `Object.values(entry)[0]` so this shape must be preserved for compatibility.
 *
 * Re-exported by Work/src/data-from-markdown.js for backward compatibility.
 */
export default {
  "preview": "As a developer, you might have dreamed of a Google created specifically for techies. Just imagine, a digital platform brimming with content for coders, including Q&A and job listings. Every question about programming answered. Each inextricable bug is solved. A larger audience of qualified experts come-at-able. Sounds dreamlike, right?",
  "title": "Secrets Of High-Performing Teams: Part II",
  "ads": [
    {
      "slogan": "The security-as-code solution for developers"
    },
    {
      "link": "https://bit.ly/3n9CgbE"
    },
    {
      "logo": "https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/logos/thematic/2020/October/Bridgecrew_stacked.jpg"
    }
  ],
  "images": [
    {
      "image1": {
        "src": "https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2020/november/18.11/image3.gif",
        "link": "https://media.giphy.com/media/QNFhOolVeCzPQ2Mx85/giphy.gif"
      }
    },
    {
      "image2": {
        "src": "https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2020/november/18.11/image4.gif",
        "link": "https://media.giphy.com/media/l2JeierkQlHpJsGWY/giphy.gif"
      }
    },
    {
      "image3": {
        "src": "https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2020/november/18.11/image6.gif",
        "link": "https://media.giphy.com/media/PvvSfSDFoAL5e/giphy.gif"
      }
    },
    {
      "image4": {
        "src": "https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2020/november/18.11/image1.gif",
        "link": "https://media.giphy.com/media/3oFzmjFxbBiPQW4qVa/giphy.gif"
      }
    },
    {
      "image5": {
        "src": "https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2020/november/18.11/image5.gif",
        "link": "https://media.giphy.com/media/3orieTeAMaKc4yhwmk/giphy.gif"
      }
    }
  ]
}
