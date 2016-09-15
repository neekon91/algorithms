const permute = nums => {
  let output = [];
  const sub = (left, flow)=> {
    if (!left.length) {
      return output.push(flow);
    }
    left.map((_, i)=> sub(left.slice(0, i).concat(left.slice(i + 1)), flow.concat(left[i])) );
  };
  sub(nums, []);
  return output;
};
