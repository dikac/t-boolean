(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./value-message", "./primitive", "@dikac/t-value/standard"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_message_1 = require("./value-message");
    const primitive_1 = require("./primitive");
    const standard_1 = require("@dikac/t-value/standard");
    class Callback extends value_message_1.default {
        constructor(value, callback, message) {
            super(new primitive_1.default(callback(value)), new standard_1.default(value), message);
        }
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map