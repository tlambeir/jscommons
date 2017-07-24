"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cors = require("cors");
exports.default = function () {
    return cors({
        credentials: true,
        origin: true,
        preflightContinue: true,
    });
};
//# sourceMappingURL=cors.js.map