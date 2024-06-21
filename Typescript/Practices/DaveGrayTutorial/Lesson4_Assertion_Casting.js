// Convert to more or less specific:
var a = 'hello';
var b = a; // less specific
var c = a; // more specific
var d = 'world';
var e = 'world';
var addOrConcat = function (a, b, c) {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
var myConcat = addOrConcat(2, 2, 'concat');
var myAdd = addOrConcat(2, 2, 'add');
console.log(myConcat);
console.log(myAdd);
