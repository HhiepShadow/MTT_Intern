function translatePigLatin(str) {
  return str.split('').reverse().join('') + "ay";
}

console.log(translatePigLatin("california"));
