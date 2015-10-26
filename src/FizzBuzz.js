var defaultSubstitutions = [
    {number: 3, word: 'fizz'},
    {number: 5, word: 'buzz'},
    {number: 7, word: 'pop' }
];

function FizzBuzz(substitutions) {
    this.substitutions = substitutions || defaultSubstitutions;
}

FizzBuzz.prototype.getResult = function(num) {
    var filtered = this.substitutions.filter(function(subst) {
        return checkIfDivisible(num, subst.number);
    });

    var result = '';
    filtered.forEach(function(subst) {
        result += subst.word + " ";
    });

    return result.trim();
};

function checkIfDivisible(num1, num2) {
    return num1 % num2 === 0;
}

module.exports = FizzBuzz;