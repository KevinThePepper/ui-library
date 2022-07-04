import React from "react";
import { BaseComponent } from "../../../lib";

export interface IContainerProps {
    /** Shorthand for primary content (or children). */
    content?: string | React.ReactNode;
}

export default interface ContainerProps extends BaseComponent<IContainerProps> {}