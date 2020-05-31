import RecordValid from "../../../dist/validatable/boolean/record-valid";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("valid", function() {

    let record = {
      valid1 : {valid : true},
      valid2 : {valid : true},
        valid3 : {
            valid2 : {valid : true},
            valid3 : {valid : true},
        }
    };

    it("record", () => expect(RecordValid(record)).toBe(true));

});

describe("invalid valid value", function() {

    let record = {
      valid1 : {valid : true},
      valid2 : {valid : false},
        valid3 : {
            valid2 : {valid : true},
            valid3 : {valid : true},
        }
    };

    it("record", () => expect(RecordValid(record)).toBe(false));

});
