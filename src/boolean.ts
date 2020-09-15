/**
 * check if {@param value} type is boolean
 *
 * @param value
 */
export default function Boolean(value : unknown) : value is boolean {

    return value === true || value === false;
}
