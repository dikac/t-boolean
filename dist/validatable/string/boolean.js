(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../string/boolean"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const boolean_1 = require("../../string/boolean");
    function Number(object) {
        return boolean_1.default(object.valid, object.value);
    }
    exports.default = Number;
});
//# sourceMappingURL=boolean.js.map