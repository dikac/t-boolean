import Validator from "../../dist/validator/boolean";
import BooleanMessage from "../../dist/validatable/string/boolean";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validator = new Validator(BooleanMessage);
        let validatable = validator.validate(<unknown>true);

        if(validatable.valid) {

            // compiler pass
            let boolean : boolean = validatable.value;
            expect(boolean).toBe(true);

        } else {

            // @ts-expect-error
            let boolean : boolean = validatable.value;
            fail('validatable.valid should false')
        }
    });

    it(`invalid value`,function() {

        let validator = new Validator(BooleanMessage);
        let validatable = validator.validate({});

        if(validatable.valid) {

            // compiler pass
            let boolean : boolean = validatable.value;
            fail('validatable.valid should false')

        } else {

            // @ts-expect-error
            let boolean : boolean = validatable.value;
            // @ts-expect-error
            expect(boolean).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validator = new Validator(BooleanMessage);
        let validatable = validator.validate(1);

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expect-error
        validatable.value = true;

        try {
            // @ts-expect-error
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    let validator = new Validator(BooleanMessage);
    let validatable = validator.validate(false);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(false);
    expect(typeof validatable.message).toBe("string");

});

it(`invalid`,function() {

    let validator = new Validator(BooleanMessage);
    let validatable = validator.validate('a');

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe('a');
    expect(typeof validatable.message).toBe("string");

});



