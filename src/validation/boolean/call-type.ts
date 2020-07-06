import Type from "../type";
import Argument from "@dikac/t-function/argument/argument";


export default function CallType<
    Arg,
    ValueType extends Arg
>(
    object : Type<Arg, ValueType> & Argument<[Arg]>
) : ValueType {

    return  object.validation(object.argument[0]);

}
