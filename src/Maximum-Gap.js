const maximumGap = (nums, solution = 0) =>
  (nums.sort((a,b)=> a - b).length < 2) ?
  0 : nums.reduce((sol, val, i) =>{
      if(nums[1+i] - val > sol){
        sol = nums[1+i] - val;
      }
      return sol;
    }, 0);
