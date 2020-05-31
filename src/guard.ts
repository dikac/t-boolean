import Type from "./type";

/**
 * Throw exception if given value is no boolean type
 */
export default function Guard(
    value : any,
    errorFactory : (value: any) => Error = defaultFactory
    ) : boolean {

    if(Type(value)) {

        return value;
    }

    throw errorFactory(value);
}

function defaultFactory(value: any) {

    return new Error('type expect boolean, given ' + value)
}
