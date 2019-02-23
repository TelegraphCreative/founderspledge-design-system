---
title: Section Header
slug: section-header
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Section Header</h1>
  <p><u>SASS Partial:</u> <code>components/section-header</code></p>
  <p><u>Hugo Partials:</u> 
  <ul>
      <li><code>components/section-header--arrow.html</code></li>
      <li><code>components/section-header--button-group.html</code></li>
      <li><code>components/section-header--basic.html</code></li>
      <li><code>components/section-header.html</code></li>
  </ul>
  </p>
  
  <p><u>Notes:</u> Optional child elements include:</p>

  <ul>
      <li>Preheader</li>
      <li>Description</li>
      <li>Link</li>
  </ul>
</div>

<!-- Result -->
<div class="styleguide__result">
<header class="section-header">
    <div class="section-header__content">
        <h4 class="header-sm">Preheader</h4>
        <h2 class="header | header-lg">Primary Title</h2>
        <div class="section-header__descr | paragraphs">
        <p>Descriptive paragraph.
        </div>
        <div class="section-header__action">
        <a href="#" class="link -underline">Optional Link</a>
        </div>
    </div>
</header>              
</div>

<!-- Markup -->

{{< highlight html  >}}
<header class="section-header">
    <div class="section-header__content">
        <h4 class="header-sm">Preheader</h4>
        <h2 class="header | header-lg">Primary Title</h2>
        <div class="section-header__descr | paragraphs">
            <p>Descriptive paragraph.
        </div>
        <div class="section-header__action">
            <a href="#" class="link -underline">Optional Link</a>
        </div>
    </div>
</header>  
{{< /highlight >}}


<div class="styleguide__content">
    <h2>Top</h2>
</div>
<!-- Result -->
<div class="styleguide__result">
<header class="section-header -top">
    <div class="section-header__content">
        <h4 class="header-sm">Preheader</h4>
        <h2 class="header | header-lg">Primary Title</h2>
        <div class="section-header__descr | paragraphs">
        <p>Descriptive paragraph.
        </div>
        <div class="section-header__action">
        <a href="#" class="link -underline">Optional Link</a>
        </div>
    </div>
</header>              
</div>

<!-- Markup -->

{{< highlight html  >}}
<header class="section-header -top">
    <div class="section-header__content">
        <h4 class="header-sm">Preheader</h4>
        <h2 class="header | header-lg">Primary Title</h2>
        <div class="section-header__descr | paragraphs">
            <p>Descriptive paragraph.
        </div>
        <div class="section-header__action">
            <a href="#" class="link -underline">Optional Link</a>
        </div>
    </div>
</header>  
{{< /highlight >}}


<div class="styleguide__content">
    <h2>Flush Left</h2>
</div>
<!-- Result -->
<div class="styleguide__result">
<header class="section-header -flush -left">
    <div class="section-header__content">
        <h4 class="header-sm">Preheader</h4>
        <h2 class="header | header-lg">Primary Title</h2>
        <div class="section-header__descr | paragraphs">
        <p>Descriptive paragraph.
        </div>
        <div class="section-header__action">
        <a href="#" class="link -underline">Optional Link</a>
        </div>
    </div>
</header>              
</div>

<!-- Markup -->

{{< highlight html  >}}
<header class="section-header -flush -left">
    <div class="section-header__content">
        <h4 class="header-sm">Preheader</h4>
        <h2 class="header | header-lg">Primary Title</h2>
        <div class="section-header__descr | paragraphs">
            <p>Descriptive paragraph.
        </div>
        <div class="section-header__action">
            <a href="#" class="link -underline">Optional Link</a>
        </div>
    </div>
</header>  
{{< /highlight >}}


<div class="styleguide__content">
    <h2>Inline Actions</h2>
</div>
<!-- Result -->
<div class="styleguide__result">
<header class="section-header -inline-actions -arrow">
    <div class="section-header__content">
        <div class="section-header__name">
            <h2 class="header | header-lg">Recent Press</h2>
        </div>
        <div class="section-header__action">
            <a href="/stories-article" class="link -icon">
                <span class="text">See All</span><span class="icon | icon--arrow -sm -stroke-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 39"><polyline stroke="currentColor" class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5 "/></svg></span>
            </a>
        </div>
    </div>
</header>            
</div>

<!-- Markup -->

{{< highlight html  >}}
<header class="section-header -inline-actions -arrow">
    <div class="section-header__content">
        <div class="section-header__name">
            <h2 class="header | header-lg">Recent Press</h2>
        </div>
        <div class="section-header__action">
            <a href="/stories-article" class="link -icon">
                <span class="text">See All</span><span class="icon | icon--arrow -sm -stroke-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 39"><polyline stroke="currentColor" class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5 "/></svg></span>
            </a>
        </div>
    </div>
</header>  
{{< /highlight >}}

<div class="styleguide__content">
    <h2>Inline Actions -Left</h2>
</div>
<!-- Result -->
<div class="styleguide__result">
<header class="section-header -inline-actions -arrow -left">
    <div class="section-header__content">
        <div class="section-header__name">
            <h2 class="header | header-lg">Recent Press</h2>
        </div>
        <div class="section-header__action">
            <a href="/stories-article" class="link -icon">
                <span class="text">See All</span><span class="icon | icon--arrow -sm -stroke-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 39"><polyline stroke="currentColor" class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5 "/></svg></span>
            </a>
        </div>
    </div>
</header>            
</div>

<!-- Markup -->

{{< highlight html  >}}
<header class="section-header -inline-actions -arrow -left">
    <div class="section-header__content">
        <div class="section-header__name">
            <h2 class="header | header-lg">Recent Press</h2>
        </div>
        <div class="section-header__action">
            <a href="/stories-article" class="link -icon">
                <span class="text">See All</span><span class="icon | icon--arrow -sm -stroke-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 39"><polyline stroke="currentColor" class="stroke" points="0.9,38.5 11.9,19.5 0.9,0.5 "/></svg></span>
            </a>
        </div>
    </div>
</header>  
{{< /highlight >}}


<div class="styleguide__content">
    <h2>Inline Actions w/ Buttons</h2>
</div>
<!-- Result -->
<div class="styleguide__result">
<header class="section-header -inline-actions -flush -left">
    <div class="section-header__content">
        <div class="section-header__name">
            <h2 class="header | header-lg">Your Profile</h2>
        </div>
        <div class="section-header__action | link-group">
            <a href="#" class="link-group__item | btn -dark -small">
                Reset Password
            </a>
            <a href="#" class="link-group__item | js-form__edit-btn | btn -dark -small -add">
                Edit
            </a>
        </div>
    </div>
</header>          
</div>

<!-- Markup -->

{{< highlight html  >}}
<header class="section-header -inline-actions -flush -left">
    <div class="section-header__content">
        <div class="section-header__name">
            <h2 class="header | header-lg">Your Profile</h2>
        </div>
        <div class="section-header__action | link-group">
            <a href="#" class="link-group__item | btn -dark -small">
                Reset Password
            </a>
            <a href="#" class="link-group__item | btn -dark -small -add">
                Edit
            </a>
        </div>
    </div>
</header>   
{{< /highlight >}}