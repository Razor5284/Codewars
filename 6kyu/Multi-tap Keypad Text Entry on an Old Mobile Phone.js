function presses(phrase) {
  phrase = phrase.toLowerCase()
  let presses = 0
  let letters = []
  letters.push([['a','d','g','j','m','p','t','w',' ','1'],1])
  letters.push([['b','e','h','k','n','q','u','x','0'],2])
  letters.push([['c','f','i','l','o','r','v','y'],3])
  letters.push([['s','z', '2','3','4','5','6','8'],4])
  letters.push([['7','9'],5])
  for (let i = 0; i < phrase.length; i++) {
    let j = 0
    let arrayNum = letters[j][0].indexOf(phrase.charAt(i))
    while (arrayNum < 0) {
      j++
      arrayNum = letters[j][0].indexOf(phrase.charAt(i))
    }
    presses += letters[j][0,[1]]
  } return presses
}

// https://www.codewars.com/kata/54a2e93b22d236498400134b
