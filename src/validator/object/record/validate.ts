import Record from "@dikac/t-object/record/record";
import Validator from "../../validator";
import ToValue from "../to-value";
import ToValidatable from "../to-validatable";
import Type from "../../boolean/type";
import Validatable from "@dikac/t-validatable/validatable";
import TypeObject from "@dikac/t-object/boolean/type";
import PropertyActual from "@dikac/t-object/message/string/property-actual";

export default function validate<Validators extends Record<Validator<any>>>(validators : Validators, value : ToValue<Validators>) : ToValidatable<Validators> {

    let object : Record<Validatable> = {};

    for(let property in validators) {

        const validator = validators[property];

        if(Type(validator)) {

            object[property] = validator.validate(value[property]);
            continue;
        }

        if(TypeObject(validator)) {

            object[property] = validate(<Record<Validator<any>>>validator, <ToValue<Validators>> value[property]);
            continue;
        }

        throw new Error(PropertyActual(property, 'validator or record of validator', validator + ''));
    }

    return <ToValidatable<Validators>> object;
}
