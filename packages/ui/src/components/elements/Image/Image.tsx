import React from "react";
import cx from "clsx";

import ImageProps from "./Image.props";
import { UI_CLASSNAME } from "../../..";

function Image({
    href,
    disabled,
    hidden,
    className,
    ...imageProps
}: ImageProps) {
    const Wrapper = href ? "a" : "div";

    return (
        <Wrapper
            className={cx(
                UI_CLASSNAME,
                "image-wrapper",
                {
                    hidden: hidden,
                    disabled: disabled
                }
            )}
            href={href}
        >
            <img
                className={cx(
                    UI_CLASSNAME,
                    "image",
                    className,
                    {
                        disabled: disabled
                    }
                )}
                {...imageProps}
            />
        </Wrapper>
    )
}

export default Image;
