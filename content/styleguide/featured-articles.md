---
title: Featured Articles
slug: featured-article
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Featured Articles</h1>
  <p><u>SASS Partial:</u> <code>components/featured-article</code></p>

  <h2>Grid</h2>
</div>

<!-- Markup -->
{{< highlight html  >}}
<div class="featured-articles | md:flex-grid container gutter">
  <div class="feature-article | md:w-1/2">
  </div>
  <div class="feature-article | md:w-1/2">
  </div>
</div>
{{< /highlight >}}
      

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h2>Featured Article</h2>
</div>
  
<!-- Result -->
<div class="styleguide__result">
<div class="feature-article">
    <div class="feature-article__content | text-center">
      <div class="feature-article__main">
        <h2 class="header-lg | mb-4">Powered by Visionaries</h2>
        <h4 class="subheader text-orange"><span class="ornament-breadcrumb">Zero Cuts</span> <span class="ornament-breadcrumb">Zero Fees</span> <span class="ornament-breadcrumb">100% Impact</span></h4>
        <div class="paragraphs | mt-8">
          <p>Our operations are fully funded by a small group of essential donors and institutions. This means we can support impactful giving at zero cost.<br>
          Simple, transparent, and effective.</p>
        </div>
      </div>
      <div class="feature-article__action | pt-10">
        <a class="link -underline" href="#">Learn More</a>
      </div>
    </div>
  </div>
</div>

<!-- Markup -->
{{< highlight html  >}}
<div class="feature-article">
  <div class="feature-article__content | text-center">
    <div class="feature-article__main">
      <h2 class="header-lg | mb-4">Powered by Visionaries</h2>
      <h4 class="subheader text-orange"><span class="ornament-breadcrumb">Zero Cuts</span> <span class="ornament-breadcrumb">Zero Fees</span> <span class="ornament-breadcrumb">100% Impact</span></h4>
      <div class="paragraphs | mt-8">
        <p>Our operations are fully funded by a small group of essential donors and institutions. This means we can support impactful giving at zero cost.<br>
        Simple, transparent, and effective.</p>
      </div>
    </div>
    <div class="feature-article__action | pt-10">
      <a class="link -underline" href="#">Learn More</a>
    </div>
  </div>
</div>
{{< /highlight >}}
        

