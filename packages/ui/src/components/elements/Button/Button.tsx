import React from "react";
import cx from "clsx";

import ButtonProps from "./Button.props";
import { UI_CLASSNAME, onClickOrEnterDefault } from "../../..";
import { Loader } from "../Loader";
import { createRipple } from "../../../lib/ripple";

function Button({
  primary = true,
  secondary = false,
  loading = false,
  disabled = false,
  ripple = true,
  label,
  children,
  onClick,
  onKeyPress,
  onClickOrEnter,
  className,
  ...htmlButtonProps
}: ButtonProps) {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const events: Array<Promise<void>> = [];

    // ripple button effect
    if (ripple) {
      events.push(Promise.resolve(createRipple(event)));
    }

    // standard on-click method
    if (onClick !== undefined) {
      events.push(Promise.resolve(onClick(event)));
    }

    // on-click or enter method
    if (onClickOrEnter !== undefined) {
      events.push(Promise.resolve(onClickOrEnter(event)));
    }

    Promise.all(events).catch((error) => {
      console.error(error);
    });
  };

  return (
    <button
      className={cx(UI_CLASSNAME, "button", className, {
        primary: primary,
        secondary: secondary && !primary,
        loading: loading,
        disabled: disabled,
      })}
      onClick={onClickHandler}
      onKeyPress={
        onKeyPress !== undefined
          ? onKeyPress
          : (e) => onClickOrEnterDefault(e, onClickOrEnter)
      }
      {...htmlButtonProps}
    >
      {loading ? <Loader /> : label ?? children}
    </button>
  );
}

export default Button;
