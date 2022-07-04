/// <reference types="react" />
import ListProps from "./List.props";
declare function List({ children, className, ordered, items, ...olProps }: ListProps): JSX.Element;
declare namespace List {
    var ListItem: typeof import("./ListItem").default;
}
export default List;
//# sourceMappingURL=List.d.ts.map