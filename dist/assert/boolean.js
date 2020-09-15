(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./throwable/boolean", "@dikac/t-function/assert/callback", "../boolean"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const boolean_1 = require("./throwable/boolean");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const boolean_2 = require("../boolean");
    /**
     * Throw exception if given value is no boolean type
     */
    function Boolean(value, error = boolean_1.default) {
        callback_1.default(value, boolean_2.default, error);
    }
    exports.default = Boolean;
});
//# sourceMappingURL=boolean.js.map