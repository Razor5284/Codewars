// https://www.codewars.com/kata/55c45be3b2079eccff00010f/
function order(words){
  words = words.split(" ")
  if (words.length === 0) return ""
  let newWords = [], array = []
  for (let i = 0; i < words.length; i++) {
    newWords.push(parseInt(words[i].match(/[0-9]/g) - 1))
  }
  for (let i = 0; i < words.length; i++) {
    array.push(words[newWords.indexOf(i)])
  }
  return array.join(" ")
}