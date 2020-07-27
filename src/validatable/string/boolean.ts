import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NumberAssert from "../../string/boolean";

export default function Number(object : Readonly<Value & Validatable>) : string {

    return NumberAssert(object.valid, object.value)
}
