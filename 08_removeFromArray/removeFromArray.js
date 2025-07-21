const removeFromArray = function(arr, ...remove) {
    return arr.filter(current => remove.every(currRemove => current !== currRemove))
};

// Do not edit below this line
module.exports = removeFromArray;
