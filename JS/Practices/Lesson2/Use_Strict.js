'use strict'

x = { p1: 10, p2: 20 };      // This will cause an error

let y = 3.14;
delete y;   // This will cause an error

function f(p1, p2) {};
delete f;   // This will cause an error


function ff(p1, p1) { };   // This will cause an error

let octal_literal = 010;    // This will cause an error

let octal_escape = "\010";       // This will cause an error

const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});
obj.x = 3.14;   // This will cause an error

const obj2 = {get x() {return 0} };
obj2.x = 3.14; 

delete Object.prototype; // This will cause an error

let eval = 3.14;      // This will cause an error

let arguments = 3.14;    // This will cause an error

with (Math) { x = cos(2) }; // This will cause an error

eval ("z = 2");
alert(z);      // This will cause an error

eval ("var t = 2");
alert(t);    // This will cause an error

function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();