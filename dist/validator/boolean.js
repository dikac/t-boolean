import NumberValidatable from "../validatable/boolean";
/**
 * {@see Validator} for boolean type
 */
export default class Boolean {
    /**
     * @param message
     * callback for generating value for {@see Message}
     */
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return NumberValidatable(value, this.message);
    }
}
//# sourceMappingURL=boolean.js.map