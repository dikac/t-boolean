import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
/**
 * create {@see Boolean} with default message factory
 */
export default function BooleanStandard(value: unknown): Readonly<Validatable<false> & Message<string> & Value<unknown>> | Readonly<Validatable<true> & Message<string> & Value<boolean>>;
