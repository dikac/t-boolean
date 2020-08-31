import Callback from "@dikac/t-validator/validatable/callback-function";
import NumberGuard from "../boolean";
import Return from "@dikac/t-validator/validatable/simple";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function Boolean<MessageT, Argument>(
    value : Argument,
    message : (result:Validatable & Value)=>MessageT
) : Return<any, Argument, boolean, Readonly<ValidatorValidatable<any, MessageT>>> {

    return <Return<any, Argument, boolean, Readonly<ValidatorValidatable<any, MessageT>>>> Callback(value, NumberGuard, message);
}
