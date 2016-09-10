const missingNumber = nums => {
  let output = 0;
  nums.forEach( val => output += val);

  return nums.length*(1+nums.length)/2 - output;
};
