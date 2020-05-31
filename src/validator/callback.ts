import Validator from "./validator";
import Validatable from "@dikac/t-validatable/validatable";

export default class Callback<
    Value,
    Result extends Validatable
    > implements Validator<Value, Result>
{

    constructor(
        private result : (value : Value) => Result,
    ) {

    }

    validate(value: Value): Result {

        return this.result(value);
    }
}
