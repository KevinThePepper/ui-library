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
const __2 = require("..");
const Loader_1 = require("../Loader");
function Input(_a) {
    var { children, className, disabled, error, icon = "search", loading, tabIndex } = _a, inputHTMLProps = __rest(_a, ["children", "className", "disabled", "error", "icon", "loading", "tabIndex"]);
    const computeTabIndex = () => {
        return disabled ? -1 : tabIndex;
    };
    const getIcon = () => {
        if (loading) {
            return react_1.default.createElement(Loader_1.Loader, null);
        }
        return (0, __2.isIconName)(icon) ? (react_1.default.createElement(__2.Icon, { name: icon })) : (0, __2.isIconProps)(icon) ? (react_1.default.createElement(__2.Icon, Object.assign({}, icon))) : (icon);
    };
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)(__1.UI_CLASSNAME, "input", {
            disabled: disabled,
            error: error,
            loading: loading,
        }, className) },
        react_1.default.createElement("input", Object.assign({ tabIndex: computeTabIndex() }, inputHTMLProps), children),
        getIcon()));
}
exports.default = Input;
//# sourceMappingURL=Input.js.map