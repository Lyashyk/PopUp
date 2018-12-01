const popupCallerButton = document.querySelectorAll(".button")[0];
const dialog = document.querySelector(".dialog");
const dialogContent = document.querySelector(".dialog-content");
const popUp = document.querySelector(".popUp");
const popupCloseButton = document.getElementsByClassName("buttonIcon")[0];

addClassDialogVisible = () => {
  dialog.classList.add("dialog--visible");
};

popupCallerButton.addEventListener("click", addClassDialogVisible);

removeClassDialogVisibleWithButton = () => {
  dialog.classList.remove("dialog--visible");
};

popupCloseButton.addEventListener("click", removeClassDialogVisibleWithButton);

removeClassDialogVisibleWithFields = e => {
  if (e.target === dialog || e.target === dialogContent) {
    dialog.classList.remove("dialog--visible");
  }
};

dialog.addEventListener("click", removeClassDialogVisibleWithFields);
//-------------------------------------------------------------------------------------------------------------------------------------------
const emailValidate = document.getElementsByClassName("input-field")[0];
const input = document.getElementsByClassName("input")[0];
const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const popupValidButton = document.getElementsByClassName("button")[1];
const form = document.getElementsByClassName("form")[0];

emailValidateFunction = () => {
  if (reg.test(emailValidate.value) == false) {
    input.classList.add("input--fieldError");
  } else {
    input.classList.remove("input--fieldError");
  }
};

emailValidate.addEventListener("change", emailValidateFunction);

popupValidButtonFunction = e => {
  e.preventDefault();
  if (reg.test(emailValidate.value) == true) {
    dialog.classList.remove("dialog--visible");
    form.submit();
  }
  return false;
};

popupValidButton.addEventListener("click", popupValidButtonFunction);
