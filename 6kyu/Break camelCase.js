// https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
  string = string.split("")
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      string.splice(i, 0, " ")
      i++
    }
  } return string.join("")
}
