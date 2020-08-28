import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NumberValidatable from "../validatable/boolean";
import Return from "@dikac/t-validator/validatable/simple";
import Validatable from "@dikac/t-validator/validatable/validatable";

export default class Boolean<MessageT>
    implements
        Validator<any, boolean, Readonly<Validatable<any, MessageT>>>,
        Message<(esult:Readonly<Value & Validatable>)=>MessageT>
{

    constructor(
       public message : (esult:Readonly<Value & Validatable>)=>MessageT
    ) {
    }

    validate<Argument extends boolean>(value: Argument): Readonly<Validatable<boolean, MessageT, true>>
    validate<Argument extends any>(value: Argument): Return<any, Argument, boolean, Readonly<Validatable<Argument, MessageT>>>
    validate<Argument extends any>(value: Argument) {

        return  NumberValidatable(value, this.message);
    }
}
