import React from "react";
import cx from "clsx";

import { getElementType, UI_CLASSNAME } from "../../..";
import CardProps from "./Card.props";
import { Header, Image } from "../..";

function Card({
    as,
    children,
    className,
    content,
    header,
    href,
    image,
    subheader
}: CardProps) {
    const ElementType = href ? "a" : getElementType({ as: as });

    const showContentContainer = children || content || header || subheader;

    return (
        <ElementType
            className={cx(
                UI_CLASSNAME,
                "card",
                className
            )}
            href={href}
        >
            {image && (
                <div className="image">
                    {typeof image === "string"
                        ? <Image src={image} /> 
                        : <Image {...image} />
                    }
                </div>
            )}
            {showContentContainer && (
                <div className="content-container">
                    {header && (
                        <Header as="h2" className="header">
                            {header}
                        </Header>
                    )}
                    {subheader && (
                        <span className="subheader">
                            {subheader}
                        </span>
                    )}
                    {(content || children) && (
                        <div className="content">
                            {content ?? children}
                        </div>
                    )}
                </div>
            )}
        </ElementType>
    )
}

export default Card;