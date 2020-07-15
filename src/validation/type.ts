export default interface Type<Argument, ValidType extends Argument, Arguments extends unknown[] = []> {

    validation : (value :Argument, ...extras : Arguments) => value is ValidType;
}



