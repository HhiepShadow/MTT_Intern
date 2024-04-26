console.log(Boolean(false));
console.log(1 + '2' + 1);
console.log(true > false);

let height = null;
let width = null;
let area = height ?? (100 * width) ?? 50;
console.log(area);