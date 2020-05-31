(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../or"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const or_1 = require("../or");
    /**
     * wrap type validatable
     */
    class Wrapper extends or_1.default {
        constructor(validatables, delimiter = ' | ') {
            super(validatables);
            this.delimiter = delimiter;
        }
        get type() {
            const types = this.validatables.map(v => v.type);
            const type = types.join(this.delimiter);
            return type;
        }
    }
    exports.default = Wrapper;
});
//# sourceMappingURL=or.js.map