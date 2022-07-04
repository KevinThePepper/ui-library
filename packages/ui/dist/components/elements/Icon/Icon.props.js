"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIconProps = exports.isIconName = void 0;
const isIconName = (name) => {
    return (typeof name === "string" || Array.isArray(name));
};
exports.isIconName = isIconName;
const isIconProps = (props) => {
    return (0, exports.isIconName)(props.name);
};
exports.isIconProps = isIconProps;
//# sourceMappingURL=Icon.props.js.map