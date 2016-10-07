const twoSum = (nums, target) => {
  let obj = {}, otherVal, output = [];

  nums.map((val, i)=>
    (target - val in obj) ? output = [...output, obj[target - val], i] : obj[val] = i);
  return output;
};
