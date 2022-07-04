import { OlHTMLAttributes } from "react";

import { BaseComponentWithoutAs } from "../../..";
import ListItemProps from "./ListItem.props";

export interface IListProps extends OlHTMLAttributes<HTMLOListElement> {
    /** Whether the list is ordered or not. */
    ordered?: boolean;

    /** Shorthand for the list items. */
    items?: Array<ListItemProps | string>;
}

type ListProps = BaseComponentWithoutAs<IListProps>;
export default ListProps;
