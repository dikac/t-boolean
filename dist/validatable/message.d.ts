import ValidatableInterface from "./validatable";
import MessageInterface from "@dikac/t-message/message";
import Wrapper from "./wrapper";
/**
 * merge {@Link Validatable} and {@Link Message}
 */
export default class Message<V extends ValidatableInterface, M> extends Wrapper<V> implements Readonly<MessageInterface<M>> {
    messageContainer: MessageInterface<M>;
    constructor(validatable: V, messageContainer: MessageInterface<M>);
    get message(): M;
}
