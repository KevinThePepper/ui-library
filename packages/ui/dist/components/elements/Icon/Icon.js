"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const __1 = require("../../..");
function Icon({ className, name }) {
    return (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { className: (0, clsx_1.default)(__1.UI_CLASSNAME, "icon", className), icon: name }));
}
exports.default = Icon;
//# sourceMappingURL=Icon.js.map