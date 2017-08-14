"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boolean = require("boolean");
var lodash_1 = require("lodash");
exports.default = function (value, defaultValue) {
    if (defaultValue === void 0) { defaultValue = true; }
    return boolean(lodash_1.defaultTo(value, defaultValue));
};
//# sourceMappingURL=getBooleanOption.js.map