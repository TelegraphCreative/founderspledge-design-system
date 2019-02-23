---
title: Image
slug: image
draft: false
---

<!-- Header -->
<div class="styleguide__content">
  <h1>— Image</h1>
  <p><u>SASS Partial:</u> <code>base/image</code></p>

  <h3>Ratio 1x1</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="w-32">
    <figure class="image -is1x1">
        <img src="/dist/assets/img/fpo-01.jpg" class="fit-cover">
    </figure>
</div>
</div>

<!-- Markup -->
{{< highlight html  >}}
<figure class="image -is1x1">
    <img src="{$path}">
</figure>
{{< /highlight >}}



<!-- Header -->
<div class="styleguide__content">
  <h3>Ratio 12x16</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="w-32">
    <figure class="image -is12x16">
        <img src="/dist/assets/img/fpo-01.jpg" class="fit-cover">
    </figure>
</div>
</div>

<!-- Markup -->
{{< highlight html  >}}
<figure class="image -is12x16">
    <img src="{$path}">
</figure>
{{< /highlight >}}





<!-- Header -->
<div class="styleguide__content">
  <h3>Ratio 8x20</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="w-32">
    <figure class="image -is8x20">
        <img src="/dist/assets/img/fpo-01.jpg" class="fit-cover">
    </figure>
</div>
</div>

<!-- Markup -->
{{< highlight html  >}}
<figure class="image -is8x20">
    <img src="{$path}">
</figure>
{{< /highlight >}}





<!-- Header -->
<div class="styleguide__content">
  <h3>Ratio 8x10</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="w-32">
    <figure class="image -is8x10">
        <img src="/dist/assets/img/fpo-01.jpg" class="fit-cover">
    </figure>
</div>
</div>

<!-- Markup -->
{{< highlight html  >}}
<figure class="image -is8x10">
    <img src="{$path}">
</figure>
{{< /highlight >}}




<!-- Header -->
<div class="styleguide__content">
  <h3>Ratio 16x12</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="w-32">
    <figure class="image -is16x12">
        <img src="/dist/assets/img/fpo-01.jpg" class="fit-cover">
    </figure>
</div>
</div>

<!-- Markup -->
{{< highlight html  >}}
<figure class="image -is16x12">
    <img src="{$path}">
</figure>
{{< /highlight >}}



<!-- Header -->
<div class="styleguide__content">
  <h3>Ratio 16x9</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="w-32">
    <figure class="image -is16x9">
        <img src="/dist/assets/img/fpo-01.jpg" class="fit-cover">
    </figure>
</div>
</div>

<!-- Markup -->
{{< highlight html  >}}
<figure class="image -is16x9">
    <img src="{$path}">
</figure>
{{< /highlight >}}




<!-- Header -->
<div class="styleguide__content">
  <h3>Ratio 2x1</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="w-32">
    <figure class="image -is2x1">
        <img src="/dist/assets/img/fpo-01.jpg" class="fit-cover">
    </figure>
</div>
</div>

<!-- Markup -->
{{< highlight html  >}}
<figure class="image -is2x1">
    <img src="{$path}">
</figure>
{{< /highlight >}}



<!-- Header -->
<div class="styleguide__content">
  <h3>Ratio 3x2</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="w-32">
    <figure class="image -is3x2">
        <img src="/dist/assets/img/fpo-01.jpg" class="fit-cover">
    </figure>
</div>
</div>

<!-- Markup -->
{{< highlight html  >}}
<figure class="image -is3x2">
    <img src="{$path}">
</figure>
{{< /highlight >}}




<!-- Header -->
<div class="styleguide__content">
  <h3>Fit: Cover</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="w-32">
    <figure class="image -is3x2">
        <img src="/dist/assets/img/fpo-01.jpg" class="fit-cover">
    </figure>
</div>
</div>

<!-- Markup -->
{{< highlight html  >}}
<figure class="image -is3x2">
    <img src="{$path}" class="fit-cover">
</figure>
{{< /highlight >}}



<!-- Header -->
<div class="styleguide__content">
  <h3>Fit: Contain</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="w-32">
    <figure class="image -is3x2">
        <img src="/dist/assets/img/fpo-01.jpg" class="fit-contain">
    </figure>
</div>
</div>

<!-- Markup -->
{{< highlight html  >}}
<figure class="image -is3x2">
    <img src="{$path}" class="fit-contain">
</figure>
{{< /highlight >}}



<!-- Header -->
<div class="styleguide__content">
  <h3>Inner Shadow</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="w-32">
    <figure class="image -is3x2 -inner-shadow">
        <img src="/dist/assets/img/fpo-01.jpg" class="fit-cover">
    </figure>
</div>
</div>

<!-- Markup -->
{{< highlight html  >}}
<figure class="image -is3x2 -inner-shadow">
    <img src="{$path}">
</figure>
{{< /highlight >}}



<!-- Header -->
<div class="styleguide__content">
  <h3>Rounded + Shadow</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="w-32">
    <figure class="image -is3x2 -inner-shadow | rounded-full">
        <img src="/dist/assets/img/fpo-01.jpg" class="fit-cover">
    </figure>
</div>
</div>

<!-- Markup -->
{{< highlight html  >}}
<figure class="image -is3x2 -inner-shadow | rounded-full">
    <img src="{$path}">
</figure>
{{< /highlight >}}