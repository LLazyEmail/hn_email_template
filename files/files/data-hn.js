/**
 * data-hn.js
 * HackerNoon newsletter template dataset (JSON-authored variant).
 *
 * This file holds the same dataset as files/files/data.js and is the
 * source of truth for Work/src/data.js.  It is kept as a separate named
 * file under files/files/ so that all three content sources live together
 * in one place and can be referenced or compared without ambiguity.
 *
 * Shape:
 *   - preview  {string}  — preview / preheader text shown in inbox summary
 *   - title    {string}  — newsletter title / subject
 *   - ads      {Array}   — ad block descriptors ({ slogan?, link?, logo? })
 *   - images   {Array}   — image blocks; each entry is a single-key wrapper object
 *                          (e.g. { image1: { src, link } }) to match the display-pipeline contract
 *
 * Re-exported by Work/src/data.js for backward compatibility.
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
    },
    {
      "image6": {
        "src": "https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2020/november/18.11/image6.gif",
        "link": "https://media.giphy.com/media/PvvSfSDFoAL5e/giphy.gif"
      }
    }
  ]
}
