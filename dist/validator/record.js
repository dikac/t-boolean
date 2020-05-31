(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/primitive", "./object/record/validate", "../validatable/boolean/record-valid", "@dikac/t-object/mixin"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const primitive_1 = require("../validatable/primitive");
    const validate_1 = require("./object/record/validate");
    const record_valid_1 = require("../validatable/boolean/record-valid");
    const mixin_1 = require("@dikac/t-object/mixin");
    class Record {
        constructor(validators) {
            this.validators = validators;
            this.guardProperty(validators);
        }
        guardProperty(object) {
            if ('valid' in object) {
                throw new Error(`property "valid" is reserved`);
            }
        }
        validate(value) {
            let results = validate_1.default(this.validators, value);
            let validatable = new primitive_1.default(record_valid_1.default(results));
            return mixin_1.default(results, validatable);
        }
    }
    exports.default = Record;
});
//# sourceMappingURL=record.js.map