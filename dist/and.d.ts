import { Union, List } from "ts-toolbelt";
/**
 * callback mapping
 */
export declare type Validator<Values extends any[]> = {
    [Key in keyof Values]: (value: any) => value is Values[Key];
};
/**
 *
 * @param value
 * @param validators
 * @constructor
 */
export default function And<V extends unknown[]>(value: unknown, validators: Validator<V>): value is Union.IntersectOf<List.UnionOf<V>>;
