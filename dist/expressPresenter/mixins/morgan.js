"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileStreamRotator = require("file-stream-rotator");
var morgan = require("morgan");
exports.default = function (morganDirectory) {
    var accessLogStream = FileStreamRotator.getStream({
        date_format: 'YYYYMMDD',
        filename: morganDirectory + "/access-%DATE%.log",
        frequency: 'daily',
        verbose: false,
    });
    morgan.token('query', function (req) {
        return JSON.stringify(req.query);
    });
    return morgan(':method :url :remote-addr :referrer :date :query :status', {
        stream: accessLogStream,
    });
};
//# sourceMappingURL=morgan.js.map