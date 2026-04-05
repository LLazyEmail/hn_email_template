/**
 * data-markdown.js
 * Content extracted from Work/src/content-from-markdown.html (lines 30–225).
 *
 * Each entry in the array represents one content block from the newsletter body.
 * Block types:
 *   - "heading" — h-level heading; fields: level (number), html (inner HTML of the element)
 *   - "image"   — linked image;    fields: src, link, alt
 *   - "text"    — body copy;       fields: html (inner HTML of the <td> section)
 *
 * Preserve order matches the original HTML source so the array can be used
 * for rendering, comparison, or re-generation without further sorting.
 *
 * To generate an email template using the markdown-derived sources run:
 *   npm run generate:template -- --data=src/data-from-markdown.js \
 *     --content=src/content-from-markdown.html --out=generated/hn-markdown.html
 * (data-from-markdown.js supplies the title/preview/ads/images meta; this file
 *  supplies the body content blocks for rendering or comparison.)
 */
export default [
  // ── Article intro (lines 30–41) ────────────────────────────────────────────
  {
    type: "heading",
    level: 2,
    html: `This is our second newsletter in the series of Secrets of Top-Performing DevOps Teams.
          In the first part, we&#8217;ve got to grips with the
          <a href="https://hackernoon.com/devops-fundamentals-you-ever-wanted-to-know-zt2m3uh6">DevOps approach</a>
          and the way it has
          <a href="https://hackernoon.com/tagged/workflow">amplified the IT workflow</a>.`,
  },

  // ── Image 1 (lines 43–50) ──────────────────────────────────────────────────
  {
    type: "image",
    src: "https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2020/november/18.11/image3.gif",
    link: "https://media.giphy.com/media/QNFhOolVeCzPQ2Mx85/giphy.gif",
    alt: "Newsletter visual",
  },

  // ── Article body (lines 52–106) ────────────────────────────────────────────
  {
    type: "text",
    html: `<p>Here&#8217;s a quick reminder and a short introduction for the unaware:</p>
        <p>
          Tech role has germinated from
          <a href="https://hackernoon.com/search?query=horror">&#8220;help fix my laptop&#8221;</a>
          to &#8220;help me become the best.&#8221; While
          <a href="https://hackernoon.com/tagged/team-productivity">many dev teams are trapped firefighting</a>,
          leading teams <a href="https://hackernoon.com/tagged/business">align with the business</a>,
          <a href="https://hackernoon.com/tagged/agile">adopt agile principles</a> and automation, and lead the
          <a href="https://hackernoon.com/tagged/transformation">digital transformation</a>.
        </p>
        <p>
          What&#8217;s in it for <a href="https://hackernoon.com/tagged/devops">DevOps</a>, you&#8217;d ask?
          It&#8217;s simple: a robust DevOps team facilitates
          <a href="https://hackernoon.com/founders-guide-how-to-outsource-software-development-in-2020-y1473yr7">faster development</a>
          of new products and
          <a href="https://hackernoon.com/3-reasons-why-teams-fail-avx3ta7">easier maintenance</a>
          of existing deployments.
        </p>
        <p>
          Read between the lines &#8212; agile-based DevOps approach yields an increase in
          <a href="https://hackernoon.com/4-ways-startups-can-use-tech-and-automation-to-be-more-efficient-j3423w51">development productivity</a>.
          And with no silver bullet methods for improving IT
          <a href="https://hackernoon.com/if-formula-1-defined-efficiency-675z3yqd">efficiency</a>,
          perfecting DevOps might be your best shot.
        </p>
        <p>
          Without further ado, let&#8217;s dive into our top picks for
          <a href="https://hackernoon.com/devops-as-a-service-or-do-you-really-need-a-devops-team-cc4q32wj">DevOps team success</a>.
        </p>

        <h2 style="margin: 16px 0 10px 0;">Hacking Your Way Through to a High-Performing DevOps Team</h2>

        <p>
          <strong>1. <a href="https://hackernoon.com/3-easy-ways-to-improve-performance-of-your-python-code-dw183uzo">High-performing</a> teams put business first</strong>
        </p>
        <p>
          You&#8217;d say, a <a href="https://hackernoon.com/five-undervalued-data-points-for-emerging-businesses-5c2w3eun">revenue-first mindset</a>
          won&#8217;t get you the probity medal. However, it&#8217;s not our point. In fact, profitability should be
          your top of mind not for the sake of money only.
        </p>
        <p>
          Successful DevOps teams are more likely to tie their tech projects to revenue, mainly because it&#8217;s the
          #1 <a href="https://hackernoon.com/the-secret-of-growth-how-to-achieve-dollar1m-arr-in-6-months-vi1832mp">metric for their performance</a>.
          As a result, teams that are business aligned tend to prioritize projects with business management and use
          business and tech scorecards to measure success. Therefore, just a simple shift from an
          <a href="https://hackernoon.com/data-that-you-need-is-worth-gold-not-data-that-you-already-have-5c60f9345c6b">activity-driven mindset</a>
          to a <a href="https://hackernoon.com/4-business-lessons-from-the-failure-of-wework-the-47-billion-dollar-tech-company-3ahi3201">revenue-first approach</a>
          can guarantee a positive change in your team productivity and overall result.
        </p>
        <p><em>(We&#8217;re not implying that you should ditch the <a href="https://hackernoon.com/24-customer-retention-strategies-eq1y3ym0">customer-centric action</a>, don&#8217;t compare apples and oranges)</em></p>`,
  },

  // ── Image 2 (lines 108–115) ────────────────────────────────────────────────
  {
    type: "image",
    src: "https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2020/november/18.11/image4.gif",
    link: "https://media.giphy.com/media/l2JeierkQlHpJsGWY/giphy.gif",
    alt: "Newsletter visual",
  },

  // ── Point 2 (lines 117–145) ────────────────────────────────────────────────
  {
    type: "text",
    html: `<p>
          <strong>2. They assign end-to-end responsibility</strong>
        </p>
        <p>
          Separating <a href="https://hackernoon.com/ownership-and-responsibility-in-software-development-teams-6wr3n17">development</a>
          and <a href="https://hackernoon.com/0-to-90-bn-in-a-decade-uber-takeaways-for-startups-and-roadblocks-ahead-for-uber-b17c3bee2a3f">operations</a>
          can present potential issues and pitfalls like
          <a href="https://hackernoon.com/the-surprise-outcome-of-measuring-our-pull-requests-process-4v683tbw">performance problems</a>
          and inconsistent environments. In DevOps, both groups cooperate as a team that&#8217;s
          <a href="https://hackernoon.com/take-responsibility-dont-blame-it-on-the-users-hoz3n2u">completely responsible</a>
          for a product from beginning to end.
        </p>
        <p>
          Unlike the traditional approach or a
          <a href="https://hackernoon.com/good-ux-manager-bad-ux-manager-33df51f7367c">low-performing team</a>,
          where each team member is accountable for their own role, the perfect DevOps team
          <a href="https://hackernoon.com/how-to-prioritize-product-requirements-77d139b4a343">obliterates those silos</a>
          and makes an excellent result the focus of the entire crew.
        </p>
        <p>
          A <a href="https://hackernoon.com/highest-paid-software-developer-c66b9f4cc53e">developer is no longer just a developer</a>
          in charge of X lines of code. A tester is no longer accountable for the expected functionality.
          A high-performing team wears multiple hats and has got it
          <a href="https://hackernoon.com/dont-optimize-things-that-dont-work-yet-957j30qv">ALL covered</a>.
        </p>`,
  },

  // ── Image 3 (lines 148–155) ────────────────────────────────────────────────
  {
    type: "image",
    src: "https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2020/november/18.11/image6.gif",
    link: "https://media.giphy.com/media/PvvSfSDFoAL5e/giphy.gif",
    alt: "Newsletter visual",
  },

  // ── Point 3 (lines 157–184) ────────────────────────────────────────────────
  {
    type: "text",
    html: `<p>
          <strong>3. Automation technology is not an option for a
          <a href="https://hackernoon.com/my-top-three-priorities-as-a-software-development-manager-cq2x32c1">dazzling performance</a></strong>
        </p>
        <p>
          Let&#8217;s be honest: the bright minds like working with new and shiny technology. And you need those
          <a href="https://hackernoon.com/software-specifications-define-plan-and-execute-more-effective-projects-p0803tzz">bright minds</a>
          in your team to make it high-performing and guarantee superb results. It&#8217;s a bit hard to employ and
          keep these big stars in a company that trusts in a
          <a href="https://hackernoon.com/devops-principles-culture-vs-tooling-vvac367z">creaky, legacy toolchain</a>
          to build a product, right?
        </p>
        <p>
          Investing in the <a href="https://hackernoon.com/7-best-devops-security-practices-devsecops-and-its-merits-mr2p3unk">DevOps tools</a>
          will not only make the team more effective, but it will also make them want to stay. From a practical
          standpoint, <a href="https://hackernoon.com/automating-security-in-devops-top-15-tools-69253w9e">automation tools</a>
          can increase <a href="https://hackernoon.com/why-devops-is-important-during-the-covid-19-pandemic-6u1i3tul">tech efficiency</a>,
          eliminate errors, and help
          <a href="https://hackernoon.com/the-difference-between-ci-and-cd-in-devops-bc2z3uae">deploy apps faster</a>.
          That refers to simplifying the
          <a href="https://hackernoon.com/how-to-make-a-devops-strategy-pk153uyb">process of configuring</a>,
          monitoring, and maintaining the
          <a href="https://hackernoon.com/ever-wondered-why-we-use-containers-in-devops-l5113wif">network infrastructure</a>.
        </p>`,
  },

  // ── Image 4 (lines 187–194) ────────────────────────────────────────────────
  {
    type: "image",
    src: "https://gitlab.com/hackernoon/creative/-/raw/master/newsletters/memes/2020/november/18.11/image1.gif",
    link: "https://media.giphy.com/media/3oFzmjFxbBiPQW4qVa/giphy.gif",
    alt: "Newsletter visual",
  },

  // ── Pull it all together (lines 196–225) ───────────────────────────────────
  {
    type: "text",
    html: `<h2 style="margin: 0 0 10px 0;">Pull it all together</h2>
        <p>
          There&#8217;s no panacea for
          <a href="https://hackernoon.com/measuring-devops-metrics-a-how-to-guide-ot113ztl">successful DevOps team building</a>,
          but the process itself is definitely easier than
          <a href="https://www.hackernoon.com/how-quantum-dots-technology-driving-advancements-in-lcd-and-oled-display-quality-2e163uxg">quantum physics</a>.
          The majority of our tips and tricks dispensed above are of common-sense variety. In practice, our
          <a href="https://hackernoon.com/are-you-telling-the-story-of-your-software-mc133w92">secrets</a>
          call for good old-fashioned
          <a href="https://hackernoon.com/how-to-approach-strategic-planning-when-the-sky-is-falling-oq5k3yer">hard work</a>
          and a sprinkle of knowledge.
        </p>
        <p>
          To deliver top-notch results, employees must be well-settled, teams well-structured, and objectives
          outlined based on
          <a href="https://hackernoon.com/ceos-survey-on-digital-transformation-in-2017-by-gartner-c2d6e842f86c">business priorities</a>.
          And it&#8217;s not enough to recruit the right people, retention and training are equally important.
          Overall, it takes a solid mix of all these components to build a team that truly thrives.
        </p>
        <p>
          <em>
            Join us to welcome today newsletter&#8217;s sponsor &#8212;
            <a href="https://bit.ly/3n9CgbE">BridgeCrew</a>.
            BridgeCrew helps find, fix, and prevent cloud misconfigurations straight from your CI/CD pipeline.
            Their platform leverages automation and delivers security-as-code to streamline your DevSecOps processes.
          </em>
        </p>`,
  },
];
