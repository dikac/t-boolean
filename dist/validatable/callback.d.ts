import ValueMessage from "./value-message";
import ValidatableInterface from "./validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
export default class Callback<Argument, Value_ extends Argument, Message_ extends Message<any>> extends ValueMessage<ValidatableInterface, Value<Value_ | Argument>, Message_> {
    constructor(value: Argument, callback: (value: Argument) => value is Value_, message: Message_);
}
