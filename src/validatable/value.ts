import ValidatableInterface from "./validatable";
import MessageInterface from "@dikac/t-message/message";
import ValueInterface from "@dikac/t-value/value";
import Wrapper from "./wrapper";

/**
 * merge {@Link Validatable} and {@Link Message}
 */
export default class Value<Validatable_ extends ValidatableInterface, Value> extends Wrapper<Validatable_> implements Readonly<ValueInterface<Value>> {

    constructor(
        validatable : Validatable_,
        public valueContainer :  ValueInterface<Value>
    ) {

        super(validatable);
    }

    get value () : Value {

        return this.valueContainer.value;
    }

}



