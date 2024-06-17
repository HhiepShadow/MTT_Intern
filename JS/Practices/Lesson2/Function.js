// Tham số là 1 hàm
function showMsg(from, text = () => {
    console.log("Hello World");
}) {
    console.log(from + " " + text);
    debugger;
    console.log("Yes");
}

showMsg("S");

_ = 10;
console.log(_);