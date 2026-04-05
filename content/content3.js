/**
 * content3.js
 * HackerNoon newsletter template dataset — markdown-derived variant.
 *
 * This dataset was derived from 01-hackernoon-source.md using custom
 * HackerNoon newsletter markdown conventions:
 *   - "#~ text"             → preview text
 *   - "# Title"             → newsletter title (first heading after [separator])
 *   - "~[slogan][link][logo]" → ad block
 *   - standard markdown images → newsletter images
 *
 * Previously located at files/data-from-markdown.js (which now re-exports from here).
 *
 * Note: this variant contains 5 images (not 6) because the source markdown file
 * (01-hackernoon-source.md) references only 5 distinct image blocks. The sixth
 * image in content1.js and content2.js is a duplicate added in the JSON-authored
 * variants.
 *
 * Shape:
 *   - preview  {string}  — preview / preheader text shown in inbox summary
 *   - title    {string}  — newsletter title / subject
 *   - ads      {Array}   — ad block descriptors ({ slogan?, link?, logo? })
 *   - images   {Array}   — image blocks; each entry is a single-key wrapper object
 *                          (e.g. { image1: { src, link } }) to match the display-pipeline contract
 *
 * See also:
 *   - content/content1.js  (canonical dataset)
 *   - content/content2.js  (HN JSON-authored variant)
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
