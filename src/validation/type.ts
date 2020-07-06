import Function from "@dikac/t-function/function";

export default interface Type<Argument, ValidType extends Argument> {

    validation : Function<[Argument], ValidType>;
}
