function toCamelCase(str){
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "-" || str.charAt(i) === "_") {
      str = str.replace(str.charAt(i+1), str.charAt(i+1).toUpperCase())
    }
  }
  str = str.replace(/\_|-/g, '')
  return str
}

// https://www.codewars.com/kata/517abf86da9663f1d2000003
