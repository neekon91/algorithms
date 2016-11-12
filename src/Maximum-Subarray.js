const maxSubArray = (nums, sum = 0)=>
  nums.reduce((max, val) => {
    if(sum < 0){
      sum = 0;
    }
    sum += val;
    max = Math.max(sum, max);
    return max;
  }, -Infinity);
