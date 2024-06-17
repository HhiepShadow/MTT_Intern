// Access to object keys:
// let user = {};

// user['like birds'] = true;

// console.log(user['like birds']);

// References and Copying:
let x = 4;
let y = x;
y = 5;
console.log(x);
x = 6;
console.log(y);

// Object assign:
let user = {
    name: "John",
    age: 30
};

let assign = {
    mail: "user@gmail.com"
};

let obj = Object.assign({}, user, assign);
console.log(obj.mail);

// this trong phương thức:
user = {
    name: "John",
    age: 30,
    sayHi() {
        console.log(this.name);
    }
}

user.sayHi();