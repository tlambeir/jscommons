"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (client, params) {
    var result = client.getObject(params);
    var stream = result.createReadStream();
    return stream;
};
//# sourceMappingURL=download.js.map