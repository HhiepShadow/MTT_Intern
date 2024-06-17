function uniteUnique(arr, ...args) {
    args = [].concat(...args);
    console.log(args);
  let newArr = [...arr];

  for(let i = 0; i < args.length; i++){
    if(newArr.indexOf(args[i]) < 0){
      newArr.push(args[i]);
    }
  }

  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));