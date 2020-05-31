import Record from "../../../dist/validatable/boolean/record";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("valid", function() {

    let record = {
      valid1 : {valid : true},
      valid2 : {valid : false},
        valid3 : {
            valid2 : {valid : true},
            valid3 : {valid : false},
        }
    };

    it("class", () => expect(Record(record)).toBe(true));

});

describe("invalid valid value", function() {

    let record = {
      valid1 : {valid : true},
      valid2 : {valid : false},
        valid3 : {
            valid2 : {valid : true},
            valid3 : {valid : 1},
        }
    };

    it("class", () => expect(Record(record)).toBe(false));

});

describe("invalid valid data", function() {

    let record = {
      valid1 : {valid : true},
      valid2 : {valid : false},
        valid3 : {
            valid2 : {valid : true},
            valid3 : 1,
        }
    };

    it("class", () => expect(Record(record)).toBe(false));

});


