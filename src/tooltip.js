const tooltip = () => {
  document.querySelectorAll(".icon-wrapper").forEach((wrapper) => {
    const text = wrapper.dataset.tooltip;

    const show = () => {
      const tip = document.createElement("div");
      tip.className = "tooltip";
      tip.textContent = text;
      wrapper.appendChild(tip);
    };
    const hide = () => {
      const tip = wrapper.querySelector(".tooltip");
      if (tip) wrapper.removeChild(tip);
    };

    wrapper.addEventListener("mouseenter", show);
    wrapper.addEventListener("mouseleave", hide);
  });
};

export default tooltip;
