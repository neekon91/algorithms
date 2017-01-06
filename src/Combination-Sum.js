const combinationSum = (candidates, target, output = []) => {
  candidates.sort((a, b) => a - b);
  (sub = (target, init, cur) =>{
    if (target === 0)
      return output.push(cur.slice());

    while(init < candidates.length){
      if (candidates[init] > target) break;
      sub(target - candidates[init], init, cur = [...cur, candidates[init]]);
      cur.pop();
      init++;
    }
  })(target, 0, cur = []);
  return output;
};
