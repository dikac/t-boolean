/**
 * non cryptographic boolean random
 */
export default function Random() : boolean {

    return ! (parseInt(Math.random().toString().substr(2, 1)) % 2)
}
