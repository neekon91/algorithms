const permute = nums => {
  let output = [];
  const sub = (left, flow)=> {
    if (!left.length) {
      return output.push(flow);
    }
    left.map((num, i)=> {
      let R = left.slice(i + 1);
      let L = left.slice(0, i);
      sub(L.concat(R), flow.concat(num));
    });
  }
  sub(nums, []);
  return output;
};
