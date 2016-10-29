const combinationSum = (candidates, target, cur = [], output = []) => {
  candidates.sort((a, b) => a - b);
  const sub = (candidates, target, init, output, cur) =>{
    if (target === 0)
      return output.push(cur.slice());

    for (let i = init; i < candidates.length; i++) {
      if (candidates[i] > target) break;
      sub(candidates, target - candidates[i], i, output, cur = [...cur, candidates[i]]);
      cur.pop();
    }
  };
  sub(candidates, target, 0, output, cur);
  return output;
};
