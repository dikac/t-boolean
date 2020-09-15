(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/boolean"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const boolean_1 = require("../validatable/boolean");
    /**
     * {@see Validator} for boolean type
     */
    class Boolean {
        /**
         * @param message
         * callback for generating value for {@see Message}
         */
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return boolean_1.default(value, this.message);
        }
    }
    exports.default = Boolean;
});
//# sourceMappingURL=boolean.js.map