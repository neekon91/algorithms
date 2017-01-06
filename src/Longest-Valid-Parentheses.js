const longestValidParentheses = s => {
  let last = -1, stack = [], output = 0;

  [...s].map((val, index)=> {
    if (val === '(') {
      stack.push(index);
    } else {
      if (0 === stack.length) {
        last = index;
      } else {
        stack.pop();
        if (0 === stack.length) {
          output = Math.max(index - last, output);
        } else {
          output = Math.max(index - stack[stack.length - 1], output);
        }
      }
    }
  });
  return output;
};
