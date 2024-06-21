var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Objects:
// 1. Object as paramter in function:
function greet(person) {
    return "Hello " + person.name;
}
;
function printPerson(person) {
    var result = person.age !== undefined ? "Name: ".concat(person.name, " - Age: ").concat(person.age) : "Name: ".concat(person.name);
    console.log(result);
}
function getPerson() {
    return {
        name: "John",
        age: 30
    };
}
function getPerson2() {
    return {
        name: "John",
    };
}
var person = getPerson();
printPerson(person);
person = getPerson2();
printPerson(__assign(__assign({}, person), { age: 30 }));
