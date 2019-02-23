---
title: Featured Article Card
slug: featured-article-card
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Featured Article Card</h1>
  <p><u>SASS Partial:</u> <code>components/featured-article-card</code></p>
  <p><u>Related SASS Partial:</u> <code>components/link-card</code></p>
  <p><u>Hugo Partial:</u> <code>components/featured-article-card</code></p>
</div>

<!-- Result -->
<div class="styleguide__result">
<a class="featured-article-card | link-card -dark -lg--l | container -flush | block" href="#">
<div class="featured-article-card__content">
	<figure class="featured-article-card__figure | image -background -is3x2">
		<div class="background" style="background-image: url('/dist/assets/img/fpo-09.jpg');"></div>
	</figure>
	<div class="featured-article-card__main | link-card__content">
		<h2 class="preheader | header-sm | mb-3">Impact Journey</h2>
		<h2 class="header | header-lg | mb-5">Story Title Here Will Break to Second Row If Lengthy</h2>
		<div class="paragraphs">
			<p>Our operations are fully funded by a small group of essential donors and institutions. This means we can support impactful giving at zero cost. Simple, transparent, and effective.</p>
		</div>
	</div>
</div></a>
</div>

<!-- Markup -->

{{< highlight html  >}}
<a class="featured-article-card | link-card -dark -lg--l | container -flush | block" href="#">

<div class="featured-article-card__content">
	<figure class="featured-article-card__figure | image -background -is3x2">
		<div class="background" style="background-image: url('/dist/assets/img/fpo-09.jpg');"></div>
	</figure>
	<div class="featured-article-card__main | link-card__content">
		<h2 class="preheader | header-sm | mb-3">Impact Journey</h2>
		<h2 class="header | header-lg | mb-5">Story Title Here Will Break to Second Row If Lengthy</h2>
		<div class="paragraphs">
			<p>Our operations are fully funded by a small group of essential donors and institutions. This means we can support impactful giving at zero cost. Simple, transparent, and effective.</p>
		</div>
	</div>
</div></a>
{{< /highlight >}}
