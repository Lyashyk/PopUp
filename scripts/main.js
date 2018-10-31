const popupCallerButton = document.querySelectorAll(".button")[0];
const dialog = document.querySelector(".dialog");
const dialogContent = document.querySelector(".dialog-content");
const popUp = document.querySelector(".popUp");

popupCallerButton.onclick = () => {
  dialog.classList.add("dialog--visible");
};

const popupCloseButton = document.getElementsByClassName("buttonIcon")[0];

popupCloseButton.onclick = () => {
  dialog.classList.remove("dialog--visible");
};

dialog.onclick = e => {
  if (e.target === dialog || e.target === dialogContent) {
    dialog.classList.remove("dialog--visible");
  }
};

const emailValidate = document.getElementsByClassName("input-field")[0];
const input = document.getElementsByClassName("input")[0];

emailValidate.onchange = () => {
  if (!emailValidate.value) {
    input.classList.add("input--fieldError");
  } else {
    input.classList.remove("input--fieldError");
  }
};
