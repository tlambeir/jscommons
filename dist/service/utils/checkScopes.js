"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var Forbidden_1 = require("../../errors/Forbidden");
exports.default = function (expectedScopes, actualScopes) {
    var allowedScopes = lodash_1.intersection(expectedScopes, actualScopes);
    var hasAllowedScopes = allowedScopes.length > 0;
    if (!hasAllowedScopes) {
        throw new Forbidden_1.default();
    }
};
//# sourceMappingURL=checkScopes.js.map