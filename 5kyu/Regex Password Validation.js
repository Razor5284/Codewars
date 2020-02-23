// https://www.codewars.com/kata/52e1476c8147a7547a000811/

function validate(password) {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z])[A-Za-z\d]{6,}$/.test(password);
}