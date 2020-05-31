import ValidatableInterface from "./validatable";
import ValueInterface from "@dikac/t-value/value";
import Wrapper from "./wrapper";
/**
 * merge {@Link Validatable} and {@Link Message}
 */
export default class Value<Validatable_ extends ValidatableInterface, Value> extends Wrapper<Validatable_> implements Readonly<ValueInterface<Value>> {
    valueContainer: ValueInterface<Value>;
    constructor(validatable: Validatable_, valueContainer: ValueInterface<Value>);
    get value(): Value;
}
