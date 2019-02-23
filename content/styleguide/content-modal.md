---
title: Modal - Content
slug: content-modal
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Content Modal</h1>
  <p><u>SASS Partial:</u> <code>components/content-modal</code></p>

  <p><u>Modal Base Styles:</u> <code>base/modal</code></p>
  <p><u>Vue Component JS:</u> <code>src/js/components/ContentModal.vue</code></p>
  <p><u>Description:</u> This is a Vue component that uses Template Slots, meaning you can swap out content easily right in the HTML markup. You can use anything to trigger the modal using the Trigger Slot.</p>
  <p><u>Resources:</u>  <a href="https://vuejs.org/v2/guide/components-slots.html" target="_blank">Vue Slots</a></p>
</div>

<!-- Result -->
<div class="styleguide__result">
<content_modal>
    <!-- Trigger -->
    <template slot="trigger">
        <button class="btn -light -full -solid">Review & Sign</button>
    </template>
    
    <!-- Header -->
    <header slot="header">
        <h4 class="header-xl-2 text-green-light | mb-3">Thank you!</h4>
        <h5 class="header-sm -light">
        Your pledge has been successfully sent.
        </h5>
    </header>

    <!-- Article -->
    <article slot="article">
        <article class="article-copy">
        <p>I can’t thank you enough for your support.</p>

        <p>
            We're empowering founders and investors to add value to their
            companies as well as the causes they love, without sacrificing one
            for the other. Together, we’re making a real difference in the
            tech world and in the global community.
        </p>

        <p>
            Now you’re part of our global community who've all committed to do
            good by pledging to support the social causes they’re passionate
            about.
        </p>

        <p>That means something.</p>

        <p>
            Sincerely,<br />

            <img src="/dist/assets/img/fpo-sig.jpg" class="-flush block w-48" />
            David Goldberg<br />
            Co-Founder & Global CEO
        </p>
        </article>
    </article>
</content_modal>
</div>

<!-- Markup -->

{{< highlight html  >}}
<content_modal>
    <!-- Trigger -->
    <template slot="trigger">
        <button class="btn -light -full -solid">Review & Sign</button>
    </template>
    
    <!-- Header -->
    <header slot="header">
        <h4 class="header-xl-2 text-green-light | mb-3">Thank you!</h4>
        <h5 class="header-sm -light">
        Your pledge has been successfully sent.
        </h5>
    </header>

    <!-- Article -->
    <article slot="article">
        <article class="article-copy">
        <p>I can’t thank you enough for your support.</p>

        <p>
            We're empowering founders and investors to add value to their
            companies as well as the causes they love, without sacrificing one
            for the other. Together, we’re making a real difference in the
            tech world and in the global community.
        </p>

        <p>
            Now you’re part of our global community who've all committed to do
            good by pledging to support the social causes they’re passionate
            about.
        </p>

        <p>That means something.</p>

        <p>
            Sincerely,<br />

            <img src="/dist/assets/img/fpo-sig.jpg" class="-flush block w-48" />
            David Goldberg<br />
            Co-Founder & Global CEO
        </p>
        </article>
    </article>
</content_modal>
{{< /highlight >}}
