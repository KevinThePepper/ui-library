"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onClickOrEnterDefault = exports.isKeyboardEvent = void 0;
const constants_1 = require("./constants");
const isKeyboardEvent = (event) => {
    return "key" in event;
};
exports.isKeyboardEvent = isKeyboardEvent;
const onClickOrEnterDefault = (event, cb) => {
    if (cb !== undefined) {
        if ((0, exports.isKeyboardEvent)(event)) {
            if (event.key === constants_1.ENTER_KEY) {
                event.preventDefault();
                cb(event);
            }
        }
        else {
            event.preventDefault();
            cb(event);
        }
    }
};
exports.onClickOrEnterDefault = onClickOrEnterDefault;
//# sourceMappingURL=htmlAttributes.js.map