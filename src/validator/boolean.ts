import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NumberValidatable from "../validatable/boolean";
import Return from "@dikac/t-validator/validatable/simple";
import Validatable from "@dikac/t-validator/validatable/validatable";

export default class Boolean<MessageType>
    implements
        Validator<any, boolean, Readonly<Validatable<any, MessageType>>>,
        Message<(result:Readonly<Value & Validatable>)=>MessageType>
{

    constructor(
       public message : (result:Readonly<Value & Validatable>)=>MessageType
    ) {
    }

    validate<Argument extends boolean>(value: Argument): Readonly<Validatable<boolean, MessageType, true>>
    validate<Argument extends any>(value: Argument): Return<any, Argument, boolean, Readonly<Validatable<Argument, MessageType>>>
    validate<Argument extends any>(value: Argument) {

        return  NumberValidatable(value, this.message);
    }
}
