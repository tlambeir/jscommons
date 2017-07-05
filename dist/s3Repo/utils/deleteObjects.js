"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promisifyAction_1 = require("./promisifyAction");
exports.default = function (client, params) {
    return promisifyAction_1.default(client.deleteObjects.bind(client), params);
};
//# sourceMappingURL=deleteObjects.js.map