"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var handleCustomRoute_1 = require("./handleCustomRoute");
var cors_1 = require("./mixins/cors");
var helmet_1 = require("./mixins/helmet");
var json_1 = require("./mixins/json");
var morgan_1 = require("./mixins/morgan");
var urlEncoding_1 = require("./mixins/urlEncoding");
exports.default = function (config) {
    var router = express_1.Router();
    router.use(cors_1.default());
    router.use(json_1.default(config.bodyParserLimit));
    router.use(urlEncoding_1.default(config.bodyParserLimit));
    router.use(helmet_1.default());
    router.use(morgan_1.default(config.morganDirectory));
    router.get("/" + config.customRoute, handleCustomRoute_1.default(config));
    return router;
};
//# sourceMappingURL=index.js.map