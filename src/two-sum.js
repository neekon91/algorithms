const twoSum = (nums, target) => {
  let obj = {}, otherVal, solution = [];

  nums.map((val, i)=>{
    otherVal = target - val;
    if(otherVal in obj){
      solution.push(obj[otherVal], i);
    } else {
      obj[val] = i;
    }
  });
  return solution;
};
