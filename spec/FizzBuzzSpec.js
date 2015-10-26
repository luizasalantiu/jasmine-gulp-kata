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