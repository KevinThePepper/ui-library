"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const Icon_1 = require("../Icon");
function Loader({ className }) {
    return (react_1.default.createElement(Icon_1.Icon, { className: (0, clsx_1.default)(className, "loader"), name: ["fas", "circle-notch"] }));
}
exports.default = Loader;
//# sourceMappingURL=Loader.js.map