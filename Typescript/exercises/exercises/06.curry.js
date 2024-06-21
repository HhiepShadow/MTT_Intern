import _ from 'lodash';

function curry(fn) {
    // your code
    return function curried(...args) {
        if (args.length === fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

// function curry(fn) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return fn(a, b, c);
//             }
//         }
//     }
// }

function addFn(a, b, c) {
    return a + b + c;
}

// const add = _.curry(addFn);
const add = curry(addFn);

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)(3)); // 6
console.log(add(1)(2)(3)); // 6
console.log(add(1, 2)(3, 4)); // 6