import React from "react";
import cx from "clsx";

import { getElementType, UI_CLASSNAME } from "../../../lib";
import ContainerProps from "./Container.props";

function Container({
    as = "section",
    children,
    content,
    className,
    ...rest
}: ContainerProps) {
    const ElementType = getElementType({as: as});

    return (
        <ElementType className={cx(UI_CLASSNAME, "container", className)} {...rest}>
            {content ?? children}
        </ElementType>
    )
}

export default Container;