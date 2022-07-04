import { HTMLAttributes } from "react";

import { IconProps } from "../Icon";
import { BaseComponentWithoutAs } from "../../../lib";

export interface ILoaderProps extends HTMLAttributes<SVGElement> {
  icon?: IconProps;
}

type LoaderProps = BaseComponentWithoutAs<ILoaderProps>;
export default LoaderProps;
