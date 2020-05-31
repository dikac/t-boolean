import Record from "@dikac/t-object/record/record";
import Validator from "../validator";

type ToValue<Schema extends Record<Validator<unknown>>> = {
    [Key in keyof Schema] : Schema[Key] extends Record<Validator<any>> ? ToValue<Schema[Key]> : (Schema[Key] extends Validator<infer U> ? U : never)
};

export default ToValue;
