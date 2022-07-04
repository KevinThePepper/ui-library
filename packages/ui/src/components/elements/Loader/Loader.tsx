import React from "react";
import clsx from "clsx";

import { Icon } from "../Icon";
import LoaderProps from "./Loader.props";

function Loader({ className }: LoaderProps) {
  return (
    <Icon
      className={clsx(className, "loader")}
      name={["fas", "circle-notch"]}
    />
  );
}

export default Loader;
