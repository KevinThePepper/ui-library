import { ImgHTMLAttributes } from "react";
import { BaseComponentWithoutAs } from "../../..";

export interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    /** Whether the image will show disabled. */
    disabled?: boolean;

    /** Surrounds this image with an `a` tag containing this URL. */
    href?: string;

    /** Whether the image is hidden. */
    hidden?: boolean;
}

type ImageProps = BaseComponentWithoutAs<IImageProps>;
export default ImageProps;
