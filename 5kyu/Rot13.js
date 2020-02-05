// https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message){
  let output = ""
  for (let i = 0; i < message.length; i++) {
    let code = message.charCodeAt(i)
    let c = message[i];
    if ((code >= 65) && (code <= 90)) c = String.fromCharCode(((code - 65 + 13) % 26) + 65)
    else if ((code >= 97) && (code <= 122)) c = String.fromCharCode(((code - 97 + 13) % 26) + 97)
    output += c
  } return output
}
