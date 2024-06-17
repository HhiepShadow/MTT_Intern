function chunkArrayInGroups(arr, size) {
  const newArr = [];
  let index = 0;
  for(let i = 0; i < Math.floor(arr.length / size); i++){
    const newSubArr = [];
    for(let k = 0; k < size; k++){
      newSubArr.push(arr[index]);
      index++;
    }
    newArr.push(newSubArr);
    }
    console.log(index);
  const newSub = [];
  while(index < arr.length){
      newSub.push(arr[index]);
      index++;
    }
    if (newSub.length !== 0) {
        newArr.push(newSub);
    }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));