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
    function Or(value, ...validators) {
        let valids = [];
        for (let validator of validators) {
            valids.push(validator(value));
            if (valids.includes(true)) {
                return true;
            }
        }
        return valids.length === 0;
    }
    exports.default = Or;
});
//# sourceMappingURL=or.js.map