import Validator from "./validator";
import Validatable from "../validatable/validatable";
import RecordObject from "@dikac/t-object/record/record";
import ToValue from "./object/to-value";
import ToValidatable from "./object/to-validatable";
export default class Record<Container extends RecordObject<Validator<any>>> implements Validator<ToValue<Container>, ToValidatable<Container> & Validatable> {
    validators: Container;
    constructor(validators: Container);
    protected guardProperty(object: object): void;
    validate(value: ToValue<Omit<Container, 'valid'>>): ToValidatable<Container> & Validatable;
}
