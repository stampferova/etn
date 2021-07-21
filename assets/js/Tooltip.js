const articleTrigger = document.querySelector("#articleTooltip");
const tooltip = document.querySelector("#tooltip");

const popperInstance = Popper.createPopper(articleTrigger, tooltip, {
  placement: "top",
});

function show() {
  tooltip.setAttribute("data-show", "");
  popperInstance.update();
}

function hide() {
  tooltip.removeAttribute("data-show");
}

const showEvents = ["mouseenter", "focus"];
const hideEvents = ["mouseleave", "blur"];

showEvents.forEach((event) => {
  articleTrigger.addEventListener(event, show);
});

hideEvents.forEach((event) => {
  articleTrigger.addEventListener(event, hide);
});
