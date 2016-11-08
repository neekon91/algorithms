const subsets = (nums, output = []) => {

  (sub = (start, combo) => {
    output.push(combo);
    while (start <= nums.length - 1) {
      combo = [...combo, nums[start]];
      sub(start + 1, combo.concat());
      combo.pop();
      start++;
    }
  })(0, []);

  return output;
};
