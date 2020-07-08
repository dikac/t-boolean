import Validation from "../validation";
import Argument from "@dikac/t-function/argument/argument";


export default function Call<
    Arg extends any[]
>(
    object : Validation<Arg> & Argument<Arg>
) : boolean {

    return  object.validation(...object.argument);
}
