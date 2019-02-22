---
title: Page Menu
slug: page-menu
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Page Menu</h1>
  <p><u>SASS Partial:</u> <code>components/page-menu</code></p>
  <p><u>Hugo Partial:</u> <code>components/page-menu</code></p>
  <p><u>Related:</u> <code>js/components/SmoothScroll.vue</code></p>
  <p><u>Description:</u> This pattern uses the <code>smooth_scroll</code> Vue component which includes Option Properties that allow you to set the page anchor and top offset</p>
  <p>For each section in the page, add <code>.js-section</code>. This enables the active states in the menu to update automatically on scroll.</p>

    <b>Variations</b>
    <ul>
        <li><code>-neg-offset</code></li>
        <li><code>-align-right</code></li>
    </ul>
</div>

      
<!-- Result -->
<div class="styleguide__result">
<nav class="page-menu | gutter ">
  <ul class="page-menu__bar menu-bar">
    <li class="page-menu__item">
      <smooth_scroll
        class="link"
        :anchor="'section-1'"
        :offset="120"
        >Section Header</smooth_scroll
      >
    </li>
    <li class="page-menu__item">
      <smooth_scroll
        class="link"
        :anchor="'section-2'"
        :offset="120"
        >Section Header</smooth_scroll
      >
    </li>
    <li class="page-menu__item">
      <smooth_scroll
        class="link"
        :anchor="'section-1'"
        :offset="120"
        >Section Header</smooth_scroll
      >
    </li>
    <li class="page-menu__item">
      <smooth_scroll
        class="link"
        :anchor="'section-2'"
        :offset="120"
        >Section Header</smooth_scroll
      >
    </li>
    
  </ul>
</nav>
</div>

<!-- Markup -->
{{< highlight html  >}}
<nav class="page-menu | gutter ">
    <ul class="page-menu__bar menu-bar">
        <li class="page-menu__item">
        <smooth_scroll
            class="link"
            :anchor="'section-1'"
            :offset="120"
            >Section Header</smooth_scroll
        >
        </li>
        <li class="page-menu__item">
        <smooth_scroll
            class="link"
            :anchor="'section-2'"
            :offset="120"
            >Section Header</smooth_scroll
        >
        </li>
        <li class="page-menu__item">
        <smooth_scroll
            class="link"
            :anchor="'section-1'"
            :offset="120"
            >Section Header</smooth_scroll
        >
        </li>
        <li class="page-menu__item">
        <smooth_scroll
            class="link"
            :anchor="'section-2'"
            :offset="120"
            >Section Header</smooth_scroll
        >
        </li>
        
    </ul>
</nav>
{{< /highlight >}}
        

