function checkPalindrome(inputString) {
  let reversed = inputString.split('').reverse().join('');
  return inputString === reversed;
}
