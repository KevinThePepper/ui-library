"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const __1 = require("../../..");
const __2 = require("../..");
function Card({ as, children, className, content, header, href, image, subheader }) {
    const ElementType = href ? "a" : (0, __1.getElementType)({ as: as });
    const showContentContainer = children || content || header || subheader;
    return (react_1.default.createElement(ElementType, { className: (0, clsx_1.default)(__1.UI_CLASSNAME, "card", className), href: href },
        image && (react_1.default.createElement("div", { className: "image" }, typeof image === "string"
            ? react_1.default.createElement(__2.Image, { src: image })
            : react_1.default.createElement(__2.Image, Object.assign({}, image)))),
        showContentContainer && (react_1.default.createElement("div", { className: "content-container" },
            header && (react_1.default.createElement(__2.Header, { as: "h2", className: "header" }, header)),
            subheader && (react_1.default.createElement("span", { className: "subheader" }, subheader)),
            (content || children) && (react_1.default.createElement("div", { className: "content" }, content !== null && content !== void 0 ? content : children))))));
}
exports.default = Card;
//# sourceMappingURL=Card.js.map