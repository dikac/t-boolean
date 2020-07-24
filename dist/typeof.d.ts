import Type, { List } from "./type/type";
export default function Typeof<T extends List>(value: unknown, type: T): value is Type<T>;
