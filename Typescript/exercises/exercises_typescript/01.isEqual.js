function isEqual(obj1, obj2) {
    // your code
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2;
    }
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++) {
        var k = keys1_1[_i];
        if (!isEqual(obj1[k], obj2[k])) {
            return false;
        }
    }
    return true;
}
console.log(isEqual({ a: 1 }, { a: 1 })); // true
console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(isEqual([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 2 }])); // true
