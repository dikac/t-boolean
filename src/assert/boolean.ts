import ThrowableType from "../throwable/boolean";
import Callback from "@dikac/t-function/assert/callback";
import BooleanType from "../boolean";
import Function from "@dikac/t-function/function";

/**
 * Throw exception if given value is no boolean type
 */

export default function Boolean(
    value : unknown,
    error : Function<[unknown], Error> = ThrowableType
) : asserts value is boolean {

    Callback(value, BooleanType, error);
}
