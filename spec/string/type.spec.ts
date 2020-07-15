import Type from "../../dist/string/type";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`valid`, () => {
    expect(Type(true, 'value', 'type 1')).toBe('value is "type 1"');
    expect(Type(true, 'value', 'type 2')).toBe('value is "type 2"');
});

it(`invalid`, () => {
    expect(Type(false, 'value', 'type 1')).toBe('value is not "type 1"');
    expect(Type(false, 'value', 'type 2')).toBe('value is not "type 2"');
});
