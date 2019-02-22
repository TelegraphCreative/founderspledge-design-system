---
title: Form - Select Field
slug: select-field
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Select Field Base</h1>
  <p><u>SASS Partial:</u> <code>vendor/choices</code></p>
  <p><u>Related SASS Partial:</u> <code>standard-form-base</code></p>
  
  <p><u>Description:</u> This is a Vue component that uses Vue Properties to set the variant classes. Check out the Select Field for all variant styles.</p>

  <h2>Default</h2>

</div>

<!-- Result -->
<div class="styleguide__result">
    <select_box :opt="{ variant: '' }">
        <option value="es" selected>Germany</option>
        <option value="en">United States of America</option>
        <option value="ma">France</option>
        <option value="de">Spain</option>
        <option value="fr">Italy</option>
    </select_box>
</div>

<!-- Markup -->

{{< highlight html  >}}
<select_box :opt="{ variant: '' }">
    <option value="es" selected>Germany</option>
    <option value="en">United States of America</option>
    <option value="ma">France</option>
    <option value="de">Spain</option>
    <option value="fr">Italy</option>
</select_box>
{{< /highlight >}}


<div class="styleguide__content">
    <h2>Default Dark</h2>
</div>


<!-- Result -->
<div class="styleguide__result">
<select_box :opt="{ variant: '-dark' }">
    <option value="es" selected>Germany</option>
    <option value="en">United States of America</option>
    <option value="ma">France</option>
    <option value="de">Spain</option>
    <option value="fr">Italy</option>
</select_box>
</div>

<!-- Markup -->

{{< highlight html  >}}
<select_box :opt="{ variant: '-dark' }">
    <option value="es" selected>Germany</option>
    <option value="en">United States of America</option>
    <option value="ma">France</option>
    <option value="de">Spain</option>
    <option value="fr">Italy</option>
</select_box>
{{< /highlight >}}



<div class="styleguide__content">
    <h2>Default Center</h2>
</div>


<!-- Result -->
<div class="styleguide__result">
<select_box :opt="{ variant: '-center' }">
    <option value="es" selected>Germany</option>
    <option value="en">United States of America</option>
    <option value="ma">France</option>
    <option value="de">Spain</option>
    <option value="fr">Italy</option>
</select_box>
</div>

<!-- Markup -->

{{< highlight html  >}}
<select_box :opt="{ variant: '-center' }">
    <option value="es" selected>Germany</option>
    <option value="en">United States of America</option>
    <option value="ma">France</option>
    <option value="de">Spain</option>
    <option value="fr">Italy</option>
</select_box>
{{< /highlight >}}


<div class="styleguide__content">
    <h2>Default Dark Center</h2>
</div>


<!-- Result -->
<div class="styleguide__result">
<select_box :opt="{ variant: '-dark -center' }">
    <option value="es" selected>Germany</option>
    <option value="en">United States of America</option>
    <option value="ma">France</option>
    <option value="de">Spain</option>
    <option value="fr">Italy</option>
</select_box>
</div>

<!-- Markup -->

{{< highlight html  >}}
<select_box :opt="{ variant: '-dark -center' }">
    <option value="es" selected>Germany</option>
    <option value="en">United States of America</option>
    <option value="ma">France</option>
    <option value="de">Spain</option>
    <option value="fr">Italy</option>
</select_box>
{{< /highlight >}}


<div class="styleguide__content">
    <h2>Standard</h2>
    <p>Styled to match the Standard Form Base</p>
</div>
<!-- Result -->
<div class="styleguide__result">
    <form action="" class="standard-form-base">
        <div class="form-group">
            <div class="field-group">
                <label class="standard-label" for="country">
                Country
                </label>
                <select_box :opt="{ variant: '-standard' }">
                <option value="es" selected>Germany</option>
                <option value="en">United States of America</option>
                <option value="ma">France</option>
                <option value="de">Spain</option>
                <option value="fr">Italy</option>
                </select_box>
            </div>
        </div>
    </form>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="form-group">
    <div class="field-group">
        <label class="standard-label" for="country">
        Country
        </label>
        <select_box :opt="{ variant: '-standard' }">
        <option value="es" selected>Germany</option>
        <option value="en">United States of America</option>
        <option value="ma">France</option>
        <option value="de">Spain</option>
        <option value="fr">Italy</option>
        </select_box>
    </div>
</div>
{{< /highlight >}}



<div class="styleguide__content">
    <h2>Standard Medium</h2>
</div>


<!-- Result -->
<div class="styleguide__result">
    <form action="" class="standard-form-base">
        <div class="form-group">
            <div class="field-group">
                <label class="standard-label" for="country">
                Country
                </label>
                <select_box :opt="{ variant: '-standard -md' }">
                <option value="es" selected>Germany</option>
                <option value="en">United States of America</option>
                <option value="ma">France</option>
                <option value="de">Spain</option>
                <option value="fr">Italy</option>
                </select_box>
            </div>
        </div>
    </form>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="form-group">
    <div class="field-group">
        <label class="standard-label" for="country">
        Country
        </label>
        <select_box :opt="{ variant: '-standard -md' }">
        <option value="es" selected>Germany</option>
        <option value="en">United States of America</option>
        <option value="ma">France</option>
        <option value="de">Spain</option>
        <option value="fr">Italy</option>
        </select_box>
    </div>
</div>
{{< /highlight >}}


