import BooleanMessage from "../string/boolean";

/**
 * create {@see TypeError} from {@see BooleanMessage}
 * @param value
 * @param subject
 * @param conversion
 */
export default function Boolean(
    value: unknown,
    subject ?: string ,
    conversion ?: (value:unknown)=>string
) : TypeError {

    return new TypeError(BooleanMessage(false, value, subject, conversion))
}
