function FizzBuzz() {}

FizzBuzz.prototype.getResult = function(num) {
    var result = '';
    result = result + getFizz(num) + getBuzz(num) + getPop(num);

    return result.trim();
};

function getFizz(num) {
    if (num % 3 === 0) return "fizz ";
    return '';
}

function getBuzz(num) {
    if (num % 5 === 0) return "buzz ";
    return '';
}

function getPop(num) {
    if (num % 7 === 0) return "pop ";
    return '';
}

module.exports = FizzBuzz;