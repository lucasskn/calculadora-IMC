export function showError() {
  const getError = document.querySelector(".error");
  getError.classList.remove("animation");
  void getError.offsetWidth;
  getError.classList.add("animation");
}
export function calculateIMC(height, weight) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

export const notANumber = (value) => {
  return isNaN(value) || value == "";
};
