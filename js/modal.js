export const Modal = {
  modalClass: document.querySelector(".modal"),
  buttonClose: document.querySelector(".modal .feather"),
  buttonInfo: document.querySelector(".modal .info"),
  infoList: document.querySelector(".modal .info-list"),
  message: document.querySelector(".modal h1"),

  open() {
    Modal.modalClass.classList.add("open");
  },
  close() {
    Modal.modalClass.classList.remove("open");
  },
};

function showInfo() {
  Modal.infoList.classList.toggle("show");
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    Modal.close();
  }
});

Modal.buttonClose.onclick = () => {
  Modal.close();
};

Modal.buttonInfo.onclick = () => {
  showInfo();
};
