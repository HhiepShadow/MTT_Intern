let myName = "Alice";

// myName = 2; // Error

function printAll(strs: string | string[] | null) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (const str of strs) {
                console.log(str);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        } else {
            
        }
    }
}