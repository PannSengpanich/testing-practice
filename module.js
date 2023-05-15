export function capitalize(str = "") {
  const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalizedStr;
}
export function reverseString(str = "") {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr;
}
export function Calculator() {
  function sum(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function divide(a, b) {
    return a / b;
  }
  function multiply(a, b) {
    return a * b;
  }
  return { sum, subtract, divide, multiply };
}
export function caesarCipher(s, factor) {
  let sArr = s.split("");
  let newArr = [];
  for (let letter of s) {
    if (/[A-Z]/.test(letter)) {
      letter = letter.toLowerCase();
      let code = letter.charCodeAt(0);
      code = ((code - 32 + factor) % 26) + 65;
      letter = String.fromCharCode(code);
      newArr.push(letter);
    } else if (/[a-z]/.test(letter)) {
      let code = letter.charCodeAt(0);
      code = ((code - 97 + factor) % 26) + 97;
      letter = String.fromCharCode(code);
      newArr.push(letter);
    } else {
      newArr.push(letter);
    }
  }
  newArr = newArr.join("");
  return newArr;
}
export function analyzeArray(arr) {
  arr = arr.sort((a, b) => a - b);
  let average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  let min = arr[0];
  let max = arr[arr.length - 1];
  let length = arr.length;
  let object = { average, min, max, length };
  return object;
}
