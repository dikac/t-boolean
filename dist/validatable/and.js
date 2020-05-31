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
    class And {
        constructor(validatables) {
            this.validatables = validatables;
        }
        get valid() {
            for (let validatable of this.validatables) {
                if (!validatable.valid) {
                    return false;
                }
            }
            return true;
        }
    }
    exports.default = And;
});
//# sourceMappingURL=and.js.map