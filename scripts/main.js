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
const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// emailValidate.onchange = () => {
//   if (emailValidate.value != reg) {
//     input.classList.add("input--fieldError");
//   } else {
//     input.classList.remove("input--fieldError");
//   }
// };

// if (reg.test(address) == false) {
//   alert("Введите корректный e-mail");
//   return false;
// }

emailValidate.onchange = () => {
  if (reg.test(emailValidate.value) == false) {
    input.classList.add("input--fieldError");
  } else {
    input.classList.remove("input--fieldError");
  }
};

popupValidButton = document.getElementsByClassName("button")[1];
console.log(popupValidButton);

popupValidButton.onclick = () => {
  if (reg.test(emailValidate.value) == true) {
    dialog.classList.remove("dialog--visible");
  }
  return false;
};
