const sortTransformedArray = (nums, a, b, c) => {
  let output = [];
  nums.forEach(val => output.push(a * (val * val) + (b * val) + (c)));
  output.sort( (a, b)=> a - b );
  return output;
};
