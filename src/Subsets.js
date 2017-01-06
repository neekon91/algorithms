const subsets = (nums, output = [[]]) => {

  const sub = (combo, str) => str.map( (val, i) => {
    output = [...output, (combo.concat(val))];
    sub(combo.concat(val), str.slice(i+1))
  })

  sub([], nums);
  return output;
};

// ================
// second solution
// ================

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
