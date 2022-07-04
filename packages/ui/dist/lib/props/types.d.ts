import React, { PropsWithChildren, PropsWithRef } from "react";
export declare type As = keyof JSX.IntrinsicElements;
export interface AsProps {
    as?: As;
}
export interface ClassNameProps {
    className?: string;
}
export interface ChildrenProps {
    children?: React.ReactNode;
}
export declare type ComponentWithAs<TComponentProps = {}> = React.FC<TComponentProps> & AsProps;
export declare type ComponentWithClassName<TComponentProps = {}> = TComponentProps & ClassNameProps;
export declare type BaseComponent<TComponentProps = {}> = PropsWithRef<PropsWithChildren<TComponentProps & ClassNameProps & AsProps>>;
export declare type BaseComponentWithoutAs<TComponentProps = {}> = PropsWithRef<PropsWithChildren<TComponentProps & ClassNameProps>>;
//# sourceMappingURL=types.d.ts.map