export default interface Type<Argument, ValidType extends Argument, Arguments extends any[] = []> {
    validation: (value: Argument, ...extras: Arguments) => value is ValidType;
}
