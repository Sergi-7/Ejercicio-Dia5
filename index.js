import Component from "./Componente.js";

const button = document.querySelector(".main-button");
const bigDiv = document.querySelector(".main-div");
button.addEventListener("click", () => {
    const receivedTag = document.querySelector(".main-input").value;

    const newComponent = new Component(bigDiv, "", receivedTag);
});
