import ThrowableType from "../throwable/type";
import AssertType from "../assert/boolean";

/**
 * Throw exception if given value is no boolean type
 */

export default function Boolean(
    value : any,
    error : (value: any) => Error = ThrowableType
) : boolean {

    AssertType(value, error)

    return value;
}


