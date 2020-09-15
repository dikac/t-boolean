(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./string/boolean", "./boolean"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const boolean_1 = require("./string/boolean");
    const boolean_2 = require("./boolean");
    /**
     * create {@see Boolean} with default message factory
     */
    function BooleanStandard(value) {
        return boolean_2.default(value, boolean_1.default);
    }
    exports.default = BooleanStandard;
});
//# sourceMappingURL=boolean-standard.js.map