import Boolean from "./boolean";
import NumberString from "../validatable/string/boolean";

export default function BooleanStandard() : Boolean<string> {

    return new Boolean(NumberString);
}
