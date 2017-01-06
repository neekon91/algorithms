const letterCombinations = (digits, res = []) => {

  const TP = {
    2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'
  };

  if (digits.length === 0){
    return [];
  }
  if (digits.length === 1) {
    return [...TP[digits]];
  }

  [...TP[digits[0]]].forEach(val=>
  letterCombinations(digits.slice(1)).forEach(val2 =>
  res.push(val + val2)));

  return res;
};
