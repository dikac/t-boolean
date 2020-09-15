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
    /**
     * check if {@param value} type is boolean
     *
     * @param value
     */
    function Boolean(value) {
        return value === true || value === false;
    }
    exports.default = Boolean;
});
//# sourceMappingURL=boolean.js.map