function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
      countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

// const arr = [];
// arr.push(5);
// arr.push(4);
// arr.push(3)
// console.log(arr);