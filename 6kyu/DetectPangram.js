// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/ 

function isPangram(string){
    if (string.Length < 25) return false
    
    let alphabet = "abcdefghijklmnopqrstuvwxyz"

    for (let c of alphabet) {
      if (string.toLowerCase().includes(c)) {continue}
      else return false
    }
    return true
}
