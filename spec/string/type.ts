import Type from "../../dist/string/type";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`valid`, () => {
    expect(Type(true, 'type 1')).toBe('value "Infinity" is type 1');
    expect(Type(true, 'type 2')).toBe('value "Infinity" is not type 2');
});

it(`invalid`, () => {
    expect(Type(false, 'type 1')).toBe('value "-Infinity" is not type 1');
    expect(Type(false, 'type 2')).toBe('value "-Infinity" is not type 2');
});
