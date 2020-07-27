import Boolean from "../../../dist/validatable/string/boolean";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Boolean({value:Infinity, valid:true})).toBe('value "Infinity" is boolean');
        expect(Boolean({value:Infinity, valid:false})).toBe('value "Infinity" is not boolean');
    });

    it(`boolean`, () => {
        expect(Boolean({value:-Infinity, valid:true})).toBe('value "-Infinity" is boolean');
        expect(Boolean({value:-Infinity, valid:false})).toBe('value "-Infinity" is not boolean');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Boolean({value:1, valid:true})).toBe('value "1" is boolean');
        expect(Boolean({value:1, valid:false})).toBe('value "1" is not boolean');
    });

    it(`boolean`, () => {
        expect(Boolean({value:-1, valid:true})).toBe('value "-1" is boolean');
        expect(Boolean({value:-1, valid:false})).toBe('value "-1" is not boolean');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Boolean({value:1.1, valid:true})).toBe('value "1.1" is boolean');
        expect(Boolean({value:1.1, valid:false})).toBe('value "1.1" is not boolean');
    });

    it(`float`, () => {
        expect(Boolean({value:-1.1, valid:true})).toBe('value "-1.1" is boolean');
        expect(Boolean({value:-1.1, valid:false})).toBe('value "-1.1" is not boolean');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Boolean({value:NaN, valid:true})).toBe('value "NaN" is boolean');
        expect(Boolean({value:NaN, valid:false})).toBe('value "NaN" is not boolean');
    });

});
