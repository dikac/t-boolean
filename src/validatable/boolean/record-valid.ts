import Validatable from "../validatable";
import Record from "@dikac/t-object/record/record";
import TypeObject from "@dikac/t-object/boolean/type";
import Type from "./type";
import PropertyActual from "@dikac/t-object/message/string/property-actual";

export default function RecordValid(record : Record<Validatable>) : boolean {

    let valid : boolean = true;

    for(let property in record) {

        if(!valid) {
            return false;
        }

        const data = record[property];

        if(Type(data)) {

            valid = valid && data.valid;
            continue;
        }

        if(TypeObject(data)) {

            valid = valid && RecordValid(data);
            continue;
        }

        throw new Error(PropertyActual(property, 'validatable or record of validatable', data + ''))
    }


    return valid;
}
