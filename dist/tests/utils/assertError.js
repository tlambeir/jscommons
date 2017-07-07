"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
exports.default = function (expectedConstructor, promise) {
    return promise.then(function () {
        assert(false, 'Expected an error to be thrown');
    }, function (err) {
        var actualConstructor = err.constructor;
        assert.equal(actualConstructor, expectedConstructor);
    });
};
//# sourceMappingURL=assertError.js.map