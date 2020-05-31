import Validator from "./validator";
import Validatable from "../validatable/validatable";
import Primitive from "../validatable/primitive";
import RecordObject from "@dikac/t-object/record/record";
import ToValue from "./object/to-value";
import ToValidatable from "./object/to-validatable";
import validate from "./object/record/validate";
import RecordValid from "../validatable/boolean/record-valid";
import Mixin from "@dikac/t-object/mixin";


export default class Record<
    Container extends RecordObject<Validator<any>>
    > implements Validator<ToValue<Container>, ToValidatable<Container> & Validatable>
{

    constructor(
        public validators : Container
    ) {

        this.guardProperty(validators);
    }

    protected guardProperty(object : object) {

        if('valid' in object) {

            throw new Error(`property "valid" is reserved`);
        }
    }

    validate(value: ToValue<Omit<Container,'valid'>>) : ToValidatable<Container> & Validatable {

        let results = validate(this.validators, value);

        let validatable = new Primitive(RecordValid(results));

        return <ToValidatable<Container> & Validatable>Mixin(results, validatable);
    }
}



