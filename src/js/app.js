const buttons = document.querySelectorAll("[data-btn]");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const offset = btn.dataset.carouselBtn === "next" ? 1 : -1;

    const slides = btn
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    const nextIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (nextIndex < 0) nextIndex = slides.children.length - 1;
    if (nextIndex >= slides.children.length) nextIndex = 0;

    slides.children[nextIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
