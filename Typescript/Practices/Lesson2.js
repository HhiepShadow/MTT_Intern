var myName = "Alice";
// myName = 2; // Error
function printAll(strs) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var str = strs_1[_i];
                console.log(str);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
        else {
        }
    }
}
