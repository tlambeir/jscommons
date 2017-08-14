"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.default = function (value, defaultValue) {
    if (defaultValue === void 0) { defaultValue = ''; }
    return lodash_1.defaultTo(value, defaultValue);
};
//# sourceMappingURL=getStringOption.js.map