const subsets = (nums, output = []) => {
  
  (sub = (output, start, combo, nums) => {
    output.push(combo);
    let ind = start;
    while (ind <= nums.length - 1) {
      combo = [...combo, nums[ind]];
      sub(output, ind + 1, combo.concat(), nums);
      combo.pop();
      ind++;
    }
  })(output, 0, [], nums);

  return output;
};
