# Frontend Mentor - Coding bootcamp testimonials slider solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![Project Screenshot](./src/assets/images/project-screeshot.jpg)

## My process

### Built with

- Flexbox
- CSS Grid
- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Accessibility in mind

### What I learned

```js
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => slide(btn));
});

function slide(btn) {
  const offset = btn.dataset.carouselBtn === "next" ? 1 : -1;

  const testimonies = btn.closest(".main");

  const activeTestimony = testimonies.querySelector("[data-active]");

  let nextIndex = [...testimonies.children].indexOf(activeTestimony) + offset;

  if (nextIndex < 0) nextIndex = testimonies.children.length - 1;
  if (nextIndex >= testimonies.children.length) nextIndex = 0;

  testimonies.children[nextIndex].dataset.active = true;
  delete activeTestimony.dataset.active;
}
```

### Continued development

Css Positions, transitions, animations.

### Useful resources

- [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified/videos) - I watched this web dev simplified video on youtube to understand how to implement the carousel.

## Author

- Website - [George Asiedu](https://www.georgeasiedu.tech)
- Frontend Mentor - [@george5-star](https://www.frontendmentor.io/profile/george5-star)
- Twitter - [@george5_star](https://www.twitter.com/george5_star)
