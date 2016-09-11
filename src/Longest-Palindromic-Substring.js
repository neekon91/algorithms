"use strict"

const longestPalindrome = s => {
  for (let len = s.length; len > 0; len--) {
    for (let index = 0; index <= s.length - len; index++) {
      let output = s.substr(index,len);
      if (output.split('').reverse().join('') === output) {
        return output;
      }
    }
  }
}
