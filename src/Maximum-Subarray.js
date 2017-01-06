const maxSubArray = nums =>
  nums.reduce((memo, val) => {
    if(memo.sum < 0){
      memo.sum = 0;
    }
    memo.sum += val;
    memo.max = Math.max(memo.sum, memo.max);
    return memo;
  }, {max: -Infinity, sum: 0}).max;
