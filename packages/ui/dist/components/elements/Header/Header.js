"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const __1 = require("../../..");
function Header({ text, as = "h1", className, children }) {
    const ElementType = (0, __1.getElementType)({ as: as });
    return (react_1.default.createElement(ElementType, { className: (0, clsx_1.default)(__1.UI_CLASSNAME, "header", className) }, text !== null && text !== void 0 ? text : children));
}
exports.default = Header;
//# sourceMappingURL=Header.js.map