"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var winston = require("winston");
var CloudWatchTransport = require("winston-aws-cloudwatch");
var getTime = function () {
    return moment().format('YYYY-MM-DD HH:mm:ss:SSS');
};
var createConsoleTransport = function (config) {
    return new winston.transports.Console({
        colorize: true,
        handleExceptions: true,
        humanReadableUnhandledException: true,
        level: config.level,
        prettyPrint: true,
        stderrLevels: ['error'],
        timestamp: getTime,
    });
};
var createAwsTransport = function (config) {
    return new CloudWatchTransport(__assign({ createLogGroup: true, createLogStream: true, level: config.level }, config.aws));
};
exports.default = function (config) {
    winston.cli();
    return new winston.Logger({
        exitOnError: false,
        transports: [
            createConsoleTransport(config)
        ].concat((!config.enableAws ? [] : [createAwsTransport(config)])),
    });
};
//# sourceMappingURL=index.js.map