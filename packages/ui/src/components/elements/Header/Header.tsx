import React from "react";
import cx from "clsx";

import { getElementType, UI_CLASSNAME } from "../../..";
import HeaderProps from "./Header.props";

function Header({
    text,
    as="h1",
    className,
    children
}: HeaderProps) {
    const ElementType = getElementType({as: as});

    return (
        <ElementType className={cx(UI_CLASSNAME, "header", className)}>
            {text ?? children}
        </ElementType>
    );
}

export default Header;