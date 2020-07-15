export default function Type(valid : boolean, subject : string, type : string) : string {

    if(valid) {

        return `${subject} is "${type}"`;

    } else {

        return `${subject} is not "${type}"`;
    }
}
