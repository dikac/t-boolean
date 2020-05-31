import Type from "../dist/type";
it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe("boolean", function() {

    it(`true`, () => {
        expect(Type(true)).toBeTrue();
    });

    it(`false`, () => {
        expect(Type(false)).toBeTrue();
    });

});

describe("string", function() {

    it(`primitive`, () => {
        expect(Type('str')).toBeFalse();
    });

    it(`object`, () => {
        expect(Type(new String('str'))).toBeFalse();
    });

});


describe("number", function() {

    it(`primitive`, () => {
        expect(Type(1)).toBeFalse();
    });

    it(`nan`, () => {
        expect(Type(NaN)).toBeFalse();
    });

});

describe("object", function() {

    it(`plain`, () => {
        expect(Type({})).toBeFalse();
    });

    it(`instance`, () => {
        expect(Type(new Map())).toBeFalse();
    });

});

describe("function", function() {

    it(`anonymous `, () => {
        expect(Type(function () {})).toBeFalse();
    });

    it(`anonymous arrow`, () => {
        expect(Type(()=>{})).toBeFalse();
    });

    it(`named`, () => {
        expect(Type(isNaN)).toBeFalse();
    });

});

describe("empty", function() {

    it(`null `, () => {
        expect(Type(null)).toBeFalse();
    });

    it(`undefined`, () => {
        expect(Type(undefined)).toBeFalse();
    });

});