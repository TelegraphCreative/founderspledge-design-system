---
title: Profile Slider
slug: profile-slider
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Profile Slider</h1>
  <p><u>SASS Partial:</u> <code>components/profile-slider</code></p>
  <p><u>Related SASS Partial:</u> <code>components/slider</code></p>
  <p><u>Hugo Partial:</u> <code>components/profile-slider</code></p>
  <p><u>Vue Component:</u> <code>components/FullSlider</code></p>
  <p><u>Vue Component JS:</u> <code>src/js/components/ProfileModal.vue</code></p>
  <p><u>Description:</u> This is a Vue component that uses Template Slots, meaning you can swap out content easily right in the HTML markup.</p>
  <p><u>Resources:</u>  <a href="https://vuejs.org/v2/guide/components-slots.html" target="_blank">Vue Slots</a></p>
</div>

<!-- Result -->
<div class="styleguide__result">
<section class="bg-oat-light | space-t">
<!-- Profile Slider -->
<full_slider :opt="{
        items: 1,
        autoplay: true,
        mode: 'gallery'
    }" class="profile-slider slider-reset -no-gutters | container clearfix">
    
    <!-- Slides -->
<template slot="slides">
    <div class="profile-slider__slide">
    <div
        class="profile-slider__content gutter-sm gutter-l--md | md:flex-grid"
    >
        <!-- Main -->
        <div class="profile-slider__main">
        <blockquote class="blockquote | md:pt-10">
            <h3 class="blockquote__quote | mb-8 md:mb-10">
            "I’m excited to be able to contribute to a community of founders
            who are thinking critically about their giving. Together I believe
            we can achieve a huge amount of good."
            </h3>
            <cite>
            <h5 class="blockquote__source-header | header-md">
                Miguel Mckelvey
            </h5>
            <small class="blockquote__source-descr">Founder &amp; CEO</small>
            </cite>
        </blockquote>
        </div>
        <!-- Aside -->
        <div class="profile-slider__aside">
        <figure class="image -is1x1">
            <img
            src="/dist/assets/img/fpo-02.jpg"
            data-src="/dist/assets/img/fpo-02.jpg"
            alt=""
            />
        </figure>
        </div>
    </div>
    </div>
    <div class="profile-slider__slide">
    <div
        class="profile-slider__content gutter-sm gutter-l--md | md:flex-grid"
    >
        <!-- Main -->
        <div class="profile-slider__main">
        <blockquote class="blockquote | md:pt-10">
            <h3 class="blockquote__quote | header-lg | mb-8 md:mb-12">
            "Right and left, the streets take you waterward. Its extreme
            down-town is the battery, where that noble mole is washed by
            waves, and cooled by breezes, which a few hours previous were out
            of sight of land."
            </h3>
            <cite>
            <h5 class="blockquote__source-header | header-md">
                Miguel Mckelvey
            </h5>
            <small class="blockquote__source-descr">Founder &amp; CEO</small>
            </cite>
        </blockquote>
        </div>
        <!-- Aside -->
        <div class="profile-slider__aside">
        <figure class="image -is1x1 -show-overflow">
            <img
            src="/dist/assets/img/fpo-02.jpg"
            data-src="/dist/assets/img/fpo-02.jpg"
            alt=""
            />
        </figure>
        </div>
    </div>
    </div>
</template>
    <!-- Slide Nav -->
<template slot="slideNav">
    <li class="nav__item">
    <figure class="image -is1x1">
        <img
        src="/dist/assets/img/fpo-02.jpg"
        data-src="/dist/assets/img/fpo-02.jpg"
        class="active | fit-cover"
        alt=""
        />
        <img
        src="/dist/assets/img/fpo-02--fade.jpg"
        data-src="/dist/assets/img/fpo-02.jpg"
        class="inactive | fit-cover"
        alt=""
        />
    </figure>
    </li>
    <li class="nav__item">
    <figure class="image -is1x1">
        <img
        src="/dist/assets/img/fpo-02.jpg"
        data-src="/dist/assets/img/fpo-02.jpg"
        class="active | fit-cover"
        alt=""
        />
        <img
        src="/dist/assets/img/fpo-02--fade.jpg"
        data-src="/dist/assets/img/fpo-02.jpg"
        class="inactive | fit-cover"
        alt=""
        />
    </figure>
    </li>
</template>
</full_slider>
</section>
</div>

<!-- Markup -->

{{< highlight html  >}}

<section class="bg-oat-light | space-t">
<!-- Profile Slider -->
<full_slider :opt="{
        items: 1,
        autoplay: true,
        mode: 'gallery'
    }" class="profile-slider slider-reset -no-gutters | container clearfix">
    
    <!-- Slides -->
<template slot="slides">
    <div class="profile-slider__slide">
    <div
        class="profile-slider__content gutter-sm gutter-l--md | md:flex-grid"
    >
        <!-- Main -->
        <div class="profile-slider__main">
        <blockquote class="blockquote | md:pt-10">
            <h3 class="blockquote__quote | mb-8 md:mb-10">
            "I’m excited to be able to contribute to a community of founders
            who are thinking critically about their giving. Together I believe
            we can achieve a huge amount of good."
            </h3>
            <cite>
            <h5 class="blockquote__source-header | header-md">
                Miguel Mckelvey
            </h5>
            <small class="blockquote__source-descr">Founder &amp; CEO</small>
            </cite>
        </blockquote>
        </div>
        <!-- Aside -->
        <div class="profile-slider__aside">
        <figure class="image -is1x1">
            <img
            src="/dist/assets/img/fpo-02.jpg"
            data-src="/dist/assets/img/fpo-02.jpg"
            alt=""
            />
        </figure>
        </div>
    </div>
    </div>
    <div class="profile-slider__slide">
    <div
        class="profile-slider__content gutter-sm gutter-l--md | md:flex-grid"
    >
        <!-- Main -->
        <div class="profile-slider__main">
        <blockquote class="blockquote | md:pt-10">
            <h3 class="blockquote__quote | header-lg | mb-8 md:mb-12">
            "Right and left, the streets take you waterward. Its extreme
            down-town is the battery, where that noble mole is washed by
            waves, and cooled by breezes, which a few hours previous were out
            of sight of land."
            </h3>
            <cite>
            <h5 class="blockquote__source-header | header-md">
                Miguel Mckelvey
            </h5>
            <small class="blockquote__source-descr">Founder &amp; CEO</small>
            </cite>
        </blockquote>
        </div>
        <!-- Aside -->
        <div class="profile-slider__aside">
        <figure class="image -is1x1 -show-overflow">
            <img
            src="/dist/assets/img/fpo-02.jpg"
            data-src="/dist/assets/img/fpo-02.jpg"
            alt=""
            />
        </figure>
        </div>
    </div>
    </div>
</template>
    <!-- Slide Nav -->
<template slot="slideNav">
    <li class="nav__item">
    <figure class="image -is1x1">
        <img
        src="/dist/assets/img/fpo-02.jpg"
        data-src="/dist/assets/img/fpo-02.jpg"
        class="active | fit-cover"
        alt=""
        />
        <img
        src="/dist/assets/img/fpo-02--fade.jpg"
        data-src="/dist/assets/img/fpo-02.jpg"
        class="inactive | fit-cover"
        alt=""
        />
    </figure>
    </li>
    <li class="nav__item">
    <figure class="image -is1x1">
        <img
        src="/dist/assets/img/fpo-02.jpg"
        data-src="/dist/assets/img/fpo-02.jpg"
        class="active | fit-cover"
        alt=""
        />
        <img
        src="/dist/assets/img/fpo-02--fade.jpg"
        data-src="/dist/assets/img/fpo-02.jpg"
        class="inactive | fit-cover"
        alt=""
        />
    </figure>
    </li>
</template>
</full_slider>
</section>
{{< /highlight >}}
