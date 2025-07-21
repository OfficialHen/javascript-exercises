const reverseString = function(word) {
    return word
        .split('')
        .reverse()
        .join('')
};

/*
const reverseString = function(word) {
    let letters = []
    let reverse = ''
    for (let i = 0; i < word.length; i++) {
        letters.push(word[i])
    }

    for (let i = letters.length - 1; i >= 0; i--) {
      reverse += letters[i]
    }

    return reverse
};
*/

// Do not edit below this line
module.exports = reverseString;
