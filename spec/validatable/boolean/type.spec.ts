import Type from "../../../dist/validatable/boolean/type";
import Standard from "../../../dist/validatable/standard";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("success", function() {
    it("class", () => expect(Type(new Standard(true))).toBe(true));
    it("object", () => expect(Type({ valid : true})).toBe(true));
});

describe("fail", function() {

    it("class", () => expect(Type(new String())).toBe(false));
    it("object", () => expect(Type({ valid : () => true})).toBe(false));
});
