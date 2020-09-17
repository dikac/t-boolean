import Callback from "@dikac/t-validator/validatable/callback-function";
import Guard from "../boolean";
/**
 * validate if {@param value} is boolean
 *
 * @param value
 * value to be validated
 *
 * @param message
 * for generating message
 */
export default function Boolean(value, message) {
    return Callback(value, Guard, message);
}
//# sourceMappingURL=boolean.js.map