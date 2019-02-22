---
title: Buttons
slug: buttons
draft: false
---

<!-- Header -->
<div class="styleguide__content">
  <h1>— Buttons</h1>
  <p><u>SASS Partial:</u> <code>base/button</code></p>

  <h3>Standard</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <a href="#" class="btn">Standard</a>
</div>

<!-- Markup -->

{{< highlight html  >}}
<a href="#" class="btn">Standard</a>
{{< /highlight >}}

<!-- Header -->
<div class="styleguide__content">
  <h3>Wide</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <a href="#" class="btn -light">Light</a>
</div>

<!-- Markup -->

{{< highlight html  >}}
<a href="#" class="btn -light">Light</a>
{{< /highlight >}}

<!-- Header -->
<div class="styleguide__content">
  <h3>Solid</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <a href="#" class="btn -solid">Solid</a>
</div>

<!-- Markup -->

{{< highlight html  >}}
<a href="#" class="btn -solid">Solid</a>
{{< /highlight >}}

<!-- Header -->
<div class="styleguide__content">
  <h3>Small</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <a href="#" class="btn -small">Small</a>
</div>

<!-- Markup -->

{{< highlight html  >}}
<a href="#" class="btn -small">Small</a>
{{< /highlight >}}

<!-- Header -->
<div class="styleguide__content">
  <h3>Add</h3>
  <p>
    The add button should be paired with the
    <code>-dark -small</code> variations
  </p>
</div>
<!-- Result -->
<div class="styleguide__result">
  <a href="#" class="btn -add -dark -small">
    Add
  </a>
</div>

<!-- Markup -->

{{< highlight html  >}}
<a href="#" class="btn -add -dark -small">Add</a>
{{< /highlight >}}

<!-- Header -->
<div class="styleguide__content">
  <h3>Wide</h3>
</div>
<!-- Result -->
<div class="styleguide__result">
  <a href="#" class="btn -wide">Wide</a>
</div>

<!-- Markup -->

{{< highlight html  >}}
<a href="#" class="btn -wide">Wide</a>
{{< /highlight >}}

<!-- Header -->
<div class="styleguide__content">
  <h3>Full</h3>
</div>
<!-- Result -->
<div class="styleguide__result">
  <a href="#" class="btn -full">Full</a>
</div>

<!-- Markup -->

{{< highlight html  >}}
<a href="#" class="btn -full">Full</a>
{{< /highlight >}}

<!-- Header -->
<div class="styleguide__content">
  <h3>Gallery Button</h3>
</div>
<!-- Result -->
<div class="styleguide__result">
  <div class="btn--gallery">
    <div class="gallery-stack">     
      <div class="gallery-stack__item">
          <img src="/dist/assets/img/fpo-03.jpg" alt="">
      </div> 
      <div class="gallery-stack__item">
          <img src="/dist/assets/img/fpo-06.jpg" alt="">
      </div>
    </div>
    <button class="link -icon -green">
      <span class="text">Browse event gallery</span><span class="icon | icon--arrow -xs -stroke-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 39"><polyline stroke="currentColor" class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5 "/></svg></span>
    </button>
  </div>
</div>

<!-- Markup -->

{{< highlight html  >}}

<div class="btn--gallery">
  <div class="gallery-stack">     
    <div class="gallery-stack__item">
        <img src="/dist/assets/img/fpo-03.jpg" alt="">
    </div> 
    <div class="gallery-stack__item">
        <img src="/dist/assets/img/fpo-06.jpg" alt="">
    </div>
  </div>
  <button class="link -icon -green">
    <span class="text">Browse event gallery</span><span class="icon | icon--arrow -xs -stroke-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 39"><polyline stroke="currentColor" class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5 "/></svg></span>
  </button>
</div>
{{< /highlight >}}
