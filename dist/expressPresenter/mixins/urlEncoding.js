"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
exports.default = function (limit) {
    return bodyParser.urlencoded({
        extended: true,
        limit: limit,
        type: 'application/x-www-form-urlencoded',
    });
};
//# sourceMappingURL=urlEncoding.js.map