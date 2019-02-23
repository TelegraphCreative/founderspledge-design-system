---
title: Resource Accordion
slug: resource-accordion
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Resource Accordion</h1>
  <p><u>SASS Partial:</u> <code>components/resource-list</code></p>
  <p><u>Hugo Partial:</u> <code>components/resource--accordion.html</code></p>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="resources -accordion">
    <accordion class="resource__item | toggle-text">
      <!-- Header -->
      <template slot="accordion-header">
        <div class="resource__main">
          <div class="resource__descr">
            <h2 class="header | header-md mb-2 md:mb-0">
              Can I change my pledge?
            </h2>
            <div class="paragraphs -sm">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div class="resource__action | accordion-icon">
            <button class="link -icon -green -sm">
              <span
                class="text | toggle-text__text"
                data-active="Less"
                data-default="Learn More"
              ></span
              ><span class="icon | icon--arrow -xs -stroke-4"
                ><svg viewbox="0 0 13 39" xmlns="http://www.w3.org/2000/svg">
                  <polyline
                    class="stroke"
                    points="0.9,38.5 11.9,19.5 0.9,0.5"
                    stroke="currentColor"
                  ></polyline></svg
              ></span>
            </button>
          </div>
        </div>
      </template>
      <!-- Content -->
      <template slot="accordion-content">
        <div
          class="resource__extended-content | article-copy paragraphs -xs | my-8"
        >
          <h6>Descriptive Header 6</h6>
          <p>
            This is all option, of course. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Et eos totam,
            <a href="http://example.com" target="_blank">this is a link</a>
            eaque illo minima inventore ad, ratione neque laboriosam labore
            tempore nihil, debitis aperiam ut? Unde ipsam recusandae facere
            accusamus.
          </p>
          <p>
            This is all option, of course. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Et eos totam, eaque illo minima
            inventore ad, ratione neque laboriosam labore tempore nihil, debitis
            aperiam ut? Unde ipsam recusandae facere accusamus.
          </p>
        </div>
      </template>
    </accordion>
  </div>
</div>

<!-- Markup -->
{{< highlight html  >}}
<div class="resources -accordion">
  <accordion class="resource__item | toggle-text">
    <!-- Header -->
    <template slot="accordion-header">
      <div class="resource__main">
        <div class="resource__descr">
          <h2 class="header | header-md mb-2 md:mb-0">
            Can I change my pledge?
          </h2>
          <div class="paragraphs -sm">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div class="resource__action | accordion-icon">
          <button class="link -icon -green -sm">
            <span
              class="text | toggle-text__text"
              data-active="Less"
              data-default="Learn More"
            ></span
            ><span class="icon | icon--arrow -xs -stroke-4"
              ><svg viewbox="0 0 13 39" xmlns="http://www.w3.org/2000/svg">
                <polyline
                  class="stroke"
                  points="0.9,38.5 11.9,19.5 0.9,0.5"
                  stroke="currentColor"
                ></polyline></svg
            ></span>
          </button>
        </div>
      </div>
    </template>
    <!-- Content -->
    <template slot="accordion-content">
      <div
        class="resource__extended-content | article-copy paragraphs -xs | my-8"
      >
        <h6>Descriptive Header 6</h6>
        <p>
          This is all option, of course. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et eos totam,
          <a href="http://example.com" target="_blank">this is a link</a>
          eaque illo minima inventore ad, ratione neque laboriosam labore
          tempore nihil, debitis aperiam ut? Unde ipsam recusandae facere
          accusamus.
        </p>
        <p>
          This is all option, of course. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et eos totam, eaque illo minima inventore ad,
          ratione neque laboriosam labore tempore nihil, debitis aperiam ut?
          Unde ipsam recusandae facere accusamus.
        </p>
      </div>
    </template>
  </accordion>
</div>
{{< /highlight >}}
