const combine = (n, k, result = []) => {
  (sub = (start, combo, k) => {
      if (combo.length === k) {
          result.push(combo);
          return;
      }

      for (let i = start; i <= n; i++) {
          combo.push(i);
          sub(i + 1, combo.concat(), k);
          combo.pop();
      }
  })(1, [], k)

  return result;
};
