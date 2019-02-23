---
title: Author Card
slug: author-card
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Author Card</h1>
  <p><u>SASS Partial:</u> <code>components/author-card</code></p>
</div>

<!-- Result -->
<div class="styleguide__result">
<div class="author-card | md:flex-grid">
    <div class="author-card__aside">
        <figure class="image -is1x1 | mb-4">
        <img src="/dist/assets/img/fpo-10.jpg" class="fit-cover" />
        </figure>
    </div>
    <div class="author-card__main">
        <div class="author-card__header | mb-5 pt-2">
        <h4 class="header-md">Paul Smith</h4>
        <h5 class="header-sm | pt-2">Author</h5>
        </div>
        <div class="author-card__descr | paragraphs -sm">
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            obcaecati qui non hic nihil accusantium vitae totam, nam nulla
            optio quas ut incidunt ipsa, reprehenderit veritatis placeat amet
            minima fugit?
        </p>
        </div>
    </div>
</div>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="author-card | md:flex-grid">
    <div class="author-card__aside">
        <figure class="image -is1x1 | mb-4">
        <img src="/dist/assets/img/fpo-10.jpg" class="fit-cover" />
        </figure>
    </div>
    <div class="author-card__main">
        <div class="author-card__header | mb-5 pt-2">
        <h4 class="header-md">Paul Smith</h4>
        <h5 class="header-sm | pt-2">Author</h5>
        </div>
        <div class="author-card__descr | paragraphs -sm">
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            obcaecati qui non hic nihil accusantium vitae totam, nam nulla
            optio quas ut incidunt ipsa, reprehenderit veritatis placeat amet
            minima fugit?
        </p>
        </div>
    </div>
</div>
{{< /highlight >}}
