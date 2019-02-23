---
title: Range
slug: range
draft: false
---

<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Range Slider</h1>
  <p><u>SASS Partial:</u> <code>components/rang</code></p>
  <p><u>Vue Component JS:</u> <code>src/js/components/Range.vue</code></p>
  <p><u>Description:</u> This is a Vue component that uses Properties to configure the range <code>start</code>, <code>min</code>, and <code>max</code> options. The content on either side is set in the component file itself.</p>
  <p><u>Resources:</u>  <a href="https://vuejs.org/v2/guide/components-slots.html" target="_blank">Vue Slots</a></p>
</div>

<div class="styleguide__result">
  <range_slider :min="10" :start="40" :max="100" class="form-block">
  </range_slider>
</div>

{{< highlight html  >}}
  <range_slider :min="10" :start="40" :max="100" class="form-block">
  </range_slider>
{{< /highlight >}}



