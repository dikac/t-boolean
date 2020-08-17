import { Validator } from "./and";
import { List } from "ts-toolbelt";
export default function Or<V extends unknown[]>(value: unknown, validators: Validator<V>): value is List.UnionOf<V>;
