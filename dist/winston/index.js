"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var os = require("os");
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
        level: config.console.level,
        prettyPrint: true,
        stderrLevels: ['error'],
        timestamp: getTime,
    });
};
var createAwsTransport = function (config) {
    return new CloudWatchTransport({
        awsConfig: config.cloudWatch.awsConfig,
        createLogGroup: true,
        createLogStream: true,
        level: config.cloudWatch.level,
        logGroupName: config.cloudWatch.logGroupName,
        logStreamName: config.cloudWatch.logStreamName || os.hostname,
    });
};
exports.default = function (config) {
    winston.cli();
    return new winston.Logger({
        exitOnError: false,
        transports: [
            createConsoleTransport(config)
        ].concat((!config.cloudWatch.enabled ? [] : [createAwsTransport(config)])),
    });
};
//# sourceMappingURL=index.js.map