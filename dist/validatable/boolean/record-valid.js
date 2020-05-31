(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/boolean/type", "./type", "@dikac/t-object/message/string/property-actual"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("@dikac/t-object/boolean/type");
    const type_2 = require("./type");
    const property_actual_1 = require("@dikac/t-object/message/string/property-actual");
    function RecordValid(record) {
        let valid = true;
        for (let property in record) {
            if (!valid) {
                return false;
            }
            const data = record[property];
            if (type_2.default(data)) {
                valid = valid && data.valid;
                continue;
            }
            if (type_1.default(data)) {
                valid = valid && RecordValid(data);
                continue;
            }
            throw new Error(property_actual_1.default(property, 'validatable or record of validatable', data + ''));
        }
        return valid;
    }
    exports.default = RecordValid;
});
//# sourceMappingURL=record-valid.js.map