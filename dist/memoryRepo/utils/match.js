"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var InvalidOp_1 = require("../../errors/InvalidOp");
var or = function (conditions) { return function (actual) {
    return (match(conditions[0])(actual) ||
        (conditions.length > 1 ? or(conditions.slice(1))(actual) : false));
}; };
var and = function (conditions) { return function (actual) {
    return (match(conditions[0])(actual) &&
        (conditions.length > 1 ? and(conditions.slice(1))(actual) : true));
}; };
var not = function (condition) { return function (actual) {
    return !match(condition)(actual);
}; };
var nor = function (conditions) { return function (actual) {
    return (not(conditions[0])(actual) &&
        (conditions.length > 1 ? nor(conditions.slice(1))(actual) : true));
}; };
var matchKey = function (key, value) { return function (actual) {
    switch (key) {
        case '$eq':
        case '=':
            return actual === value;
        case '$ne':
        case '!=':
            return actual !== value;
        case '$gt':
        case '>':
            return actual > value;
        case '$gte':
        case '>=':
            return actual >= value;
        case '$lt':
        case '<':
            return actual < value;
        case '$lte':
        case '<=':
            return actual <= value;
        case '$regex':
        case '~':
            return (new RegExp(value)).test(actual);
        case '$in':
            return lodash_1.includes(value, actual);
        case '$nin':
            return !lodash_1.includes(value, actual);
        case '$or':
            return or(value)(actual);
        case '$and':
            return and(value)(actual);
        case '$not':
            return not(value)(actual);
        case '$nor':
            return nor(value)(actual);
        case '$exists':
            return !(lodash_1.isNull(actual) || lodash_1.isUndefined(actual)) === value;
        default:
            if (key[0] === '$') {
                throw new InvalidOp_1.default(key);
            }
            if (lodash_1.isObject(value)) {
                return match(value)(actual[key]);
            }
            return actual[key] === value;
    }
}; };
var matchKeys = function (keys, filter) {
    return function (actual) {
        return keys.length === 0 || (matchKey(keys[0], filter[keys[0]])(actual) &&
            (keys.length > 1 ? matchKeys(keys.slice(1), filter)(actual) : true));
    };
};
var match = function (filter) {
    return function (actual) {
        return matchKeys(Object.keys(filter), filter)(actual);
    };
};
exports.default = match;
//# sourceMappingURL=match.js.map