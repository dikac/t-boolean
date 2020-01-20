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
     * non cryptographic boolean random
     *
     * @constructor
     */
    function Random() {
        return !(parseInt(Math.random().toString().substr(2, 1)) % 2);
    }
    exports.default = Random;
});
//# sourceMappingURL=random.js.map