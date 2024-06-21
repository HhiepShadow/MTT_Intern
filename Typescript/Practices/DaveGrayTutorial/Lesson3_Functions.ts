// Type aliases:
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type UserId = stringOrNumber;

// Literal types:
let thisLiteral: 'dog' | 'cat' | 'dog';

// Function with no return value - Void:
const logMsg = (message: string): void => {
    console.log(message);
}

logMsg('Hello!');

// Function Type aliases:
type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c: number, d: number) {
    return c * d;
}

console.log(multiply(2, 2)); // 4

// Function Interface:
interface mathFunctionInterface {
    (a: number, b: number): number;
}

// Rest parameters:
const total = (...nums: number[]): number => {
    return nums.reduce((prev: number, curr: number) => prev + curr, 0);
}

console.log(total(1, 2, 3, 4));

// Never Type:
const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}
// console.log(createError('Something wrong'));
// ==> Return never value