const subsetsWithDup = (nums, map = new Map()) => {
  nums.sort((a, b) => a - b);
  const sub = (left, combo) => {
    if(!map.get(combo.toString())){
      map.set(combo.toString(), combo)
    }
    left.forEach((val, i)=> sub(left.slice(i+1), combo.concat(val)))
  }
  sub(nums, []);
  return [...map.values()]
}

// ================
// second solution
// ================

const subsetsWithDup = (nums, output = [], combo = [], obj = {}) =>{
  nums.sort((a, b) => a - b);
  (dfs = index => {
    if (!obj[combo.toString()]) {
      obj[combo.toString()] = combo;
      output = [...output, combo.slice()];
    }
    for (let i = index; i < nums.length; i++) {
      combo = [...combo, nums[i]];
      dfs(i + 1);
      combo.pop();
    }
  })(0);
  return output;
};

// ================
// Third solution
// ================

const subsetsWithDup = (nums, combo = [], map = new Map()) =>{
  nums.sort((a, b) => a - b);
  const dfs = left => {
    if (!map.get(combo.toString())) {
      map.set(combo.toString(), combo.slice());
    }
    left.forEach((val, i) => {
      combo = [...combo, val];
      dfs(left.slice(i + 1));
      combo.pop();
    })
  }
  dfs(nums);
  return [...map.values()];
}
