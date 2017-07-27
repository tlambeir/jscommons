"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-class no-this */
var default_1 = (function () {
    function default_1() {
        this.message = 'Error';
        this.name = this.constructor.name;
        this.stack = (new Error(this.message)).stack;
    }
    return default_1;
}());
exports.default = default_1;
//# sourceMappingURL=BaseError.js.map