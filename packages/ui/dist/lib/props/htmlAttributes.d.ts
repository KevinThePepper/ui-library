import React, { ButtonHTMLAttributes, MouseEvent, MouseEventHandler, KeyboardEvent, KeyboardEventHandler } from "react";
export declare const isKeyboardEvent: (event: Event) => event is React.KeyboardEvent<Element>;
export declare type IOnClickOrEnterHandler<TElement extends HTMLElement> = (KeyboardEventHandler<TElement> & MouseEventHandler<TElement>) | undefined;
export interface OnClickOrEnterProps<TElement extends HTMLElement> {
    onClickOrEnter?: IOnClickOrEnterHandler<TElement>;
}
export declare const onClickOrEnterDefault: <TElement extends Element>(event: React.KeyboardEvent<TElement> | React.MouseEvent<TElement, globalThis.MouseEvent>, cb?: IOnClickOrEnterHandler<TElement>) => void;
export interface IButtonHTMLAttributes extends ButtonHTMLAttributes<HTMLButtonElement>, OnClickOrEnterProps<HTMLButtonElement> {
}
//# sourceMappingURL=htmlAttributes.d.ts.map