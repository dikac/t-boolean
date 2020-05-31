import Message from "@dikac/t-message/message";
import { Return } from "./callback-value";
import MessageCallback from "@dikac/t-message/callback";
export default function CallbackValueMessage<Argument, Val extends Argument, Msg, Message_ extends Message<Msg> = Message<Msg>>(value: Argument, callback: (value: Argument) => value is Val, message: (validatable: Return<Val, Argument>) => Message_): Return<Val, Argument> & MessageCallback<Message_, [Return<Val, Argument>]>;
