import Record from "@dikac/t-object/record/record";
import Validator from "../../validator";
import ToValue from "../to-value";
import ToValidatable from "../to-validatable";
export default function validate<Validators extends Record<Validator<any>>>(validators: Validators, value: ToValue<Validators>): ToValidatable<Validators>;
