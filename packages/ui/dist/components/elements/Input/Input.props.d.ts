import { InputHTMLAttributes } from "react";
import { BaseComponentWithoutAs } from "../../..";
import { Icon, IconName, IconProps } from "../Icon";
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
    error?: boolean;
    icon?: typeof Icon | IconProps | IconName;
    label?: string;
    labelPosition?: "left" | "right";
    loading?: boolean;
    tabIndex?: number;
}
declare type InputProps = BaseComponentWithoutAs<IInputProps>;
export default InputProps;
//# sourceMappingURL=Input.props.d.ts.map