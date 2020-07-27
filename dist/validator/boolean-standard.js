(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean", "../validatable/string/boolean"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const boolean_1 = require("./boolean");
    const boolean_2 = require("../validatable/string/boolean");
    function BooleanStandard() {
        return new boolean_1.default(boolean_2.default);
    }
    exports.default = BooleanStandard;
});
//# sourceMappingURL=boolean-standard.js.map