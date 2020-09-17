import ThrowableType from "../assert/throwable/boolean";
import AssertType from "../assert/boolean";
/**
 * Throw exception if given value is no boolean type
 */
export default function Boolean(value, error = ThrowableType) {
    AssertType(value, error);
    return value;
}
//# sourceMappingURL=boolean.js.map