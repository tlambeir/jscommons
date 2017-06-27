"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var InvalidOp_1 = require("../../errors/InvalidOp");
var prop = function (props) {
    return props.join('.');
};
var comparisionOp = function (_a) {
    var op = _a.op, props = _a.props, value = _a.value, query = _a.query;
    return query.where(prop(props), op, value);
};
var exists = function (props, expected, query) {
    return (expected === true ?
        query.whereNotNull(prop(props)) :
        query.whereNull(prop(props)));
};
var contains = function (props, expected, query) {
    return query.whereIn(prop(props), expected);
};
var nin = function (props, expected, query) {
    return query.whereNotIn(prop(props), expected);
};
var conditionsOp = function (operation) {
    return function (props, conditions, query) {
        return query.where(function () {
            var _this = this;
            conditions.forEach(function (condition) {
                return operation(props, condition, _this);
            });
        });
    };
};
var or = conditionsOp(function (props, condition, query) {
    return query.orWhere(function () {
        match(props, condition, this);
    });
});
var and = conditionsOp(function (props, condition, query) {
    return match(props, condition, query);
});
var not = function (props, condition, query) {
    return query.whereNot(function () {
        match(props, condition, this);
    });
};
var nor = function (props, conditions, query) {
    return query.whereNot(function () {
        var _this = this;
        conditions.forEach(function (condition) {
            // tslint:disable-next-line no-shadowed-variable
            _this.orWhere(function () {
                match(props, condition, this);
            });
        });
    });
};
var matchKey = function (props, key, value, query) {
    switch (key) {
        case '$eq':
        case '=':
            return comparisionOp({ op: '=', props: props, value: value, query: query });
        case '$ne':
        case '!=':
            return comparisionOp({ op: '!=', props: props, value: value, query: query });
        case '$gt':
        case '>':
            return comparisionOp({ op: '>', props: props, value: value, query: query });
        case '$gte':
        case '>=':
            return comparisionOp({ op: '>=', props: props, value: value, query: query });
        case '$lt':
        case '<':
            return comparisionOp({ op: '<', props: props, value: value, query: query });
        case '$lte':
        case '<=':
            return comparisionOp({ op: '<=', props: props, value: value, query: query });
        case '$regex':
        case '~':
            return comparisionOp({ op: 'REGEXP', props: props, value: value, query: query });
        case '$in':
            return contains(props, value, query);
        case '$nin':
            return nin(props, value, query);
        case '$or':
            return or(props, value, query);
        case '$and':
            return and(props, value, query);
        case '$not':
            return not(props, value, query);
        case '$nor':
            return nor(props, value, query);
        case '$exists':
            return exists(props, value, query);
        default:
            if (key[0] === '$') {
                throw new InvalidOp_1.default(key);
            }
            if (lodash_1.isObject(value)) {
                return match(props.concat([key]), value, query);
            }
            return comparisionOp({ op: '=', props: props.concat([key]), value: value, query: query });
    }
};
var matchKeys = function (keys) {
    return function (props, filter, query) {
        return keys.reduce(function (result, key) {
            return matchKey(props, key, filter[key], result);
        }, query);
    };
};
var match = function (props, filter, query) {
    return matchKeys(Object.keys(filter))(props, filter, query);
};
// tslint:disable-next-line:max-file-line-count
exports.default = match;
//# sourceMappingURL=match.js.map