(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/boolean"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const boolean_1 = require("../string/boolean");
    /**
     * create {@see TypeError} from {@see BooleanMessage}
     * @param value
     * @param subject
     * @param conversion
     */
    function Boolean(value, subject, conversion) {
        return new TypeError(boolean_1.default(false, value, subject, conversion));
    }
    exports.default = Boolean;
});
//# sourceMappingURL=boolean.js.map