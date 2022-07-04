import React from "react";
import cx from "clsx";

import { UI_CLASSNAME } from "../../../lib";
import ListProps from "./List.props";
import ListItem from "./ListItem";

function List({
    children,
    className,
    ordered,
    items,
    ...olProps
}: ListProps) {
    const ElementType = ordered ? "ol" : "ul";

    const content = items?.map((item, index) => {
        return typeof item === "string" ? (
            <ListItem content={item} key={`item-${index}`} />
        ) : (
            <ListItem {...item} key={`item-${index}`} />
        );
    })

    return (
        <ElementType
            className={cx(
                UI_CLASSNAME,
                "list",
                className
            )}
            {...olProps}
        >
            {content ?? children}
        </ElementType>
    )
}

List.ListItem = ListItem;

export default List;