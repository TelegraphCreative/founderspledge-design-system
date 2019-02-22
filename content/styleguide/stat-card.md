---
title: Stat Cards
slug: stat-card
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Stat Cards</h1>
  <p><u>SASS Partial:</u> <code>components/stat-card</code></p>
<p><u>Description:</u> This is a Vue component that uses Template Slots, meaning you can swap out content easily right in the HTML markup.</p>
<p><u>Resources:</u>  <a href="https://vuejs.org/v2/guide/components-slots.html" target="_blank">Vue Slots</a></p>
</div>

      
<!-- Result -->
<div class="styleguide__result">
<stat_card :active="true">
    <template slot="header">
        <h4 class="header | header-md">Ambitious</h4>
        <h3 class="figure | header-xl | font-integer">33%</h3>
    </template>
    <template slot="descr">
        <div class="stat-card__descr paragraphs -xs">
            <p>A third for you and family, a third for the world and a third for that third thing in your life (travel, angel investing, wacky experiment).</p>
        </div>
    </template>
</stat_card> 
</div>

<!-- Markup -->
{{< highlight html  >}}
<stat_card :active="true">
    <template slot="header">
        <h4 class="header | header-md">Ambitious</h4>
        <h3 class="figure | header-xl | font-integer">33%</h3>
    </template>
    <template slot="descr">
        <div class="stat-card__descr paragraphs -xs">
            <p>A third for you and family, a third for the world and a third for that third thing in your life (travel, angel investing, wacky experiment).</p>
        </div>
    </template>
</stat_card> 
{{< /highlight >}}
        

