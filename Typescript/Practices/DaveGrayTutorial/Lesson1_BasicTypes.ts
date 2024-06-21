// Implicit, Explicit and Reference:
let myName: string = "John Doe";
// myName = 4; // Type 'number' is not assignable to type 'string'.
let yourName = "Jane Smith";

// Any type:
let album: any;
album = true;
album = "Red";

// Function Parameters:
const sum = (a: number, b: number) => {
    return a + b;
}

// Union Type:
let quantity: string | number;
