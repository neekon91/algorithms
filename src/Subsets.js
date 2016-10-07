const subsets = (nums, output = []) => {
  nums.sort((a, b) => a - b);

  const sub = (output, start, end, array, nums) => {
    output.push(array);
    let index = start;
    while (index <= end) {
        array.push(nums[index]);
        sub(output, index + 1, end, array.concat(), nums);
        array.pop();
        index++;
    }
  };
  sub(output, 0, nums.length - 1, [], nums);
  return output;
};
