function isEqual(obj1, obj2) {
    // your code
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        console.log('error');
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

// isEqual({ a: 1 }, { a: 1 }) // true
// isEqual({ a: 1, b: 2 }, { a: 1, b: 3 }) // false
// isEqual([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 2 }]) // true

console.log(isEqual({a: {c:2, b:1}} , { a: {b:1, c:2} }));
// console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 }));
// console.log(isEqual([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 2 }]));

// let obj = [{ a: 1 }, { b: 2 }]
// let keys = Object.keys(obj);
// console.log(obj['0']);