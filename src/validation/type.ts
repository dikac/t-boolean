import Function from "@dikac/t-function/function";
import {List, Tuple} from "ts-toolbelt";
import Boolean from "../boolean";

export default interface Type<Argument, ValidType extends Argument, Arguments extends any[] = []> {

    validation : (value :Argument, ...extras : Arguments) => value is ValidType;
}



