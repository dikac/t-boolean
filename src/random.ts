/**
 * non cryptographic boolean random
 *
 * @constructor
 */
export default function Random() : boolean {

    return ! (parseInt(Math.random().toString().substr(2, 1)) % 2)
}