"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./components"), exports);
__exportStar(require("./lib"), exports);
const fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas);
//# sourceMappingURL=index.js.map