declare type Validator<V extends any[]> = {
    [P in keyof V]: (value: any) => value is V[P];
};
/**
 * taken from https://stackoverflow.com/a/51603499/1404654
 */
declare type TupleTypes<T> = {
    [P in keyof T]: T[P];
} extends {
    [key: number]: infer V;
} ? V : never;
export default function Or<V extends any[]>(value: any, validators: Validator<V>): value is TupleTypes<V>;
export {};
