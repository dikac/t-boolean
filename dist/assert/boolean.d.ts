/**
 * Throw exception if given value is no boolean type
 */
export default function Boolean(value: any, error?: (value: any) => Error): asserts value is boolean;
