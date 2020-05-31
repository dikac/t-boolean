import Validator from "../validator";
import TypeObject from "@dikac/t-object/boolean/type";
import TypeFunction from "@dikac/t-function/boolean/type";

export default function Type<Assumption extends Validator<any>>(value : any) : value is Assumption {

    if(!TypeObject<Assumption>(value)) {

        return false;
    }

    if(!TypeFunction(value.validate)) {

        return false;
    }

    return true;

}
