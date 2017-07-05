"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (action, params) {
    return new Promise(function (resolve, reject) {
        action(params, function (err, data) {
            if (Boolean(err)) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};
//# sourceMappingURL=promisifyAction.js.map