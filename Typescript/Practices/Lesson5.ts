// Function Type Expressions:
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);

// Type Aliases with Function Types:
type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
    fn("Hello, World");
}

greeter2(printToConsole);

// Call Signatures:
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};

function doSth(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
    return someArg > 3;
}

myFunc.description = "default description";

doSth(myFunc); // default description returned true

// Construct Signtures:
type SomeConstructor = {
    new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}
interface SomeObject {
    sideEffect: () => void;
}

// Generic Functions:
function firstElement(arr: any[]) {
    return arr[0];
}

function firstElementGeneric<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

// Constraints Generics:
function longest<Type extends { length: number }>(a: Type, b: Type) {
    return (a.length >= b.length) ? a : b;
}

const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest("alice", "bob");
// const notOK = longest(10, 100); // Error

// Type Predicates:
function isString(input: any): input is string {
    return typeof input === "string";
}

// Overloadding:
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;
function add(arr: [number]): number;
function add(a: any, b?: any, c?: any) {
    if (Array.isArray(a)) {
        return a[0] + a[1];
    }
    if (c) {
        return a + b + c;
    }
    return a + b;
}