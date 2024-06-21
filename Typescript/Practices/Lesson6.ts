// Objects:
// 1. Object as paramter in function:
function greet(person: { 
    name: string, 
    age: number
}) {
    return "Hello " + person.name;
}

// 2. Properties modifier:
// 2.1. Optional property:
interface Person {
    name: string;
    age?: number
};

function printPerson(person: Person) {
    let result: string = person.age !== undefined ? `Name: ${person.name} - Age: ${person.age}` : `Name: ${person.name}`;
    console.log(result);
}

function getPerson(): Person{
    return {
        name: "John",
        age: 30
    }
}

function getPerson2(): Person{
    return {
        name: "John",
    }
}

let person: Person = getPerson();
printPerson(person);
person = getPerson2();
printPerson({ ...person, age: 30 });

// 2.2. Index Signatures:
interface PersonIndex {
    name: string;
    age?: number;
    [key: string]: any
}

