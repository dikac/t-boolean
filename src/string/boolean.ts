export default function Boolean(valid : boolean, value : unknown) : string {

    let string = (<any>value).toString();

    if(valid) {

        return `value "${string}" is boolean`;

    } else {

        return `value "${string}" is not boolean`;
    }
}
