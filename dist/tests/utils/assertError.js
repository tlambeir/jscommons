"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
exports.default = function (expectedConstructor, promise) {
    return promise.then(function () {
        assert(false, 'Expected an error to be thrown');
    }, function (err) {
        var actualConstructor = err.constructor;
        if (actualConstructor !== expectedConstructor) {
            var x = new Error('Expected a different error constructor');
            x.stack = err.stack;
            throw x;
        }
    });
};
//# sourceMappingURL=assertError.js.map