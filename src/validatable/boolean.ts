

import Standard from "@dikac/t-value/standard";
import CallbackValue from "./callback-value";
import Type from "../type";
import Message from "@dikac/t-message/message";

export default function Boolean<Msg extends Message<any>>(value : any, message : () => Msg) {

    let callback = CallbackValue(value, Type)



}
