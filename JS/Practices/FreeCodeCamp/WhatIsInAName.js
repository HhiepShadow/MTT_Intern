function whatIsInAName(collection, source) {
  const collectionMatches = [];

  for (let i = 0; i < collection.length; i++) {
    let foundMismatch = false;

    for (const sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        foundMismatch = true;
      }
    }
    if (!foundMismatch) {
      collectionMatches.push(collection[i]);
    }
  }
  return collectionMatches;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))