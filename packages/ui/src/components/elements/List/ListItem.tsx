import React from "react";

import ListItemProps from "./ListItem.props";

function ListItem({
    content,
    ...liProps
}: ListItemProps) {
    return (
        <li {...liProps}>{content}</li>
    );
}

export default ListItem;