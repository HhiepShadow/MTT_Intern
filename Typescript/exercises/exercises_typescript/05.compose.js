function composeTS() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return function (arg) { return funcs.reduceRight(function (acc, func) { return func(acc); }, arg); };
}
function eatTS(developer) {
    console.log("".concat(developer.name, " is eating"));
    return developer;
}
function sleepTS(developer) {
    console.log("".concat(developer.name, " is sleeping"));
    return developer;
}
function codeTS(developer) {
    console.log("".concat(developer.name, " is coding"));
    return developer;
}
var developerTS = {
    name: 'Peter',
    alive: true
};
var liveTS = composeTS(sleepTS, codeTS, eatTS);
liveTS(developerTS);
