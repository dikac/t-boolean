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
    class Or {
        constructor(validatables) {
            this.validatables = validatables;
        }
        get valid() {
            for (let validatable of this.validatables) {
                if (!validatable.valid) {
                    return true;
                }
            }
            return this.validatables.length !== 0;
        }
    }
    exports.default = Or;
});
//# sourceMappingURL=or.js.map