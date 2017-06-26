"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringPath_1 = require("./utils/stringPath");
var translator = {
    invalidAuth: function (err) { return "Invalid auth '" + err.auth + "'"; },
    noModel: function (err) { return "No " + err.modelName + " found"; },
    requiredWarning: function (warning) {
        var path = stringPath_1.default(warning.path);
        return "Missing required value in '" + path + "'";
    },
    restrictedKeysWarning: function (warning) {
        var path = stringPath_1.default(warning.path);
        var keys = warning.keys.join(', ');
        return "Unknown keys (" + keys + ") set in '" + path + "'";
    },
    serverError: function () { return 'A server error occurred'; },
    typeWarning: function (warning) {
        var path = stringPath_1.default(warning.path);
        var typeName = warning.type.name;
        return "Expected '" + path + "' to be '" + typeName + "'";
    },
    unauthorised: function () { return 'Unauthorised'; },
    warning: function (warning) {
        var path = stringPath_1.default(warning.path);
        return "Problem in '" + path + "'";
    },
};
exports.default = translator;
//# sourceMappingURL=en.js.map