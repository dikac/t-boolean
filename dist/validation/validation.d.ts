import Function from "@dikac/t-function/function";
export default interface Validation<Arguments extends any[], Return extends boolean = boolean> {
    validation: Function<Arguments, Return>;
}
