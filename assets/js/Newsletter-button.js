const newsletterTrigger = document.querySelector("[data-open-newsletter]");
const newsletterClose = document.querySelector("[data-close-newsletter]");
const newsletter = document.querySelector("[data-newsletter]");

if (newsletterTrigger) {
  newsletterTrigger.addEventListener("click", (e) => {
    newsletter.classList.toggle("is-open");
  });

  newsletterClose.addEventListener("click", (e) => {
    newsletter.classList.remove("is-open");
  });
}
