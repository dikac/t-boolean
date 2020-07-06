(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../throwable/type", "../assert/boolean"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../throwable/type");
    const boolean_1 = require("../assert/boolean");
    /**
     * Throw exception if given value is no boolean type
     */
    function Boolean(value, error = type_1.default) {
        boolean_1.default(value, error);
        return value;
    }
    exports.default = Boolean;
});
//# sourceMappingURL=boolean.js.map