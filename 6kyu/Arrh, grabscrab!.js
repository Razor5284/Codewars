// https://www.codewars.com/kata/52b305bec65ea40fe90007a7

function grabscrab(anagram, dictionary) {
  let output = []
  for (let j = 0; j < dictionary.length; j++) {
    let count = 0
    let word = dictionary[j].split("")
    for (let i = 0; i < anagram.length; i++) {
      if (word.includes(anagram[i])) {
        count++
        word.splice(word.indexOf(anagram[i]), 1)
      }
    }
    if (count === anagram.length) output.push(dictionary[j])
  } 
  return output
}