const repeatString = function(phrase, amount) {
    if (amount < 0) return 'ERROR'
    let string = ''
    for (let i = 0; i < amount; i++) {
        string += phrase
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
