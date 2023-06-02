const btnCheck = document.querySelector(".btn");
const modalClass = document.querySelector(".modal");
const getError = document.querySelector(".error");
const closeIcon = modalClass.querySelector(".feather");

function modalScreen() {
  modalClass.classList.toggle("hide");
  modalClass.classList.toggle("open");
}

function showError() {
  getError.classList.remove("animation");
  void getError.offsetWidth;
  getError.classList.add("animation");
}

const getIMC = (event) => {
  event.preventDefault();
  const inputWeight = document.querySelector("#weight");
  const inputHeight = document.querySelector("#height");
  const resultIMC = modalClass.querySelector("h1");
  const height = inputHeight.value;
  const weight = inputWeight.value;
  const inputs = height && weight;
  let imctotal = (weight / (height / 100) ** 2).toFixed(2);

  if (!isNaN(height) && !isNaN(weight) && inputs !== "") {
    inputValue = Number(inputs);
    resultIMC.innerHTML = `Seu IMC é de ${imctotal}`;
    modalScreen();
  } else {
    inputValue = inputs;
    showError();
  }
  inputWeight.value = "";
  inputHeight.value = "";
};

btnCheck.addEventListener("click", getIMC);

closeIcon.addEventListener("click", modalScreen);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape" && modalClass.classList.contains("open")) {
    modalScreen();
  }
});
