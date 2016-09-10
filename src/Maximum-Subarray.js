const maxSubArray = nums => {
  let sum = 0,
  max = -Infinity;
  nums.forEach(val => {
      sum += val;
      max = Math.max(sum, max);
      if(sum < 0){
          sum = 0;
      }
  });
  return max;
};
