---
title: Toggle Text
slug: toggle-text
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Toggle Text</h1>
  <p><u>SASS Partial:</u> <code>base/toggle-text</code></p>
  
  
  <p><u>Description:</u> Use CSS pseudo content to toggle based on data attributes. by deafult, the content of the <code>data-default</code> attribute is displayed. To show the <code>data-active</code> content instead, add the <code>-active</code> variation to the parent <code>toggle-text</code> div.</p>
  <p>Once <code>toggle-text</code> is added to a parent div, all of the child <code>toggle-text__text</code> elements will toggle according to the variation class</p>

  <b>Inactive State:</b>
</div>

<!-- Result -->
<div class="styleguide__result">
    <div class="toggle-text">
        <span
            class="toggle-text__text"
            data-default="Learn More"
            data-active="Less"></span>
    </div>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="toggle-text">
    <span
        class="toggle-text__text"
        data-default="Learn More"
        data-active="Less"></span>
</div>
{{< /highlight >}}


<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
    <b>Active State:</b>
</div>
      

<!-- Result -->
<div class="styleguide__result">
    <div class="toggle-text -active">
        <span
            class="toggle-text__text"
            data-default="Learn More"
            data-active="Less"></span>
    </div>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="toggle-text -active">
    <span
        class="toggle-text__text"
        data-default="Learn More"
        data-active="Less"></span>
</div>
{{< /highlight >}}