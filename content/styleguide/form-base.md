---
title: Form - Base
slug: form-base
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Form Base</h1>
  <p><u>SASS Partial:</u> <code>standard-form-base</code></p>
  <p><u>Related SASS Partials:</u> <code>checkbox-radio</code></p>
  <p><u>Related SASS Partials:</u> <code>vendor/choices</code></p>
  
  <p><u>Description:</u> This is the base for standard forms. The core elements are:</p>

  <h2>Basics</h2>
  <ul>
    <li><code>.form-group</code>: Sets a flexbox grid and x-axis margins</li>
    <li><code>.field-group</code>: Contains the form elements directly and can be set to a width to create a column layout.</li>
    <li><code>.standard-label</code>: The input label, which is set absolutely relative to  the <code>.form-group</code> so they appear to float in the input field. Labels for radio and checkbox groups must use the <code>.-standalone</code> variation to be positioned statically.</li>
  </ul>

</div>

<!-- Result -->
<div class="styleguide__result">
    <form action="" class="standard-form-base">
        <div class="form-group">
            <div class="field-group">
            <label class="standard-label" for="first-name">
                First Name
            </label>
            <input type="text" id="first-name" placeholder="Jane Smith" />
            </div>
        </div>   
    </form>
</div>

<!-- Markup -->

{{< highlight html  >}}
<form action="" class="standard-form-base">
    <div class="form-group">
        <div class="field-group">
        <label class="standard-label" for="first-name">
            First Name
        </label>
        <input type="text" id="first-name" placeholder="Jane Smith" />
        </div>
    </div>   
</form>
{{< /highlight >}}



<div class="styleguide__content">
    <h2>Column Layout</h2>
</div>


<!-- Result -->
<div class="styleguide__result">
    <form action="" class="standard-form-base">
            <div class="form-group">
                <div class="field-group | w-1/2">
                <label class="standard-label" for="city">
                    City
                </label>
                <input type="text" id="city" />
                </div>
                <div class="field-group | w-1/2">
                <label class="standard-label" for="zip">
                    Zip
                </label>
                <input type="text" id="zip" />
                </div>
            </div>
    </form>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="form-group">
    <div class="field-group | w-1/2">
        <label class="standard-label" for="city">
            City
        </label>
        <input type="text" id="city" />
    </div>
    <div class="field-group | w-1/2">
        <label class="standard-label" for="zip">
            Zip
        </label>
        <input type="text" id="zip" />
    </div>
</div>
{{< /highlight >}}



<div class="styleguide__content">
    <h2>Radio Boxes</h2>
</div>

<!-- Result -->
<div class="styleguide__result">
    <form action="" class="standard-form-base">
        <div class="form-group">
            <div class="field-group">
                <div class="standard-label -standalone">
                    WHERE IS YOUR COMPANY BASED?
                </div>
                <div class="option-group">
                    <label class="option-group__item | control control--radio-box" for="option-1"><input id="option-1" name="group-A" type="radio" value="Option 1"> <span class="control__text | w-full">US/CAN</span></label> <label class="option-group__item | control control--radio-box" for="option-2"><input id="option-2" name="group-A" type="radio" value="Option 2"> <span class="control__text | w-full">UK/EU</span></label> <label class="option-group__item | control control--radio-box" for="option-3"><input id="option-3" name="group-A" type="radio" value="Option 3"> <span class="control__text | w-full">Other</span></label>
                </div>
            </div>
        </div>
    </form>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="form-group">
    <div class="field-group">
        <div class="standard-label -standalone">
            WHERE IS YOUR COMPANY BASED?
        </div>
        <div class="option-group">
            <label class="option-group__item | control control--radio-box" for="option-1"><input id="option-1" name="group-A" type="radio" value="Option 1"> <span class="control__text | w-full">US/CAN</span></label> <label class="option-group__item | control control--radio-box" for="option-2"><input id="option-2" name="group-A" type="radio" value="Option 2"> <span class="control__text | w-full">UK/EU</span></label> <label class="option-group__item | control control--radio-box" for="option-3"><input id="option-3" name="group-A" type="radio" value="Option 3"> <span class="control__text | w-full">Other</span></label>
        </div>
    </div>
</div>
{{< /highlight >}}


<div class="styleguide__content">
    <h2>Radios</h2>
</div>
    

<!-- Result -->
<div class="styleguide__result">
    <form action="" class="standard-form-base">
        <div class="field-group">
            <label for="radio-option-A" class="control control--radio -small">       
                <input type="radio" 
                    value="Radio A"
                    name="radio-group-A" 
                    id="radio-option-A">
                    
                
                <span class="control__text">Radio A</span>
    
                <div class="control__indicator"></div>  
            </label>
        </div>
        <div class="field-group">
            <label for="radio-option-B" class="control control--radio -small">       
                <input type="radio" 
                    value="Radio B"
                    name="radio-group-A" 
                    id="radio-option-B">
                
                <span class="control__text">Radio B</span>
    
                <div class="control__indicator"></div>  
            </label>
        </div>
    </form>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="field-group">
    <label for="option-A" class="control control--checkbox -small">       
        <input type="checkbox" 
            value="Option A"
            name="group-A" 
            id="option-A">
        
        <span class="control__text">Option A</span>

        <div class="control__indicator"></div>  
    </label>
</div>
{{< /highlight >}}


<div class="styleguide__content">
    <h2>Checkboxes</h2>
</div>


<!-- Result -->
<div class="styleguide__result">
    <form action="" class="standard-form-base">
        <div class="field-group">
            <label for="option-A" class="control control--checkbox -small">       
                <input type="checkbox" 
                    value="Option A"
                    name="group-A" 
                    id="option-A">
                
                <span class="control__text">Option A</span>
    
                <div class="control__indicator"></div>  
            </label>
        </div>
        <div class="field-group">
            <label for="option-B" class="control control--checkbox -small">       
                <input type="checkbox" 
                    value="Option B"
                    name="group-B" 
                    id="option-B">
                
                <span class="control__text">Option B</span>
    
                <div class="control__indicator"></div>  
            </label>
        </div>
    </form>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="field-group">
    <label for="option-A" class="control control--checkbox -small">       
        <input type="checkbox" 
            value="Option A"
            name="group-A" 
            id="option-A">
        
        <span class="control__text">Option A</span>

        <div class="control__indicator"></div>  
    </label>
</div>
{{< /highlight >}}




<div class="styleguide__content">
    <h2>Select Boxes</h2>
    <p><u>Description:</u> This is a Vue component that uses Vue Properties to set the variant classes. Check out the Select Field for all variant styles.</p>
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