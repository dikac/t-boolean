(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/type", "@dikac/t-object/boolean/type", "@dikac/t-object/message/string/property-actual"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../../boolean/type");
    const type_2 = require("@dikac/t-object/boolean/type");
    const property_actual_1 = require("@dikac/t-object/message/string/property-actual");
    function validate(validators, value) {
        let object = {};
        for (let property in validators) {
            const validator = validators[property];
            if (type_1.default(validator)) {
                object[property] = validator.validate(value[property]);
                continue;
            }
            if (type_2.default(validator)) {
                object[property] = validate(validator, value[property]);
                continue;
            }
            throw new Error(property_actual_1.default(property, 'validator or record of validator', validator + ''));
        }
        return object;
    }
    exports.default = validate;
});
//# sourceMappingURL=validate.js.map