import { OlHTMLAttributes } from "react";
import { BaseComponentWithoutAs } from "../../..";
import ListItemProps from "./ListItem.props";
export interface IListProps extends OlHTMLAttributes<HTMLOListElement> {
    ordered?: boolean;
    items?: Array<ListItemProps | string>;
}
declare type ListProps = BaseComponentWithoutAs<IListProps>;
export default ListProps;
//# sourceMappingURL=List.props.d.ts.map