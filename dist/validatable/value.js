(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./wrapper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const wrapper_1 = require("./wrapper");
    /**
     * merge {@Link Validatable} and {@Link Message}
     */
    class Value extends wrapper_1.default {
        constructor(validatable, valueContainer) {
            super(validatable);
            this.valueContainer = valueContainer;
        }
        get value() {
            return this.valueContainer.value;
        }
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map