import { BaseComponent } from "../../..";

export interface IHeaderProps {
    /** Shorthand for the header text. */
    text?: string;

    /** Divide header from the content below it. */
    divider?: boolean;

    /** Headers that can be rendered. */
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

type HeaderProps = BaseComponent<IHeaderProps>;
export default HeaderProps;
