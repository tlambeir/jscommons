"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sendObject_1 = require("../utils/sendObject");
exports.default = function (_a) {
    var res = _a.res, code = _a.code, errorId = _a.errorId, message = _a.message;
    var obj = { message: message };
    return sendObject_1.default({ res: res, code: code, errorId: errorId, obj: obj });
};
//# sourceMappingURL=sendMessage.js.map