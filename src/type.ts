export default function Type(value : any) : value is boolean {

    return value === true || value === false;
}