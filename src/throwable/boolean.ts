import BooleanMessage from "../string/boolean";

export default function Boolean(value: unknown) : Error {

    return new Error(BooleanMessage(false, value))
}
