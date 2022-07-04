import React from "react";
import { ImageProps } from "../..";
import { BaseComponent } from "../../../lib";
export interface ICardProps {
    content?: string | React.ReactNode;
    header?: string | React.ReactNode;
    subheader?: string | React.ReactNode;
    meta?: string | React.ReactNode;
    image?: string | ImageProps;
    href?: string;
}
declare type CardProps = BaseComponent<ICardProps>;
export default CardProps;
//# sourceMappingURL=Card.props.d.ts.map