import React, {
  ButtonHTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
} from "react";
import { ENTER_KEY } from "./constants";

// ============================================================================
// On-click or enter custom event.
// ============================================================================

export const isKeyboardEvent = (event: Event): event is KeyboardEvent => {
  return "key" in event;
};

/**
 * Event that is triggered when an element is either clicked or the enter
 * button is pressed on focus.
 */
export type IOnClickOrEnterHandler<TElement extends HTMLElement> =
  | (KeyboardEventHandler<TElement> & MouseEventHandler<TElement>)
  | undefined;

/**
 * Props for the `onClickOrEnter` helper function.
 */
export interface OnClickOrEnterProps<TElement extends HTMLElement> {
  /**
   * An event handler for when an element is either clicked or the `Enter`
   * button is pressed. If the `onClick` or `onKeyPress` functions are
   * overwritten, this function will not be called.
   *
   * _Note: This function is an intersection of the
   * {@link KeyboardEventHandler} and {@link MouseEventHandler}. Because of
   * this, the `event` parameter will be an intersection of a
   * {@link KeyboardEvent} and {@link MouseEvent}._
   */
  onClickOrEnter?: IOnClickOrEnterHandler<TElement>;
}

/**
 * A wrapper function that invokes a callback function if the event is emitted
 * from the user pressing the `Enter` key. Note that if the callback function
 * is undefined, the function will not do anything.
 *
 * @param event The event emitted from the key press.
 * @param cb The function to call if the user presses the `Enter` key.
 */
export const onClickOrEnterDefault = <TElement extends Element>(
  event: KeyboardEvent<TElement> | MouseEvent<TElement>,
  cb?: IOnClickOrEnterHandler<TElement>
) => {
  if (cb !== undefined) {
    if (isKeyboardEvent(event)) {
      if (event.key === ENTER_KEY) {
        event.preventDefault();
        cb(event);
      }
    } else {
      event.preventDefault();
      cb(event);
    }
  }
};

/**
 * Common attributes for an HTML button with custom attributes.
 */
export interface IButtonHTMLAttributes
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    OnClickOrEnterProps<HTMLButtonElement> {}
