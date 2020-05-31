import Validatable from "./validatable";
import Value from "@dikac/t-value/value";
export declare type Return<V, A> = (Validatable<true> & Value<V>) | (Validatable<false> & Value<A>);
export default function CallbackValue<Argument, Val extends Argument>(value: Argument, callback: (value: Argument) => value is Val): Return<Val, Argument>;
