const fibonacci = function(num) {
    num = Number(num)
    if (num===0) return 0
    if (num===1) return 1
    if (num<0) return 'OOPS'

    let a = 0
    let b = 1
    for (let i=2; i<=num; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b
};

// Do not edit below this line
module.exports = fibonacci;
