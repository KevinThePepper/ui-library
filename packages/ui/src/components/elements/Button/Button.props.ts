import { IButtonHTMLAttributes } from "../../../lib";

export default interface ButtonProps extends IButtonHTMLAttributes {
  /** Displays a primary styled button. */
  primary?: boolean;

  /** Displays a secondary styled button. */
  secondary?: boolean;

  /** The text for the button to display. This is shorthand for children. */
  label: string;

  /** Whether this button is loading. */
  loading?: boolean;

  /** Whether to show the ripple animation on click. Default is `true`. */
  ripple?: boolean;
}
