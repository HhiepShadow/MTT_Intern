function destroyer(arr, ...args) {
  let filterArr = [...args];
  let newArr = [];
  arr.forEach((elem, index) => {
    let check = true;
    for(let k of filterArr){
      if(k === elem){
        check = false;
      }
    }
    if (check === true) {
        newArr.push(elem);
    }
  })  
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

