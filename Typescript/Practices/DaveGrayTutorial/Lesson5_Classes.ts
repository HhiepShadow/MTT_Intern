// Classes:
// We have to declare all properties on the top of a class so that we can use these properties
class Developer {
    name: string;
    age: number;
    role: string;
    lang: string;

    constructor(
        name: string,
        age: number,
        role: string,
        lang: string
    ) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.lang = lang;
    }
}

// Visibility Modifiers:
// public
// private
// protected
class Analyst {
    constructor(
        public name: string,
        protected role: string,
        private age: number
    ) {
        this.name = name;
        this.role = role;
        this.age = age;
    }

    public getAge(): number {
        return this.age;
    }
}

const analyst: Analyst = new Analyst("Dave", "analyst", 30);
// console.log(analyst.age); // Error age property is private
console.log(analyst.getAge()); // 30

// Extends:
class WebDeveloper extends Developer {
    constructor(
        public computer: string,
        name: string, 
        age: number,
        role: string,
        lang: string
    ) {
        super(name, age, role, lang);
        this.computer = computer;
    }
}

// Implements Interface:
interface Musician {
    name: string;
    instrument: string;
    play(action: string): string;
}

class Pianoist implements Musician {
    name: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    public play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

// Static:
class MathUtils {
    static PI: number = 3.14159;
    static add(a: number, b: number): number {
        return a + b;
    }

    static sum(...args: number[]): number {
        return args.reduce((prev, curr) => prev + curr, 0);
    }

    static multiply(a: number, b: number): number {
        return a * b;
    }
}

console.log(MathUtils.add(2, 3)); // 5
console.log(MathUtils.PI); // 3.14159

// Getter - Setter:
class Bands {
    private dataState: string[];

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string[]){
        if (Array.isArray(value) && value.every(elem => typeof elem === 'string')) {
            this.dataState = value;
            return;
        } else {
            throw new Error("Param is not an array of strings");
        }
    }
}