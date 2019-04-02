function add(a, b) {
    return a + b;
}

module.exports = {
    add, 
    subtract,
    multiply,
    isOdd,
    isEven,
    isDivisibleBy
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function isOdd(value) {
    if (value%2 == 0)
    return false;
    else
    return true;
 }
 function isEven(value) {
    if (value%2 == 0)
    return true;
    else 
    return false;
 }
 function isDivisibleBy(value) {
     if (value%2 == 0) 
     return true;
     else 
     return false;
 }