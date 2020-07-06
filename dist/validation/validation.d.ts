import Function from "@dikac/t-function/function";
export default interface Validation<Argument> {
    validation: Function<[Argument], boolean>;
}
