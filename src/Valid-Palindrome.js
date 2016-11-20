const isPalindrome = s => {
  s = s.replace(/[\W]/g, '').toLowerCase();
  var s2 = s.split('').reverse().join('');
  return s === s2;
};
