import { Modal } from "./modal.js";
import { notANumber, calculateIMC, showError } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
  event.preventDefault();

  const height = inputHeight.value;
  const weight = inputWeight.value;

  const inputIsNaN = notANumber(weight) || notANumber(height);

  if (inputIsNaN) {
    showError();
    return;
  }

  const result = calculateIMC(height, weight);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerHTML = message;
  Modal.open();

  inputWeight.value = "";
  inputHeight.value = "";
};
