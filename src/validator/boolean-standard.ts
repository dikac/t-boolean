import Boolean from "./boolean";
import NumberString from "../validatable/string/boolean";
import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validator/validatable/validatable";

export default function BooleanStandard() : Validator<any, boolean, Readonly<Validatable<any, string>>> {

    return new Boolean(NumberString);
}
