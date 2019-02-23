---
title: hCard
slug: h-card
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>hCard</h1>
  <p><u>SASS Partial:</u> <code>components/hcard</code></p>
  
</div>

<!-- Result -->
<div class="styleguide__result">
<div class="hcard | lg:py-0 py-8">
    <div class="hcard__item | tel">
        <a href="tel: +44 (0) 208 068 0425"> +44 (0) 208 068 0425</a>
    </div>
    <div class="hcard__item | email">
        <a href="mailto:info@founderspledge.org"
        >info@founderspledge.org</a
        >
    </div>
    <div class="hcard__item | addr | mt-5">
        <p>Block A Unit 402A</p>
        <p>100 Clements Road</p>
        <p>London SE16 4DG</p>
    </div>
    </div>         
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="hcard | lg:py-0 py-8">
    <div class="hcard__item | tel">
        <a href="tel: +44 (0) 208 068 0425"> +44 (0) 208 068 0425</a>
    </div>
    <div class="hcard__item | email">
        <a href="mailto:info@founderspledge.org"
        >info@founderspledge.org</a
        >
    </div>
    <div class="hcard__item | addr | mt-5">
        <p>Block A Unit 402A</p>
        <p>100 Clements Road</p>
        <p>London SE16 4DG</p>
    </div>
    </div>         
</div>           
{{< /highlight >}}