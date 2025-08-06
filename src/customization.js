import initPassword from "./password.js";

const customization = () => {
  const rangeInput = document.getElementById("chars-range");
  const rangeValue = document.getElementById("chars-range-value");
  const regenIcon = document.getElementById("regen-icon");

  const upperCb = document.getElementById("uppercase-chars");
  const lowerCb = document.getElementById("lowercase-chars");
  const numbersCb = document.getElementById("numbers");
  const symbolsCb = document.getElementById("symbols");

  rangeValue.textContent = rangeInput.value;
  rangeInput.addEventListener("input", () => {
    rangeValue.textContent = rangeInput.value;
  });

  regenIcon.addEventListener("click", () => {
    const length = parseInt(rangeInput.value, 10);

    const options = {
      useUpper: upperCb.checked,
      useLower: lowerCb.checked,
      useNumbers: numbersCb.checked,
      useSymbols: symbolsCb.checked,
    };

    initPassword(length, options);
  });
};

export default customization;
