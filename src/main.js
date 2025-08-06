particlesJS.load("particles-js", "/particles.json", () => {});

import initPassword from "./password.js";
import initTooltip from "./tooltip.js";
import customization from "./customization.js";

initPassword(16);

initTooltip();

customization();
