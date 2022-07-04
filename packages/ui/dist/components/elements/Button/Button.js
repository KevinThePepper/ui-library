"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const __1 = require("../../..");
const Loader_1 = require("../Loader");
const ripple_1 = require("../../../lib/ripple");
function Button(_a) {
    var { primary = true, secondary = false, loading = false, disabled = false, ripple = true, label, children, onClick, onKeyPress, onClickOrEnter, className } = _a, htmlButtonProps = __rest(_a, ["primary", "secondary", "loading", "disabled", "ripple", "label", "children", "onClick", "onKeyPress", "onClickOrEnter", "className"]);
    const onClickHandler = (event) => {
        const events = [];
        if (ripple) {
            events.push(Promise.resolve((0, ripple_1.createRipple)(event)));
        }
        if (onClick !== undefined) {
            events.push(Promise.resolve(onClick(event)));
        }
        if (onClickOrEnter !== undefined) {
            events.push(Promise.resolve(onClickOrEnter(event)));
        }
        Promise.all(events).catch((error) => {
            console.error(error);
        });
    };
    return (react_1.default.createElement("button", Object.assign({ className: (0, clsx_1.default)(__1.UI_CLASSNAME, "button", className, {
            primary: primary,
            secondary: secondary && !primary,
            loading: loading,
            disabled: disabled,
        }), onClick: onClickHandler, onKeyPress: onKeyPress !== undefined
            ? onKeyPress
            : (e) => (0, __1.onClickOrEnterDefault)(e, onClickOrEnter) }, htmlButtonProps), loading ? react_1.default.createElement(Loader_1.Loader, null) : label !== null && label !== void 0 ? label : children));
}
exports.default = Button;
//# sourceMappingURL=Button.js.map