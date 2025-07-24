const add = function(x,y) {
	return x+y
};

const subtract = function(x,y) {
	return x-y
};

const sum = function(num) {
	return num.reduce((prev, next) => prev+next,0)
};

const multiply = function(num) {
  return num.reduce((prev, next) => prev*next)
};

const power = function(x, y) {
	return Math.pow(x,y)
};

const factorial = function(num) {
  let result = 1;
	if (num !== 0) {
    for (let i=1; i <= num; i++) {
      result *=i
    }
  }
  
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
