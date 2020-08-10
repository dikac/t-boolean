import Callback from "@dikac/t-validator/validatable/callback";
import NumberGuard from "../boolean";
import Function from "@dikac/t-function/function";
import Return from "@dikac/t-validator/validatable/simple";
import Validatable from "@dikac/t-validator/validatable/validatable";

export default function Boolean<MessageT, Argument>(
    value : Argument,
    message : Function<[Omit<Readonly<Validatable<any, MessageT>>, 'message'>], MessageT>
) : Return<any, Argument, boolean, Readonly<Validatable<any, MessageT>>> {

    return <Return<any, Argument, boolean, Readonly<Validatable<any, MessageT>>>> Callback(value, NumberGuard, message);
}
