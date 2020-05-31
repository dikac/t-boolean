(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./callback-value", "../type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_value_1 = require("./callback-value");
    const type_1 = require("../type");
    function Boolean(value, message) {
        let callback = callback_value_1.default(value, type_1.default);
    }
    exports.default = Boolean;
});
//# sourceMappingURL=boolean.js.map