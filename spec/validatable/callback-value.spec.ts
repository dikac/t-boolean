import Valid from "../../dist/validatable/record/valid";
import CallbackValue from "../../dist/validatable/callback-value";
import Type from "../../dist/type";
import Message from "@dikac/t-message/standard";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("invalid 1", function() {

    let result = CallbackValue('data', Type);

    it("check value", () => {

        expect(result.value).toBe('data');
    });

    it("check valid", () => {

        expect(result.valid).toBe(false);
    });

});
describe("invalid 2", function() {

    let result = CallbackValue(1, Type);

    it("check value", () => {

        expect(result.value).toBe(1);
    });

    it("check valid", () => {

        expect(result.valid).toBe(false);
    });

});

describe("valid 1", function() {

    let result = CallbackValue(true, Type);

    it("check value", () => {

        expect(result.value).toBe(true);
    });

    it("check valid", () => {

        expect(result.valid).toBe(true);
    });

});

describe("valid 2", function() {

    let result = CallbackValue(false, Type);

    it("check value", () => {

        expect(result.value).toBe(false);
    });

    it("check valid", () => {

        expect(result.valid).toBe(true);
    });

});

