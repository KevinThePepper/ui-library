import { ImgHTMLAttributes } from "react";
import { BaseComponentWithoutAs } from "../../..";
export interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    disabled?: boolean;
    href?: string;
    hidden?: boolean;
}
declare type ImageProps = BaseComponentWithoutAs<IImageProps>;
export default ImageProps;
//# sourceMappingURL=Image.props.d.ts.map