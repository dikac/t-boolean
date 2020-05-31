// import Validatable from "./validatable";
// import Value from "@dikac/t-value/value";
// import Wrapper from "./wrapper";
// import Message from "@dikac/t-message/message";
// import ValueMessage from "./value-message";
//
// export default class Asserted<
//     Value_,
//     Validatable_ extends Validatable & Value<Value_> & Message<string>
// > extends ValueMessage<Validatable_, Validatable_, Validatable_>
//     implements
//         Readonly<Message<string>>,
//         Readonly<Value<Value_>>
// {
//
//     constructor(
//         validatable : Validatable_,
//         public exception : (message : string, validatable : Validatable_) => Error = (message : string, validatable : Validatable_) => new Error(message)
//
//     ) {
//         super(validatable, validatable, validatable);
//     }
//
//
//     get value() : Value_ {
//
//         if(!this.valid) {
//
//             throw this.exception(this.message, this.validatable);
//         }
//
//         return this.validatable.value;
//     }
// }
//# sourceMappingURL=asserted.js.map