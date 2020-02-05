function solution(roman){
  let final = 0
  for (let i = 0; i < roman.length; i++){
    if (roman[i] === "I") final += 1
    if (roman[i] === "V") final += 5
    if (roman[i] === "X") final += 10
    if (roman[i] === "L") final += 50
    if (roman[i] === "C") final += 100
    if (roman[i] === "D") final += 500
    if (roman[i] === "M") final += 1000
    if (roman.includes("IV")) final -= 1
  }
  return final
}

// https://www.codewars.com/kata/51b6249c4612257ac0000005
