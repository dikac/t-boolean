(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./wrapper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const wrapper_1 = require("./wrapper");
    /**
     * merge {@Link Validatable} and {@Link Message}
     */
    class Message extends wrapper_1.default {
        constructor(validatable, messageContainer) {
            super(validatable);
            this.messageContainer = messageContainer;
        }
        get message() {
            return this.messageContainer.message;
        }
    }
    exports.default = Message;
});
//# sourceMappingURL=message.js.map