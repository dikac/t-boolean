import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validator/validatable/validatable";
/**
 * create {@see Boolean} with default message factory
 */
export default function BooleanStandard(): Validator<any, boolean, Readonly<Validatable<any, string>>>;
