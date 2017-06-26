"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clearRepo_1 = require("./clearRepo");
var migrate_1 = require("./migrate");
var rollback_1 = require("./rollback");
exports.default = function (config) {
    return {
        clearRepo: clearRepo_1.default(config),
        migrate: migrate_1.default(config),
        rollback: rollback_1.default(config),
    };
};
//# sourceMappingURL=index.js.map