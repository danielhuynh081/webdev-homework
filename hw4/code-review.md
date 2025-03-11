## Code Review Exercise - Daniel Huynh

### Issue #1: Wrong Class For Buttons

The issue is the "more info" button is created using an anchor (<a>) tag instead of a proper button element. if i remember correctly I think we were told every button on a website needs to be a button class. It can cause accessibility issues and may not behave the same for all devices. I also thought it should have an aria tag for screen readers.

Initial code:

```html
<a class="more-info-button">More Info</a>
```

Updated code:

```html
<button class="more-info-button" aria-label="More Info">More Info</button>
```

### Issue #2: Improper Div Elements

I noticed that there were no section elements in the file but there were many div classes that had the word section in them.
i think it would be better to use the section element because since it logically represents a section of the page it wouldmake more sense. I also think putting history, intro, and characteristics should be in section tags as well.

this is an issue because the section element is designed to group related content together to make the docmuent structure more understandable and improve accessbiility. there were already div classes and using divs to create sections made it hard to tell where a section would start and end. having the section element helps us identify each section easier and makes it easier to maintain.

initial code

```html
<div class="popup-section"></div>
```

initial code 2:

```html
<div id="Introduction" class="content-container">
  <h1>Introduction</h1>
  <p>
    The Scottish Fold is a breed of domestic cat with a natural dominant gene
    mutation that affects cartilage throughout the body, causing the ears to
    "fold", bending forward and down towards the front of the head, which gives
    the cat what is often described as an "owl-like" appearance.
    <br />
    <br />
    Originally called lop-eared or lops after the lop-eared rabbit, Scottish
    Fold became the breed's name in 1966. Depending on registries, longhaired
    Scottish Folds are varyingly known as Highland Fold, Scottish Fold Longhair,
    Longhair Fold and Coupari.
    <br />
    <br />
    All Fold cats are affected by osteochondrodysplasia (OCD), a developmental
    abnormality that affects cartilage and bone development throughout the body.
    This condition causes the ear fold in the breed and studies point to all
    Fold cats being affected by it. Fold cats therefore have malformed bone
    structures and can develop severe painful degenerative joint diseases at an
    early age. Due to these health conditions, breeding Fold cats is prohibited
    in several countries and some major cat registries do not recognise the cat
    breed.
  </p>
</div>
'''
```

updated code

```html
<section class="popup-section"></section>
```

updated code 2:

```html
<section id="Introduction" class="content-container">
  <h1>Introduction</h1>
  <p>
    The Scottish Fold is a breed of domestic cat with a natural dominant gene
    mutation that affects cartilage throughout the body, causing the ears to
    "fold", bending forward and down towards the front of the head, which gives
    the cat what is often described as an "owl-like" appearance.
    <br />
    <br />
    Originally called lop-eared or lops after the lop-eared rabbit, Scottish
    Fold became the breed's name in 1966. Depending on registries, longhaired
    Scottish Folds are varyingly known as Highland Fold, Scottish Fold Longhair,
    Longhair Fold and Coupari.
    <br />
    <br />
    All Fold cats are affected by osteochondrodysplasia (OCD), a developmental
    abnormality that affects cartilage and bone development throughout the body.
    This condition causes the ear fold in the breed and studies point to all
    Fold cats being affected by it. Fold cats therefore have malformed bone
    structures and can develop severe painful degenerative joint diseases at an
    early age. Due to these health conditions, breeding Fold cats is prohibited
    in several countries and some major cat registries do not recognise the cat
    breed.
  </p>
</section>
```

### Issue #3: Spans instead of labels

I noticed that in the inputs for the form, the breed inputs would use labels while the inputs for name, email, username, etc used span.

this is an isuse because without proper label elements , some screen readers may not correctly announce the purpose of the input field. using <label> makes it explicit and is helpful for people navigating with assisitive technologies. this issue can be resolved by swtiching the element types from <span class> to <label for>

initial code:

```html
<span class="form-label">Name</span>
<input
  aria-label="name"
  class="form-input-box"
  type="text"
  id="name"
  name="name"
/>
```

updated code:

```html
<label for="form-label">Name</span>
<input
              aria-label="name"
              class="form-input-box"
              type="text"
              id="name"
              name="name"
            />
```

### Conclusion:

In conclusion, we should always review the elements we use and check for any missing components to ensure proper functionality. This practice also helps accommodate users navigating with assistive technologies, promoting a more inclusive and accessible experience.
