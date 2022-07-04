import React from "react";
import cx from "clsx";

import ButtonProps from "./Button.props";
import { UI_CLASSNAME, onClickOrEnterDefault } from "../../..";
import { Loader } from "../Loader";

function Button({
  primary = true,
  secondary = false,
  loading = false,
  disabled = false,
  label,
  children,
  onClick,
  onKeyPress,
  onClickOrEnter,
  className,
  ...htmlButtonProps
}: ButtonProps) {
  return (
    <button
      className={cx(UI_CLASSNAME, "button", className, {
        primary: primary,
        secondary: secondary && !primary,
        loading: loading,
        disabled: disabled,
      })}
      onClick={onClick !== undefined ? onClick : onClickOrEnter}
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
