import Message from "@dikac/t-message/message";
export default function Boolean<Msg extends Message<any>>(value: any, message: () => Msg): void;
