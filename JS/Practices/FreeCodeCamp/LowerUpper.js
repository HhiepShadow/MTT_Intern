function myReplace(str, before, after) {
  if(before.charAt(0) === before.charAt(0).toUpperCase()){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}

console.log(myReplace("I think we should look up there", "up", "Down"))