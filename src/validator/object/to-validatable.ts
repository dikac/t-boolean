import Record from "@dikac/t-object/record/record";
import Validator from "../validator";

export type ToValidatable<Schema extends Record<Validator<unknown>>> = {
    [Key in keyof Schema] : Schema[Key] extends Record<Validator<any>> ? ToValidatable<Schema[Key]> : (Schema[Key] extends Validator<any,infer U> ? U : never)
};


export default ToValidatable;
