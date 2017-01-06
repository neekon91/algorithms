const missingNumber = nums =>
  nums.length*(1+nums.length)/2 - nums.reduce((memo, val) => memo += val, 0);
