"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var rulr_1 = require("rulr");
var BaseError_1 = require("../../errors/BaseError");
var Forbidden_1 = require("../../errors/Forbidden");
var InvalidAuth_1 = require("../../errors/InvalidAuth");
var NoModel_1 = require("../../errors/NoModel");
var Unauthorised_1 = require("../../errors/Unauthorised");
var sendMessage_1 = require("../utils/sendMessage");
var sendWarnings_1 = require("../utils/sendWarnings");
exports.default = function (_a) {
    var translator = _a.translator, errorId = _a.errorId, res = _a.res, err = _a.err;
    if (lodash_1.isNull(err) || lodash_1.isUndefined(null)) {
        var code = 500;
        var message = translator.serverError();
        return sendMessage_1.default({ res: res, code: code, errorId: errorId, message: message });
    }
    switch (err.constructor) {
        case InvalidAuth_1.default: {
            var code = 400;
            var message = translator.invalidAuthError(err);
            return sendMessage_1.default({ res: res, code: code, errorId: errorId, message: message });
        }
        case rulr_1.Warnings: {
            var code = 400;
            var warnings = err.warnings;
            return sendWarnings_1.default({ res: res, code: code, errorId: errorId, warnings: warnings, translator: translator });
        }
        case NoModel_1.default: {
            var code = 404;
            var message = translator.noModelError(err);
            return sendMessage_1.default({ res: res, code: code, errorId: errorId, message: message });
        }
        case Unauthorised_1.default: {
            var code = 401;
            var message = translator.unauthorisedError(err);
            return sendMessage_1.default({ res: res, code: code, errorId: errorId, message: message });
        }
        case Forbidden_1.default: {
            var code = 403;
            var message = translator.forbiddenError(err);
            return sendMessage_1.default({ res: res, code: code, errorId: errorId, message: message });
        }
        case Error:
        case BaseError_1.default:
        default: {
            var code = 500;
            var message = translator.serverError();
            return sendMessage_1.default({ res: res, code: code, errorId: errorId, message: message });
        }
    }
};
//# sourceMappingURL=handleError.js.map