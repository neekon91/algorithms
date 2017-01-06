const combinationSum2 = (candidates, target, output = []) => {
  candidates.sort();
  const sub = (target, combo, index) => {
    if (target === 0)
      output = [...output, combo.slice()];

    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1] || candidates[i] > target) {
        continue;
      }
      combo.push(candidates[i]);
      sub(target - candidates[i], combo, i + 1);
      combo.pop();
    }
  }
  sub(target, [], 0);
  return output;
};

// const combinationSum2 = (candidates, target, output = []) => {
//   candidates.sort();
//   const sub = (target, item, index) => {
//     if (target < 0)
//       return;
//
//     if (target === 0)
//       output.push(item.slice());
//
//     for (let i = index; i < candidates.length; i++) {
//       if (i > index && candidates[i] === candidates[i - 1]) {
//         continue;
//       }
//       item.push(candidates[i]);
//       sub(target - candidates[i], item, i + 1);
//       item.pop();
//     }
//   }
//   sub(target, [], 0);
//   return output;
// };
