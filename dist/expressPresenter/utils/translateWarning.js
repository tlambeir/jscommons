"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
exports.default = function (translator, warning) {
    switch (warning.constructor) {
        case rulr_1.TypeWarning:
            return translator.typeWarning(warning);
        case rulr_1.RequiredWarning:
            return translator.requiredWarning(warning);
        case rulr_1.RestrictedKeysWarning:
            return translator.restrictedKeysWarning(warning);
        case rulr_1.Warning:
        default:
            return translator.warning(warning);
    }
};
//# sourceMappingURL=translateWarning.js.map