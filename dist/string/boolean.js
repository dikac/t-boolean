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
    function Boolean(valid, value) {
        let string = value.toString();
        if (valid) {
            return `value "${string}" is boolean`;
        }
        else {
            return `value "${string}" is not boolean`;
        }
    }
    exports.default = Boolean;
});
//# sourceMappingURL=boolean.js.map