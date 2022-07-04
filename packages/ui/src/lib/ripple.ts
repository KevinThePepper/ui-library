/**
 * Causes a ripple effect when a mouse is clicked on an element.
 *
 * @param {MouseEventParams} event The mouse click event.
 * @see https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/
 */
export const createRipple = <TElement extends HTMLElement>(
  event: React.MouseEvent<TElement>
) => {
  // access the element by finding the currentTarget of the event
  const element = event.currentTarget;

  // instantiate the span element, and calculate its diameter and radius based
  // on the width and height of the button
  const circle = document.createElement("span");
  const diameter = Math.max(element.clientWidth, element.clientHeight);
  const radius = diameter / 2;

  // define the remaining properties we need for the ripples:
  // the left, top, width and height
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (element.offsetLeft + radius)}px`;
  circle.style.top = `${event.clientY - (element.offsetTop + radius)}px`;
  circle.classList.add("ripple");

  // check for any existing ripples that might be leftover from previous
  // clicks, and remove them before executing the next one
  const ripple = element.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  // append the span as a child to the button element so it is injected inside
  // the button
  element.appendChild(circle);
};
