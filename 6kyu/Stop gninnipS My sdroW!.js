function spinWords(words){
  words = words.split(" ")
  for (let i = 0; i < words.length; i++)
    if (words[i].length >= 5) {
      words.splice(i, 1, words[i].split("").reverse().join(""))
    }
  return words.join(" ")
}

// https://www.codewars.com/kata/5264d2b162488dc400000001
