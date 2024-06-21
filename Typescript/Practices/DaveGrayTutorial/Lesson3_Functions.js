// Literal types:
var thisLiteral;
// Function with no return value - Void:
var logMsg = function (message) {
    console.log(message);
};
logMsg('Hello!');
var multiply = function (c, d) {
    return c * d;
};
console.log(multiply(2, 2)); // 4
// Rest parameters:
var total = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (prev, curr) { return prev + curr; }, 0);
};
console.log(total(1, 2, 3, 4));
// Never Type:
var createError = function (errMsg) {
    throw new Error(errMsg);
};
// console.log(createError('Something wrong'));
// ==> Return never value
