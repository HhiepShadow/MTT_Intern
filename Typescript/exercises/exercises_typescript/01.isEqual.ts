function isEqual(obj1: any, obj2: any): boolean {
    // your code
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let k of keys1) {
        if (!isEqual(obj1[k], obj2[k])) {
            return false;
        }
    }

    return true;
}

console.log(isEqual({ a: 1 }, { a: 1 })) // true
console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })) // false
console.log(isEqual([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 2 }])) // true