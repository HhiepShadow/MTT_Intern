function bouncer(arr) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
      if (arr[i] !== "" && arr[i] !== null && arr[i] !== 0 && arr[i] !== false && arr[i] !== undefined) {
        if (typeof arr[i] === 'boolean' || typeof arr[i] === 'string' || (typeof arr[i] === 'number' && !isNaN(arr[i])) || typeof arr[i] === 'object'){
            newArr.push(arr[i]);
        }
    }
  }
  return newArr;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));

console.log(Math.floor(13 / 3));