import Function from "@dikac/t-function/function";

export default interface Validation<Arguments extends any[]> {

    validation : Function<Arguments, boolean>;
}
