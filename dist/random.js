/**
 * non cryptographic boolean random
 */
export default function Random() {
    return !(parseInt(Math.random().toString().substr(2, 1)) % 2);
}
//# sourceMappingURL=random.js.map