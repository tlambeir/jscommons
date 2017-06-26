"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cors = require("cors");
exports.default = function () {
    return cors({
        origin: '*',
        preflightContinue: true,
    });
};
//# sourceMappingURL=cors.js.map