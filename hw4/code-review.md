## Code Review Exercise

Write your code review here in markdown format.

## Code Review Example

### Issue #1: Buttons

I found this issue on line 158 and 201, these buttons doesnt have an aria-labels or titles in their delcaration.

<img src="../images/code-review-issue.png" height=200 alt="screenshot showing an aaccessibility issue on the image with the close button">

Initial code:

```html
<button class="close-popup-button">
  <i class="fa-solid fa-xmark"></i>
</button>
```

Updated code:

```html
<button
  class="close-popup-button"
  title="close popup button"
  aria-label="close popup button"
>
  <i class="fa-solid fa-xmark"></i>
</button>
```

### Issue #2: Buttons pt.2

I noticed the more info buttons were the wrong type of class. if i remember correctly I think I remember being told every button on a website needs to be a button class. I also thought it should have an aria tag for screen readers

Initial code:

'''html
<a class="more-info-button">More Info</a>
'''

Updated code:
'''html
<button class="more-info-button" aria-label="More Info">More Info</button>

'''

### Issue 3: Sections instead of divs

I noticed that there were no section elements in the file but there were many div classes that had the word section in them.
i think it would be better to use the element section along with calling it a section to have it make more sense. I also think putting history, intro, and characteristics should be in section tags as well.

initial code
'''html

<div class="popup-section">

'''

initial code 2:
'''html

 <div id="Introduction" class="content-container">
        <h1>Introduction</h1>
        <p>
          The Scottish Fold is a breed of domestic cat with a natural dominant
          gene mutation that affects cartilage throughout the body, causing the
          ears to "fold", bending forward and down towards the front of the
          head, which gives the cat what is often described as an "owl-like"
          appearance.
          <br />
          <br />
          Originally called lop-eared or lops after the lop-eared rabbit,
          Scottish Fold became the breed's name in 1966. Depending on
          registries, longhaired Scottish Folds are varyingly known as Highland
          Fold, Scottish Fold Longhair, Longhair Fold and Coupari.
          <br />
          <br />
          All Fold cats are affected by osteochondrodysplasia (OCD), a
          developmental abnormality that affects cartilage and bone development
          throughout the body. This condition causes the ear fold in the breed
          and studies point to all Fold cats being affected by it. Fold cats
          therefore have malformed bone structures and can develop severe
          painful degenerative joint diseases at an early age. Due to these
          health conditions, breeding Fold cats is prohibited in several
          countries and some major cat registries do not recognise the cat
          breed.
        </p>
      </div>
'''

updated code
'''html

<section class="popup-section">
'''

updated code 2:
'''html

 <section id="Introduction" class="content-container">
        <h1>Introduction</h1>
        <p>
          The Scottish Fold is a breed of domestic cat with a natural dominant
          gene mutation that affects cartilage throughout the body, causing the
          ears to "fold", bending forward and down towards the front of the
          head, which gives the cat what is often described as an "owl-like"
          appearance.
          <br />
          <br />
          Originally called lop-eared or lops after the lop-eared rabbit,
          Scottish Fold became the breed's name in 1966. Depending on
          registries, longhaired Scottish Folds are varyingly known as Highland
          Fold, Scottish Fold Longhair, Longhair Fold and Coupari.
          <br />
          <br />
          All Fold cats are affected by osteochondrodysplasia (OCD), a
          developmental abnormality that affects cartilage and bone development
          throughout the body. This condition causes the ear fold in the breed
          and studies point to all Fold cats being affected by it. Fold cats
          therefore have malformed bone structures and can develop severe
          painful degenerative joint diseases at an early age. Due to these
          health conditions, breeding Fold cats is prohibited in several
          countries and some major cat registries do not recognise the cat
          breed.
        </p>
      </section>
'''

### Issue 4: Spans instead of labels

I noticed that in the inputs for the form, the breed inputs would use labels while the inputs for name, email, username, etc

'''html
<span class="form-label">Name</span>
<input
              aria-label="name"
              class="form-input-box"
              type="text"
              id="name"
              name="name"
            />
'''

'''html
<label for="form-label">Name</span>
<input
              aria-label="name"
              class="form-input-box"
              type="text"
              id="name"
              name="name"
            />
'''
