---
title: Flip Cards
slug: flip-cards
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Flip Card</h1>
  <p><u>SASS Partial:</u> <code>components/flip-card</code></p>
  <p><u>Hugo Partial:</u> <code>components/flip-card</code></p>

  <p>Variations include:</p>
  <ul>
      <li>-resource</li>
      <li>-press</li>
      <li>-features</li>
      <li>-cta</li>
  </ul>

  <h2>Flip Card Grid</h2>
</div>
<!-- Markup -->

{{< highlight html  >}}
<div class="flip-cards | md:flex-grid justify-between | container gutter-md">
    <div class="flip-card -press">
        …
    </div>
    <div class="flip-card -press">
        …
    </div>
</div>  
{{< /highlight >}}
        



<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
    <h2>Press</h2>
</div>
      
<!-- Result -->
<div class="styleguide__result">
<div class="flip-card -press">
    <div class="flip-card__content">
        <div class="flip-card__back">
            <div class="flip-card__main">
                <div class="flip-card__descr | paragraphs -xs">
                    <p>“enables budding tycoons to donate a percentage of their future earnings to good causes, once they sell or list their businesses.”</p>
                </div>
            </div>
            <div class="flip-card__action | text-sm">
                <a class="link -underline" href="#">Read full article</a>
            </div>
        </div>
        <header class="flip-card__front">
            <div class="flip-card__logo w-1/4 mx-auto">
                <figure class="image -is2x1">
                    <img alt="“enables budding tycoons to donate a percentage of their future earnings to good causes, once they sell or list their businesses.”" class="fit-contain" src="/dist/assets/img/fpo-logo-01.jpg">
                </figure>
            </div>
        </header>
    </div>
</div>         
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="flip-card -press">
    <div class="flip-card__content">
        <div class="flip-card__back">
            <div class="flip-card__main">
                <div class="flip-card__descr | paragraphs -xs">
                    <p>“enables budding tycoons to donate a percentage of their future earnings to good causes, once they sell or list their businesses.”</p>
                </div>
            </div>
            <div class="flip-card__action | text-sm">
                <a class="link -underline" href="#">Read full article</a>
            </div>
        </div>
        <header class="flip-card__front">
            <div class="flip-card__logo w-1/4 mx-auto">
                <figure class="image -is2x1">
                    <img alt="“enables budding tycoons to donate a percentage of their future earnings to good causes, once they sell or list their businesses.”" class="fit-contain" src="/dist/assets/img/fpo-logo-01.jpg">
                </figure>
            </div>
        </header>
    </div>
</div>
{{< /highlight >}}



<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h2>Resource</h2>
</div>

<!-- Result -->
<div class="styleguide__result">
<div class="flip-card -resource">
    <div class="flip-card__content">
        <div class="flip-card__back">
            <div class="flip-card__main">
                <div class="flip-card__icon">
                    <span class="icon | icon--arrow -sm mx-auto"><svg viewbox="0 0 13 39" xmlns="http://www.w3.org/2000/svg">
                    <polyline class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5" stroke="currentColor"></polyline></svg></span>
                </div>
                <div class="flip-card__name">
                    <h4 class="header-md">Alleviate Poverty</h4>
                </div>
                <div class="flip-card__descr | paragraphs -xs">
                    <p>Giving money directly to those who most need it, so they can use it for what they most need it for</p>
                </div>
            </div>
            <div class="flip-card__action | text-sm">
                <a class="link -underline" href="#">Read the Research</a>
            </div>
        </div>
        <header class="flip-card__front">
            <div class="flip-card__icon">
                <span class="icon | icon--arrow -sm mx-auto"><svg viewbox="0 0 13 39" xmlns="http://www.w3.org/2000/svg">
                <polyline class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5" stroke="currentColor"></polyline></svg></span>
            </div>
            <div class="flip-card__name">
                <h4 class="header-md">Alleviate Poverty</h4>
            </div>
        </header>
    </div>
</div>       
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="flip-card -resource">
    <div class="flip-card__content">
        <div class="flip-card__back">
            <div class="flip-card__main">
                <div class="flip-card__icon">
                    <span class="icon | icon--arrow -sm mx-auto"><svg viewbox="0 0 13 39" xmlns="http://www.w3.org/2000/svg">
                    <polyline class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5" stroke="currentColor"></polyline></svg></span>
                </div>
                <div class="flip-card__name">
                    <h4 class="header-md">Alleviate Poverty</h4>
                </div>
                <div class="flip-card__descr | paragraphs -xs">
                    <p>Giving money directly to those who most need it, so they can use it for what they most need it for</p>
                </div>
            </div>
            <div class="flip-card__action | text-sm">
                <a class="link -underline" href="#">Read the Research</a>
            </div>
        </div>
        <header class="flip-card__front">
            <div class="flip-card__icon">
                <span class="icon | icon--arrow -sm mx-auto"><svg viewbox="0 0 13 39" xmlns="http://www.w3.org/2000/svg">
                <polyline class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5" stroke="currentColor"></polyline></svg></span>
            </div>
            <div class="flip-card__name">
                <h4 class="header-md">Alleviate Poverty</h4>
            </div>
        </header>
    </div>
</div>
{{< /highlight >}}



<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h2>CTA</h2>
</div>

<!-- Result -->
<div class="styleguide__result">
<div class="flip-card -cta">
    <div class="flip-card__content">
        <a href="#">
        <div class="flip-card__back">
            <div class="flip-card__main">
                <div class="flip-card__name">
                    <h4 class="header-md">Hear from our community.</h4>
                </div>
                <div class="flip-card__descr | paragraphs -xs">
                    <p>Subheading connecting the giving to missions back to the community. Humans doing good for other humans—connectedness.</p>
                </div>
            </div>
        </div>
        <header class="flip-card__front">
            <div class="flip-card__name">
                <h4 class="header-md">Hear from our community.</h4>
            </div>
        </header></a>
    </div>
</div>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="flip-card -cta">
    <div class="flip-card__content">
        <a href="#">
        <div class="flip-card__back">
            <div class="flip-card__main">
                <div class="flip-card__name">
                    <h4 class="header-md">Hear from our community.</h4>
                </div>
                <div class="flip-card__descr | paragraphs -xs">
                    <p>Subheading connecting the giving to missions back to the community. Humans doing good for other humans—connectedness.</p>
                </div>
            </div>
        </div>
        <header class="flip-card__front">
            <div class="flip-card__name">
                <h4 class="header-md">Hear from our community.</h4>
            </div>
        </header></a>
    </div>
</div>
{{< /highlight >}}

        
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h2>Feature</h2>
</div>

<!-- Result -->
<div class="styleguide__result">
<div class="flip-card -feature">
    <div class="flip-card__content">
        <div class="flip-card__back">
            <div class="flip-card__main">
                <div class="flip-card__icon">
                    <span class="icon | icon--arrow -sm mx-auto"><svg viewbox="0 0 13 39" xmlns="http://www.w3.org/2000/svg">
                    <polyline class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5" stroke="currentColor"></polyline></svg></span>
                </div>
                <div class="flip-card__name">
                    <h4 class="header-md">Generous Vaction Time</h4>
                </div>
                <div class="flip-card__descr | paragraphs -xs">
                    <p>Giving money directly to those who most need it, so they can use it for what they most need it for</p>
                </div>
            </div>
        </div>
        <header class="flip-card__front">
            <div class="flip-card__icon">
                <span class="icon | icon--arrow -sm mx-auto"><svg viewbox="0 0 13 39" xmlns="http://www.w3.org/2000/svg">
                <polyline class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5" stroke="currentColor"></polyline></svg></span>
            </div>
            <div class="flip-card__name">
                <h4 class="header-md">Generous Vaction Time</h4>
            </div>
        </header>
    </div>
</div>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="flip-card -feature">
    <div class="flip-card__content">
        <div class="flip-card__back">
            <div class="flip-card__main">
                <div class="flip-card__icon">
                    <span class="icon | icon--arrow -sm mx-auto"><svg viewbox="0 0 13 39" xmlns="http://www.w3.org/2000/svg">
                    <polyline class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5" stroke="currentColor"></polyline></svg></span>
                </div>
                <div class="flip-card__name">
                    <h4 class="header-md">Generous Vaction Time</h4>
                </div>
                <div class="flip-card__descr | paragraphs -xs">
                    <p>Giving money directly to those who most need it, so they can use it for what they most need it for</p>
                </div>
            </div>
        </div>
        <header class="flip-card__front">
            <div class="flip-card__icon">
                <span class="icon | icon--arrow -sm mx-auto"><svg viewbox="0 0 13 39" xmlns="http://www.w3.org/2000/svg">
                <polyline class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5" stroke="currentColor"></polyline></svg></span>
            </div>
            <div class="flip-card__name">
                <h4 class="header-md">Generous Vaction Time</h4>
            </div>
        </header>
    </div>
</div>
{{< /highlight >}}

        