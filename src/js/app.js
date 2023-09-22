const testimonials = document.querySelectorAll(".testimonial");

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

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    btns.forEach((btn) => {
      const offset = btn.dataset.carouselBtn === "next" ? 1 : -1;

      const testimonies = btn.closest(".main");

      const activeTestimony = testimonies.querySelector("[data-active]");

      let nextIndex =
        [...testimonies.children].indexOf(activeTestimony) + offset;

      if (nextIndex < 0) nextIndex = testimonies.children.length - 1;
      if (nextIndex >= testimonies.children.length) nextIndex = 0;

      testimonies.children[nextIndex].dataset.active = true;
      activeTestimony.dataset.active = false;
    });
  } else if (e.key === "ArrowLeft") {
    btns.forEach((btn) => {
      const offset = btn.dataset.carouselBtn === "next" ? 1 : -1;

      const testimonies = btn.closest(".main");

      const activeTestimony = testimonies.querySelector("[data-active]");

      let nextIndex =
        [...testimonies.children].indexOf(activeTestimony) + offset;

      if (nextIndex < 0) nextIndex = testimonies.children.length - 1;
      if (nextIndex >= testimonies.children.length) nextIndex = 0;

      testimonies.children[nextIndex].dataset.active = false;
      activeTestimony.dataset.active = true;
    });
  }
});
