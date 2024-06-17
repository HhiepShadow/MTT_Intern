function titleCase(str) {
  let newStr = "";
  let strSplited = str.split(' ');
  for(let i = 0; i < strSplited.length; i++){
    strSplited[i] = strSplited[i].toLowerCase().split('').map((char, index) => {
      return index === 0 ? char.toUpperCase() : char
    }).join('');
    
    newStr += strSplited[i] + " ";
  }
  return newStr;
}

let str = titleCase("i'm a little tea pot");
console.log(str);