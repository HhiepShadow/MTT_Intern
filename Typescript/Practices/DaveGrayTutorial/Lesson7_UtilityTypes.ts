// 1. Partial<T>
type Person = {
    name: string;
    age: number;
    address: string
}

type PartialPerson = Partial<Person>;

const partialPerson: PartialPerson = {
    name: "John",
};

// 2. Readonly<T>
type ReadonlyPerson = Readonly<Person>;

const readonlyPerson: ReadonlyPerson = {
    name: "John",
    age: 30
};

// 3. Record<K, V>:
type Color = 'red' | 'blue' | 'green';
type recordColor = Record<Color, string>;
const color: recordColor = {
    red: '#ff0000',
    blue: '#0000ff',
    green: '#00ff00'
};

// 4. Pick<T, K>:
const pickedPerson: Pick<Person, "name" | "age"> = {
    name: "John",
    age: 30
};

// 5. Omit<T, K>:
const omitPerson: Omit<Person, "address"> = {
    name: "John",
    age: 30
};

// 6. Exclude<T, U>:

// 7. ReturnType<T>:
function add(a: number, b: number): number {
    return a + b;
}

const returnType: ReturnType<typeof add> = 10;

// 8. Parameters<T>:
const params: Parameters<typeof add> = [5, 10];