---
title: Profile Cards
slug: profile-card
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Profile Cards</h1>
  <p><u>SASS Partial:</u> <code>components/profile-card</code></p>
  <p><u>Hugo Partials:</u> 
  <ul><li><code>components/profile-card</code></li></ul>
  <ul><li><code>components/profile-card--modal</code></li></ul>
  </p>

  <h2>Grid</h2>
</div>

<!-- Result -->
<div class="styleguide__result">
<section class="profile-cards flex-grid flex-wrap ">
    <a href="#" class="profile-card">
        <div class="profile-card__content">
            <figure class="profile-card__figure | image -is1x1">
                <img src="/dist/assets/img/fpo-04.jpg" alt="">
            </figure>
            <div class="profile-card__main">
                <h4 class="header-md | visibility-shift delay-3 property-all duration-5 timing-1">Jane Smith</h4>
                <h5 class="header-sm -white | mt-1 visibility-shift delay-4 property-all duration-5 timing-1"> Description
                </h5>
                <div class="pattern--green | visibility-shift delay-3 property-all duration-5 timing-1"></div>
            </div>
        </div>
    </a>

    <a href="#" class="profile-card">
        <div class="profile-card__content">
            <figure class="profile-card__figure | image -is1x1">
                <img src="/dist/assets/img/fpo-04.jpg" alt="">
            </figure>
            <div class="profile-card__main">
                <h4 class="header-md | visibility-shift delay-3 property-all duration-5 timing-1">Jane Smith</h4>
                <h5 class="header-sm -white | mt-1 visibility-shift delay-4 property-all duration-5 timing-1"> Description
                </h5>
                <div class="pattern--green | visibility-shift delay-3 property-all duration-5 timing-1"></div>
            </div>
        </div>
    </a>

    <a href="#" class="profile-card">
        <div class="profile-card__content">
            <figure class="profile-card__figure | image -is1x1">
                <img src="/dist/assets/img/fpo-04.jpg" alt="">
            </figure>
            <div class="profile-card__main">
                <h4 class="header-md | visibility-shift delay-3 property-all duration-5 timing-1">Jane Smith</h4>
                <h5 class="header-sm -white | mt-1 visibility-shift delay-4 property-all duration-5 timing-1"> Description
                </h5>
                <div class="pattern--green | visibility-shift delay-3 property-all duration-5 timing-1"></div>
            </div>
        </div>
    </a>

</section>
</div>

<!-- Markup -->

{{< highlight html  >}}

<section class="profile-cards flex-grid flex-wrap ">
    <a href="#" class="profile-card">
        …
    </a>

    <a href="#" class="profile-card">
        …
    </a>

    <a href="#" class="profile-card">
        …
    </a>

</section>
{{< /highlight >}}
        
<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
    <h2>Profile Card</h2>
</div>

<!-- Result -->
<div class="styleguide__result">
    <a href="#" class="profile-card">
        <div class="profile-card__content">
            <figure class="profile-card__figure | image -is1x1">
                <img src="/dist/assets/img/fpo-04.jpg" alt="">
            </figure>
            <div class="profile-card__main">
                <h4 class="header-md | visibility-shift delay-3 property-all duration-5 timing-1">Jane Smith</h4>
                <h5 class="header-sm -white | mt-1 visibility-shift delay-4 property-all duration-5 timing-1">
                    Description
                </h5>
                <div class="pattern--green | visibility-shift delay-3 property-all duration-5 timing-1"></div>
            </div>
        </div>
    </a>
</div>

<!-- Markup -->

{{< highlight html  >}}
<a href="#" class="profile-card">

<div class="profile-card__content">
<figure class="profile-card__figure | image -is1x1">
<img src="/dist/assets/img/fpo-04.jpg" alt="">
</figure>
<div class="profile-card__main">
<h4 class="header-md | visibility-shift delay-3 property-all duration-5 timing-1">Jane Smith</h4>
<h5 class="header-sm -white | mt-1 visibility-shift delay-4 property-all duration-5 timing-1">
Description
</h5>
<div class="pattern--green | visibility-shift delay-3 property-all duration-5 timing-1"></div>
</div>
</div>
</a>
{{< /highlight >}}

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
    <h2>Profile Card - Info</h2>
</div>

<!-- Result -->
<div class="styleguide__result">
<section class="profile-cards flex-grid flex-wrap">
<div class="h-64"></div>
<div class="profile-card--info">
    <div class="profile-card--info__content">
        <div class="profile-card--info__main">
            <h5 class="header-lg">1,117</h5>
            <h4 class="header-sm -light | mb-10">PLEDGERS AROUND THE GLOBE</h4><a class="link -icon text-sm"
                href="/pledgers"><span class="text">Meet more pledgers</span><span
                    class="icon | icon--arrow -sm-3 -stroke-2"><svg viewbox="0 0 13 39" xmlns="http://www.w3.org/2000/svg"><polyline class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5" stroke="currentColor"></polyline></svg></span></a>
        </div>
    </div>
</div>
</section>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="profile-card--info">
    <div class="profile-card--info__content">
        <div class="profile-card--info__main">
            <h5 class="header-lg">1,117</h5>
            <h4 class="header-sm -light | mb-10">PLEDGERS AROUND THE GLOBE</h4><a class="link -icon text-sm"
                href="/pledgers"><span class="text">Meet more pledgers</span><span
                    class="icon | icon--arrow -sm-3 -stroke-2"><svg viewbox="0 0 13 39" xmlns="http://www.w3.org/2000/svg"><polyline class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5" stroke="currentColor"></polyline></svg></span></a>
        </div>
    </div>
</div>
{{< /highlight >}}
