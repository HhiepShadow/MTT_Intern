// function greet(name) {
//     console.log("Hello " + name);
// }

// const timeoutId = setTimeout(greet, 1000, "John");

// clearTimeout(timeoutId);

let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

setTimeout(() => user.sayHi(), 1000);

// ...the value of user changes within 1 second
user = {
  sayHi() { console.log("Another user in setTimeout!"); }
};
