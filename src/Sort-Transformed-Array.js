const sortTransformedArray = (nums, a, b, c) =>
  nums.reduce((output, val) => [...output, (a * (val * val) + (b * val) + (c))], [])
  .sort( (a, b)=> a - b );
