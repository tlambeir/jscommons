"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (client, params) {
    return new Promise(function (resolve, reject) {
        client.listObjects(params, function (err, data) {
            return err ? reject(err) : resolve(data);
        });
    });
};
//# sourceMappingURL=listObjects.js.map