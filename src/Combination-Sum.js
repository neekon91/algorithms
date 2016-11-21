const combinationSum = (candidates, target, output = []) => {
  candidates.sort((a, b) => a - b);
  (sub = (candidates, target, init, cur) =>{
    if (target === 0)
      return output.push(cur.slice());

    while(init < candidates.length){
      if (candidates[init] > target) break;
      sub(candidates, target - candidates[init], init, cur = [...cur, candidates[init]]);
      cur.pop();
      init++;
    }
  })(candidates, target, 0, cur = []);
  return output;
};
