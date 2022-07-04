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
const lib_1 = require("../../../lib");
function Container(_a) {
    var { as = "section", children, content, className } = _a, rest = __rest(_a, ["as", "children", "content", "className"]);
    const ElementType = (0, lib_1.getElementType)({ as: as });
    return (react_1.default.createElement(ElementType, Object.assign({ className: (0, clsx_1.default)(lib_1.UI_CLASSNAME, "container", className) }, rest), content !== null && content !== void 0 ? content : children));
}
exports.default = Container;
//# sourceMappingURL=Container.js.map