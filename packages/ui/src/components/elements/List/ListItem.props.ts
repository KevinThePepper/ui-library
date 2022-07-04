import { LiHTMLAttributes } from "react";
import { BaseComponentWithoutAs } from "../../..";

export interface IListItemProps extends LiHTMLAttributes<HTMLLIElement> {
    /** The list item content. */
    content?: string;
}

type ListItemProps = BaseComponentWithoutAs<IListItemProps>;
export default ListItemProps;
