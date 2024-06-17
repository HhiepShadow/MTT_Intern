["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

function makeCounter() {
  let count = 0;

  return function() {
    return ++count;
  };
}

let counter = makeCounter();
console.log(counter());