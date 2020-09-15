import Number from "../../../dist/assert/string/boolean";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});


it(`valid`, () => {
    expect(Number(true, {})).toBe('type is boolean.');
});

it(`invalid`, () => {
    expect(Number(false, 1)).toBe('type must boolean, actual number.');
});
