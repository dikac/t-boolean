import ThrowableType from "../throwable/type";
import Callback from "@dikac/t-function/assert/callback";
import BooleanType from "../guard/boolean";

/**
 * Throw exception if given value is no boolean type
 */

export default function Boolean(
    value : any,
    error : (value: any) => Error = ThrowableType
    ) : asserts value is boolean {

    Callback(value, BooleanType, error);
}
