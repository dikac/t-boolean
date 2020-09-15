(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/throwable/boolean", "../assert/boolean"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const boolean_1 = require("../assert/throwable/boolean");
    const boolean_2 = require("../assert/boolean");
    /**
     * Throw exception if given value is no boolean type
     */
    function Boolean(value, error = boolean_1.default) {
        boolean_2.default(value, error);
        return value;
    }
    exports.default = Boolean;
});
//# sourceMappingURL=boolean.js.map