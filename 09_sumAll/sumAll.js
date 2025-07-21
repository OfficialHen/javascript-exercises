const sumAll = function(a, b) {
    function isValid(x) {
        return typeof x === 'number' && Number.isInteger(x) && x >= 0
    }
    if (!isValid(a) || !isValid(b)) return 'ERROR';
    
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
