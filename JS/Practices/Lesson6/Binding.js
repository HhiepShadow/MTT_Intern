let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

let sayHi = user.sayHi.bind(user);

sayHi();

setTimeout(sayHi, 1000);

user = {
    sayHi() {
        console.log("Hello!");
    }
}
