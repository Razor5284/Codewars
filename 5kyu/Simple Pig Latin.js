// https://www.codewars.com/kata/520b9d2ad5c005041100000f/
function pigIt(str){
  str = str.split(" ")
  let output = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "!" || str[i] === "?") {
      output += str[i] 
      continue
    }
    let letter = str[i][0] 
    let word = str[i].toString().slice(1, str[i].length)
    output += word + letter + "ay "
  }
  return output.trim()
}

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/