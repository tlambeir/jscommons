"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (config) {
    return {
        clearService: config.repo.clearRepo,
        migrate: config.repo.migrate,
        rollback: config.repo.rollback,
    };
};
//# sourceMappingURL=index.js.map