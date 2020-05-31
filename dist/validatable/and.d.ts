import Validatable from "./validatable";
export default class And<Arguments extends Validatable[]> implements Readonly<Validatable> {
    validatables: Arguments;
    constructor(validatables: Arguments);
    get valid(): boolean;
}
