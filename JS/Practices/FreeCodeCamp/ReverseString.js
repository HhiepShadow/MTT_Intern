function findLongestWordLength(str) {
  const strSplited = str.split(' ');
  let max = 0;
  for(let i = 0; i < strSplited.length; i++){
    max = (strSplited[i].length > max) ? strSplited : max;
  }
  return max;
}

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
// const split = "The quick brown fox jumped over the lazy dog".split(" ");
// console.log(split.length)


// console.log("Congratulation".lastIndexOf("on"))

function confirmEnding(str, target) {
    const strSplited = str.split(' ');
    console.log(strSplited[strSplited.length - 1].lastIndexOf(target));
    if(strSplited[strSplited.length - 1].lastIndexOf(target) === -1) return false;
    return strSplited[strSplited.length - 1].lastIndexOf(target) + 1 === (strSplited[strSplited.length - 1].length - target.length + 1) ? true : false; 
}

console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));

