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
const ListItem_1 = __importDefault(require("./ListItem"));
function List(_a) {
    var { children, className, ordered, items } = _a, olProps = __rest(_a, ["children", "className", "ordered", "items"]);
    const ElementType = ordered ? "ol" : "ul";
    const content = items === null || items === void 0 ? void 0 : items.map((item, index) => {
        return typeof item === "string" ? (react_1.default.createElement(ListItem_1.default, { content: item, key: `item-${index}` })) : (react_1.default.createElement(ListItem_1.default, Object.assign({}, item, { key: `item-${index}` })));
    });
    return (react_1.default.createElement(ElementType, Object.assign({ className: (0, clsx_1.default)(lib_1.UI_CLASSNAME, "list", className) }, olProps), content !== null && content !== void 0 ? content : children));
}
List.ListItem = ListItem_1.default;
exports.default = List;
//# sourceMappingURL=List.js.map