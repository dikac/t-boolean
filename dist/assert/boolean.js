(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../throwable/type", "@dikac/t-function/assert/callback", "../guard/boolean"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../throwable/type");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const boolean_1 = require("../guard/boolean");
    /**
     * Throw exception if given value is no boolean type
     */
    function Boolean(value, error = type_1.default) {
        callback_1.default(value, boolean_1.default, error);
    }
    exports.default = Boolean;
});
//# sourceMappingURL=boolean.js.map