import Type from "./type";
import Or from "../or";
/**
 * wrap type validatable
 */
export default class Wrapper<V extends Type[]> extends Or<V> implements Readonly<Type> {
    delimiter: string;
    constructor(validatables: V, delimiter?: string);
    get type(): string;
}
