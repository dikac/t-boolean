import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Return from "@dikac/t-validator/validatable/simple";
export default class Boolean<MessageT> implements Validator<any, boolean, Readonly<Validatable & Message<MessageT> & Value<any>>>, Message<Function<[Readonly<Value> & Readonly<Validatable>], MessageT>> {
    message: Function<[Readonly<Value> & Readonly<Validatable>], MessageT>;
    constructor(message: Function<[Readonly<Value> & Readonly<Validatable>], MessageT>);
    validate<Argument extends any>(value: Argument): Return<any, Argument, boolean, Readonly<Validatable & Message<MessageT> & Value<any>>>;
}
