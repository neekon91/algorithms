const combine = (n, k, result = []) => {
  (sub = (start, combo, k) => {
    if (combo.length === k) {
      return result.push(combo);
    }

    for (let i = start; i <= n; i++) {
      combo.push(i);
      sub(i + 1, combo.concat(), k);
      combo.pop();
    }
  })(1, [], k)

  return result;
};
