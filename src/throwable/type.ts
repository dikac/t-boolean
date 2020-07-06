export default function Type(value: any) : Error {

    return new Error(`type expect boolean, given ${value}`)
}
