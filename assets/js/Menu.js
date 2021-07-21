const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-togle-menu]");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    header.classList.toggle("is-open");
  });
}
