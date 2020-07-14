export default function Type(valid : boolean, type : string) : string {

    if(valid) {

        return `value is ${type}`;

    } else {

        return `value is not ${type}`;
    }
}
