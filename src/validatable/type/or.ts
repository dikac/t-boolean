import Type from "./type";
import Or from "../or";

/**
 * wrap type validatable
 */

export default class Wrapper<V extends Type[]> extends Or<V> implements Readonly<Type>{

    constructor(
        validatables : V,
        public delimiter : string = ' | '
    ) {
        super(validatables);
    }

    get type() : string {

        const types = this.validatables.map(v=>v.type);
        const type = types.join(this.delimiter);

        return type;
    }
}
