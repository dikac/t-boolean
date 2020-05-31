export default function ValueMessage<
    Argument,
    Value_ extends Argument
>(
    value : Argument,
    callback : (value : Argument) => value is Value_
) {

}


