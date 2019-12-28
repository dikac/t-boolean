import Type from "./type";

export default function Guard(
    value : any,
    error : (value: any) => Error = (value: any) => new Error('type expect boolean, given ' + value)
    ) : boolean {

    if(Type(value)) {

        return value;
    }

    throw error(value);
}