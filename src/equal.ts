/**
 * compare {@param value} with {@param compare} useing === comparison
 */

export default function Equal<
    Value,
    Compare extends Value
>(value : Value, compare : Compare) : value is Compare {

    return value === compare;
}


