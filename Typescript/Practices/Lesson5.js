// Function Type Expressions:
function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function greeter2(fn) {
    fn("Hello, World");
}
greeter2(printToConsole);
function doSth(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function myFunc(someArg) {
    return someArg > 3;
}
myFunc.description = "default description";
doSth(myFunc); // default description returned true
function fn(ctor) {
    return new ctor("hello");
}
// Generic Functions:
function firstElement(arr) {
    return arr[0];
}
function firstElementGeneric(arr) {
    return arr[0];
}
// s is of type 'string'
var s = firstElement(["a", "b", "c"]);
// n is of type 'number'
var n = firstElement([1, 2, 3]);
// u is of type undefined
var u = firstElement([]);
// Constraints Generics:
function longest(a, b) {
    return (a.length >= b.length) ? a : b;
}
var longerArray = longest([1, 2], [1, 2, 3]);
var longerString = longest("alice", "bob");
// const notOK = longest(10, 100); // Error
// Type Predicates:
function isString(input) {
    return typeof input === "string";
}
