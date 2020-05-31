import ValidatableInterface from "./validatable";
import MessageInterface from "@dikac/t-message/message";
import Wrapper from "./wrapper";

/**
 * merge {@Link Validatable} and {@Link Message}
 */
export default class Message<V extends ValidatableInterface, M> extends Wrapper<V> implements Readonly<MessageInterface<M>> {

    constructor(
        validatable : V,
        public messageContainer :  MessageInterface<M>
    ) {

        super(validatable);
    }

    get message () : M {

        return this.messageContainer.message;
    }

}



