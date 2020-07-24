export default interface Guard<Argument, ValidType extends Argument, Arguments extends unknown[] = []> {

    validation : (value :Argument, ...extras : Arguments) => value is ValidType;
}



