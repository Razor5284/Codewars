function alphabetPosition(str) {
  console.log(str.length);
  let sol = [];
  for(let i = 0; i < str.length; i++) {
    if(str[i].charCodeAt(0) - 64 > 0 && str[i].charCodeAt(0) - 64 < 27) {
      sol.push(str[i].charCodeAt(0) - 64);
    }
    if(str[i].charCodeAt(0) - 96 > 0 && str[i].charCodeAt(0) - 96 < 27) {
      sol.push(str[i].charCodeAt(0) - 96);
    }
  }

  return sol.join(' ');
}

// https://www.codewars.com/kata/546f922b54af40e1e90001da
