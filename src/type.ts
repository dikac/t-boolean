/**
 * check if given value type is boolean
 */
export default function Type(value : any) : value is boolean {

    return value === true || value === false;
}
