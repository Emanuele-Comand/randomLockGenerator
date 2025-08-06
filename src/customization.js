import { createPassword } from "./password.js";

const customization = () => {
  const rangeInput = document.getElementById("chars-range");
  const rangeValue = document.getElementById("chars-range-value");
  const passwordText = document.getElementById("password-text");
  const regenIcon = document.getElementById("regen-icon");

  rangeValue.textContent = rangeInput.value;

  rangeInput.addEventListener("input", () => {
    rangeValue.textContent = rangeInput.value;
  });

  regenIcon.addEventListener("click", () => {
    const len = parseInt(rangeInput.value, 10);
    const newPw = createPassword(len);
    passwordText.textContent = newPw;
  });
};

export default customization;
