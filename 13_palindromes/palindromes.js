const palindromes = function (string) {
    let arr = string
                .toLowerCase()
                .split('')
                .filter(char => /[a-z0-9]/.test(char))

    let reverseArr = [...arr].reverse()

    return arr.join('') === reverseArr.join('');
};

// Do not edit below this line
module.exports = palindromes;
