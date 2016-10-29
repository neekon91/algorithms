const subsetsWithDup = (nums, output = [], combo = [], obj = {}) =>{
  nums.sort((a, b) => a - b);
  (dfs = (index, nums) => {
    if (!obj[combo.toString()]) {
      obj[combo.toString()] = combo;
      output = [...output, combo.slice()];
    }
    for (let i = index; i < nums.length; i++) {
      combo = [...combo, nums[i]];
      dfs(i + 1, nums);
      combo.pop();
    }
  })(0, nums);
  return output;
};
