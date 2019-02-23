---
title: Patterns
slug: patterns
draft: false
---

<!-- Header -->
<div class="styleguide__content">
  <h1>Patterns</h1>
  <p><u>SASS Partial:</u> <code>base/pattern</code></p>
  <p><u>Description:</u>Dimensions are set in each layout block. Or, you can apply -md to set a basic height and width (used here for example).</p>
  

  <h2> Standard</h2>
</div>

<!-- Result -->
<div class="styleguide__result">
    <div class="pattern | -md"></div>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="pattern"></div>
{{< /highlight >}}

<!-- Header -->
<div class="styleguide__content">
  <h3>Green</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
    <div class="pattern--green | -md"></div>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="pattern--green"></div>
{{< /highlight >}}


<!-- Header -->
<div class="styleguide__content">
  <h3>White</h3>
</div>

<!-- Result -->
<div class="styleguide__result | p-4 bg-green-darkest">
    <div class="pattern--white | -md"></div>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="pattern--white"></div>
{{< /highlight >}}
