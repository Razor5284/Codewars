function isLeapYear(year) {
  if (year % 4 === 0){
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}

// https://www.codewars.com/kata/526c7363236867513f0005ca