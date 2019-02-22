---
title: Spacing
slug: spacing
draft: false
---

<!-- Header -->
<div class="styleguide__content">
  <h1>— Spacing</h1>
  <p>SASS Partial: <code>base/space</code></p>

  <h3>Top</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="border-b-2 border-black header-sm -light">Bottom of preceeding sibling</div>
  <div class="space-t">
    <div class="bg-oat-light p-4 text-center header-sm -dark">Spaced Element</div>
  </div>
</div>

<!-- Markup -->

{{< highlight html  >}}

<div class="space-t"></div>
{{< /highlight >}}

<!-- Header -->
<div class="styleguide__content">
  <h3>Top Small</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="border-b-2 border-black header-sm -light">Bottom of preceeding sibling</div>
  <div class="space-t--sm">
    <div class="bg-oat-light p-4 text-center header-sm -dark">Spaced Element</div>
  </div>
</div>

<!-- Markup -->

{{< highlight html  >}}

<div class="space-t--sm"></div>
{{< /highlight >}}

<!-- Header -->
<div class="styleguide__content">
  <h3>Top Large</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="border-b-2 border-black header-sm -light">Bottom of preceeding sibling</div>
  <div class="space-t--lg">
    <div class="bg-oat-light p-4 text-center header-sm -dark">Spaced Element</div>
  </div>
</div>

<!-- Markup -->

{{< highlight html  >}}

<div class="space-t--lg"></div>
{{< /highlight >}}

<!-- Header -->
<div class="styleguide__content">
  <h3>Bottom</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  
  <div class="space-b">
    <div class="bg-oat-light p-4 text-center header-sm -dark">Spaced Element</div>
  </div>
  <div class="border-t-2 border-black header-sm -light">Bottom of proceeding sibling</div>
</div>

<!-- Markup -->

{{< highlight html  >}}

<div class="space-b"></div>
{{< /highlight >}}

<!-- Header -->
<div class="styleguide__content">
  <h3>Bottom Small</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="space-b--sm">
    <div class="bg-oat-light p-4 text-center header-sm -dark">Spaced Element</div>
  </div>
  <div class="border-t-2 border-black header-sm -light">Bottom of proceeding sibling</div>
</div>

<!-- Markup -->

{{< highlight html  >}}

<div class="space-b--sm"></div>
{{< /highlight >}}

<!-- Header -->
<div class="styleguide__content">
  <h3>Bottom Large</h3>
</div>

<!-- Result -->
<div class="styleguide__result">
  <div class="space-b--lg">
    <div class="bg-oat-light p-4 text-center header-sm -dark">Spaced Element</div>
  </div>
  <div class="border-t-2 border-black header-sm -light">Bottom of proceeding sibling</div>
</div>

<!-- Markup -->

{{< highlight html  >}}

<div class="space-b--lg"></div>
{{< /highlight >}}
