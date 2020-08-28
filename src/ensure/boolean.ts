import ThrowableType from "../throwable/boolean";
import AssertType from "../assert/boolean";

/**
 * Throw exception if given value is no boolean type
 */

export default function Boolean(
    value : unknown,
    error : (value:unknown)=>Error = ThrowableType
) : boolean {

    AssertType(value, error)

    return value;
}


