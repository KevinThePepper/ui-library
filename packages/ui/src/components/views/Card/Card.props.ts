import React from "react";
import { ImageProps } from "../..";
import { BaseComponent } from "../../../lib";

export interface ICardProps {
    /** Shorthand for the primary content. */
    content?: string | React.ReactNode;

    /** Shorthand for the card header. */
    header?: string | React.ReactNode;

    /** Content that appears below the card header. */
    subheader?: string | React.ReactNode;

    /** Additional card metadata. */
    meta?: string | React.ReactNode;

    /** An image to display at the top of the card. */
    image?: string | ImageProps;

    /** Makes the card a link with the given URL. */
    href?: string;
}

type CardProps = BaseComponent<ICardProps>;
export default CardProps;
