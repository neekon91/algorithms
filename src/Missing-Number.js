const missingNumber = nums => {
  var output = 0;
  nums.forEach( val => output += val);

  return nums.length*(nums.length + 1)/2 - output;
};
