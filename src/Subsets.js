const subsets = (nums, output = []) => {

  (sub = (output, start, combo, nums) => {
    output.push(combo);
    while (ind <= nums.length - 1) {
      combo = [...combo, nums[start]];
      sub(output, start + 1, combo.concat(), nums);
      combo.pop();
      start++;
    }
  })(output, 0, [], nums);

  return output;
};
