import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Return from "@dikac/t-validator/return/return";
export default function Boolean<MessageT, Argument>(value: Argument, message: Function<[Readonly<Value<Argument> & Validatable>], MessageT>): Return<any, Argument, boolean, Readonly<Validatable & Message<MessageT> & Value<any>>>;
