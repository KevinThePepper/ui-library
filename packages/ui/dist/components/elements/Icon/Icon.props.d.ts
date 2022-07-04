import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BaseComponentWithoutAs } from "../../..";
export declare type IconName = IconProp;
export interface IIconProps {
    name: IconName;
}
export declare const isIconName: (name: any | IconName) => name is IconProp;
export declare const isIconProps: (props: any | IIconProps) => props is IIconProps;
declare type IconProps = BaseComponentWithoutAs<IIconProps>;
export default IconProps;
//# sourceMappingURL=Icon.props.d.ts.map