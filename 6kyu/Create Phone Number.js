function createPhoneNumber(numbers){
  let phnum = "("
  if (numbers.length < 10) {return false}
  numbers.splice(3, 0, ") ")
  numbers.splice(7, 0, "-")
  for (let i = 0; i < numbers.length; i++) {
      let number = numbers[i].toString()
      phnum += number
  } return phnum
}

// https://www.codewars.com/kata/525f50e3b73515a6db000b83
