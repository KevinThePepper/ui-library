"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElementType = void 0;
const getElementType = (options) => {
    const { as = "div", getDefault } = options;
    if (getDefault) {
        const defaultAs = getDefault();
        if (defaultAs) {
            return defaultAs;
        }
    }
    return as;
};
exports.getElementType = getElementType;
//# sourceMappingURL=getElementType.js.map