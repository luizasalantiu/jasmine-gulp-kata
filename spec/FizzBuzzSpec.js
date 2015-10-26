var FizzBuzz = require('../src/FizzBuzz.js');

describe("FizzBuzz", function() {
    var fizzBuzz;

    beforeEach(function() {
        fizzBuzz = new FizzBuzz();
    });

    it("Should return 'fizz' for multiple of 3", function() {
        var result = fizzBuzz.getResult(9);
        expect(result).toEqual("fizz");
    });

    it("Should return 'buzz' for multiple of 5", function() {
        var result = fizzBuzz.getResult(10);
        expect(result).toEqual("buzz");
    });

    it("Should return 'fizz buzz' for multiple of 3 and 5", function() {
        var result = fizzBuzz.getResult(15);
        expect(result).toEqual("fizz buzz");
    });

    it("Should return 'fizz pop' for multiple of 3 and 7", function() {
        var result = fizzBuzz.getResult(21);
        expect(result).toEqual("fizz pop");
    });

    it("Should return 'fizz buzz pop' for multiple of 3, 5 and 7", function() {
        var result = fizzBuzz.getResult(105);
        expect(result).toEqual("fizz buzz pop");
    });
});

describe("FizzBuzz initialized with custom substitutions", function() {
    var fizzBuzz;
    var substitutions = [{
        number: 2,
        word: 'fuzz'
    }, {
        number: 3,
        word: 'bizz'
    }];

    beforeEach(function() {
        fizzBuzz = new FizzBuzz(substitutions);
    });

    it("Should return 'fuzz' for mupltiple of 2", function() {
        var result = fizzBuzz.getResult(4);
        expect(result).toEqual("fuzz");
    });

    it("Should return 'bizz' for multiples of 3", function() {
        var result = fizzBuzz.getResult(9);
        expect(result).toEqual("bizz");
    });

    it("Should return 'fuzz bizz' for mupltiple of 2 and 3", function() {
        var result = fizzBuzz.getResult(6);
        expect(result).toEqual("fuzz bizz");
    });
});