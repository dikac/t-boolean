(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function And(value, validators) {
        for (let validator of validators) {
            if (!validator(value)) {
                return false;
            }
        }
        return true;
    }
    exports.default = And;
});
//# sourceMappingURL=and.js.map