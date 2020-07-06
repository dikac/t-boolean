import Validation from "../validation";
import Argument from "@dikac/t-function/argument/argument";
export default function Call<Arg>(object: Validation<Arg> & Argument<[Arg]>): boolean;
