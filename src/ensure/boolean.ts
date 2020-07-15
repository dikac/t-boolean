import ThrowableType from "../throwable/boolean";
import AssertType from "../assert/boolean";
import Function from "@dikac/t-function/function";

/**
 * Throw exception if given value is no boolean type
 */

export default function Boolean(
    value : unknown,
    error : Function<[unknown], Error> = ThrowableType
) : boolean {

    AssertType(value, error)

    return value;
}


