/**
 * Throw exception if given value is no boolean type
 */
export default function Boolean(value: unknown, error?: (value: unknown) => Error): asserts value is boolean;
