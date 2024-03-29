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
function Image(_a) {
    var { href, disabled, hidden, className } = _a, imageProps = __rest(_a, ["href", "disabled", "hidden", "className"]);
    const Wrapper = href ? "a" : "div";
    return (react_1.default.createElement(Wrapper, { className: (0, clsx_1.default)(__1.UI_CLASSNAME, "image-wrapper", {
            hidden: hidden,
            disabled: disabled
        }), href: href },
        react_1.default.createElement("img", Object.assign({ className: (0, clsx_1.default)(__1.UI_CLASSNAME, "image", className, {
                disabled: disabled
            }) }, imageProps))));
}
exports.default = Image;
//# sourceMappingURL=Image.js.map