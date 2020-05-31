// import ValidatableType from "../../dist/validatable/type/wrapper";
//
//
// export default class StringType extends ValidatableType<string> {
//
//     constructor(data, private _message : string) {
//
//         super(data, (value : any) : value is string =>  { return  typeof value ==="string"});
//     }
//
//     protected getMessage(data: any, valid: boolean): string {
//         return valid + '-' + this._message;
//     }
// }
