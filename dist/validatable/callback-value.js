(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./primitive", "@dikac/t-value/standard", "@dikac/t-object/mixin"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const primitive_1 = require("./primitive");
    const standard_1 = require("@dikac/t-value/standard");
    const mixin_1 = require("@dikac/t-object/mixin");
    function CallbackValue(value, callback) {
        let valueContainer = new standard_1.default(value);
        let validatable = new primitive_1.default(callback(value));
        let mixin = mixin_1.default(valueContainer, validatable);
        return mixin;
    }
    exports.default = CallbackValue;
});
//# sourceMappingURL=callback-value.js.map