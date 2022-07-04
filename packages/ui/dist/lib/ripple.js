"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRipple = void 0;
const createRipple = (event) => {
    const element = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (element.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (element.offsetTop + radius)}px`;
    circle.classList.add("ripple");
    const ripple = element.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }
    element.appendChild(circle);
};
exports.createRipple = createRipple;
//# sourceMappingURL=ripple.js.map