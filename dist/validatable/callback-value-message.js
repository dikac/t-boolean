(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/mixin", "./callback-value", "@dikac/t-message/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const mixin_1 = require("@dikac/t-object/mixin");
    const callback_value_1 = require("./callback-value");
    const callback_1 = require("@dikac/t-message/callback");
    //export type Callback<Val, Argument, Message_> = (validatable : Return<Val, Argument>) => Message_;
    function CallbackValueMessage(value, callback, message) {
        let validatableValue = callback_value_1.default(value, callback);
        let messageCallback = new callback_1.default(message, [validatableValue]);
        return mixin_1.default(validatableValue, messageCallback);
    }
    exports.default = CallbackValueMessage;
});
//# sourceMappingURL=callback-value-message.js.map