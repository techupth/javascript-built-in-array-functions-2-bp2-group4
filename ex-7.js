function isPalindrome(string) {
  // Start coding here
  let stringConvert = string.split('').reverse().join('');
  return stringConvert === string;
}
//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false