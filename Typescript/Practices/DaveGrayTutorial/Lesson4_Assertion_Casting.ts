// Assertion: 1
type One = string;
type Two = string | number;
type Three = 'hello';

// Convert to more or less specific:
let a: One = 'hello';
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
}

let myConcat: string = addOrConcat(2, 2, 'concat') as string;
let myAdd: number = addOrConcat(2, 2, 'add') as number;
console.log(myConcat); // 22
console.log(myAdd); // 4


/**
 * Student Challenge:
 */
// Question: Here is original JS code:
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;

// ==> Refactor it to TS code:
// Solution1:
let year: HTMLElement | null = document.getElementById("year");
let thisYear: string = new Date().getFullYear().toString();
if (year) {
    year.setAttribute("datetime", thisYear);
    year.textContent = thisYear;
}

// Solution 2:
const year2 = document.getElementById("year") as HTMLElement;
const thisYear2: string = new Date().getFullYear().toString();
year2.setAttribute("datetime", thisYear);
year2.textContent = thisYear;