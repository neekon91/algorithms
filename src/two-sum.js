const twoSum = (nums, target) => {
  let obj = {}, output = [];

  nums.forEach((val, i)=>
    (target - val in obj) ? output = [...output, obj[target - val], i] : obj[val] = i);
  return output;
};
