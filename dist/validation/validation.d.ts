import Function from "@dikac/t-function/function";
export default interface Validation<Arguments extends unknown[], Return extends boolean = boolean> {
    validation: Function<Arguments, Return>;
}
