import Primitive from "./primitive";
import StdValue from "@dikac/t-value/standard";
import Mixin from "@dikac/t-object/mixin";
import Validatable from "./validatable";
import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import CallbackValue, {Return} from "./callback-value";
import MessageCallback from "@dikac/t-message/callback";


//export type Callback<Val, Argument, Message_> = (validatable : Return<Val, Argument>) => Message_;

export default function CallbackValueMessage<
    Argument,
    Val extends Argument,
    Msg,
    Message_ extends Message<Msg> = Message<Msg>
>(
    value : Argument,
    callback : (value : Argument) => value is Val,
    message : (validatable : Return<Val, Argument>) => Message_
) : Return<Val, Argument> & MessageCallback<Message_, [Return<Val, Argument>]> {

    let validatableValue = CallbackValue<Argument, Val>(value, callback);

    let messageCallback = new MessageCallback<Message_, [Return<Val, Argument>]>(message, [validatableValue]);

    return Mixin(validatableValue, messageCallback);
}

