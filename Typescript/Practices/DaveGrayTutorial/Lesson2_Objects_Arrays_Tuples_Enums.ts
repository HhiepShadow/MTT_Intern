// Array:
let strArr = ['one', 'two', 'three'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];

// strArr[0] = 42; // Type 'number' is not assignable to type 'string'
guitars[0] = 1984;

// Array Any Types - Explicit Type:
let test = []; // any type
let bands: string[] = []; // explicit

// Tuple:
let myTuple: [string, number, boolean] = ['Dave', 42, true];
let mixed = ['John', 1, true];

// myTuple = mixed; // Type (string, number, boolean)[] is not assignable to type [string, number, boolean]


// Object:
let myObj: object;
myObj = [];
console.log(typeof myObj); // object
myObj = bands; // OK

myObj = {}; // OK

const exampleObj = {
    name: 'Dave',
    isDev: true
};
exampleObj.name = 'John';

// Type:
type Guitarist = {
    name?: string,
    active?: boolean,
    albums: (string | number)[]
};

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

// Object as Function parameters:
const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`;
}

console.log(greetGuitarist(evh));

// Comparison between type and interface:
// If you want to create an object, you should declare a type
// And if you want to create a class, you should declare an interface
// Both are used for type-checking and compilation

// Narrowing with optional properties:
const greetGuitarist2 = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
}

// Enums:

// Enums:
enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}