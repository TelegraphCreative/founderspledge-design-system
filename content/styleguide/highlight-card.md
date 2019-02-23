---
title: Highlight Cards
slug: highlight-card
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Highlight Cards</h1>
  <p><u>SASS Partial:</u> <code>components/highlight-card</code></p>
  <p><u>Hugo Partial:</u> <code>components/highlight-card</code></p>

  
  <h2>Highlight Card Grid</h2>
</div>
<!-- Markup -->

{{< highlight html  >}}
highlight-cards | md:flex-grid container lg:gutter | md:pb-0 pb-4
    <div class="highlight-card">
        …
    </div>
    <div class="highlight-card">
        …
    </div>
</div>  
{{< /highlight >}}
        



<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
    <h2>Highlight Card</h2>
</div>
      
<!-- Result -->
<div class="styleguide__result">
<div class="highlight-card">
	<div class="highlight-card__content">
		<div class="highlight-card__icon | text-green">
			<span class="icon | icon--arrow -md"><svg viewbox="0 0 13 39" xmlns="http://www.w3.org/2000/svg">
			<polyline class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5" stroke="currentColor"></polyline></svg></span>
		</div>
		<div class="highlight-card__main">
			<h4 class="header-md">Community</h4>
			<div class="paragraphs -xs">
				<p>Form lasting bonds with value-aligned entrepreneurs, tackle some of the world’s toughest challenges, and learn experts at our intimate events around the globe.</p>
			</div>
		</div>
		<div class="highlight-card__action | text-sm">
			<a class="link -underline" href="#">Learn More</a>
		</div>
	</div>
</div>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="highlight-card">
	<div class="highlight-card__content">
		<div class="highlight-card__icon | text-green">
			<span class="icon | icon--arrow -md"><svg viewbox="0 0 13 39" xmlns="http://www.w3.org/2000/svg">
			<polyline class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5" stroke="currentColor"></polyline></svg></span>
		</div>
		<div class="highlight-card__main">
			<h4 class="header-md">Community</h4>
			<div class="paragraphs -xs">
				<p>Form lasting bonds with value-aligned entrepreneurs, tackle some of the world’s toughest challenges, and learn experts at our intimate events around the globe.</p>
			</div>
		</div>
		<div class="highlight-card__action | text-sm">
			<a class="link -underline" href="#">Learn More</a>
		</div>
	</div>
</div>
{{< /highlight >}}
