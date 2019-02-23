---
title: Article Cards
slug: article-cards
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Article Cards</h1>
  <p><u>SASS Partial:</u> <code>components/article-card</code></p>
  <p><u>Hugo Partial:</u> <code>partials/components/article-card</code></p>
  
  <h2>Grid</h2>
</div>

<!-- Markup -->
{{< highlight html  >}}
<div class="article-cards | xs:flex-grid">
</div>
{{< /highlight >}}
       
      
<!-- Result -->
<div class="styleguide__result">
<div class="article-cards | xs:flex-grid">
    <a class="article-card" href="/stories-article">
    <div class="article-card__content">
        <figure class="article-card__figure | image -is16x9">
            <img alt="" class="fit-cover" src="/dist/assets/img/fpo-10.jpg">
        </figure>
        <div class="article-card__main">
            <h2 class="preheader | header-sm">Insights</h2>
            <h2 class="header | header-md">His Passion for WeWork Drove His Vision for Social Change</h2>
        </div>
    </div></a> <a class="article-card" href="/stories-article">
    <div class="article-card__content">
        <figure class="article-card__figure | image -is16x9">
            <img alt="" class="fit-cover" src="/dist/assets/img/fpo-11.jpg">
        </figure>
        <div class="article-card__main">
            <h2 class="preheader | header-sm">Insights</h2>
            <h2 class="header | header-md">His Passion for WeWork Drove His Vision for Social Change</h2>
        </div>
    </div></a>
</div>

<!-- Markup -->
{{< highlight html  >}}
<div class="article-cards | xs:flex-grid">
    <a class="article-card" href="/stories-article">
        <div class="article-card__content">
            <figure class="article-card__figure | image -is16x9">
                <img alt="" class="fit-cover" src="/dist/assets/img/fpo-10.jpg">
            </figure>
            <div class="article-card__main">
                <h2 class="preheader | header-sm">Insights</h2>
                <h2 class="header | header-md">His Passion for WeWork Drove His Vision for Social Change</h2>
            </div>
        </div>
    </a> 
    <a class="article-card" href="/stories-article">
        <div class="article-card__content">
            <figure class="article-card__figure | image -is16x9">
                <img alt="" class="fit-cover" src="/dist/assets/img/fpo-10.jpg">
            </figure>
            <div class="article-card__main">
                <h2 class="preheader | header-sm">Insights</h2>
                <h2 class="header | header-md">His Passion for WeWork Drove His Vision for Social Change</h2>
            </div>
        </div>
    </a> 
</div>
{{< /highlight >}}
        

