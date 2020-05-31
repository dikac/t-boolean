import Primitive from "./primitive";
import StdValue from "@dikac/t-value/standard";
import Mixin from "@dikac/t-object/mixin";
import Validatable from "./validatable";
import Value from "@dikac/t-value/value";

export type Return<V, A> =
    (Validatable<true> & Value<V>) |
    (Validatable<false> & Value<A>);

export default function CallbackValue<
    Argument,
    Val extends Argument
>(
    value : Argument,
    callback : (value : Argument) => value is Val
) : Return<Val, Argument> {

    let valueContainer = new StdValue(value);
    let validatable = new Primitive(callback(value));

    let mixin = Mixin(valueContainer, validatable);
    return <Return<Val, Argument>>mixin;
}

