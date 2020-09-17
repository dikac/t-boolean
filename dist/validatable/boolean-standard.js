import NumberMessage from "./string/boolean";
import Boolean from "./boolean";
/**
 * create {@see Boolean} with default message factory
 */
export default function BooleanStandard(value) {
    return Boolean(value, NumberMessage);
}
//# sourceMappingURL=boolean-standard.js.map