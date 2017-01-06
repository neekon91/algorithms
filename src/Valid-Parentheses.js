const isValid = (s, stack = []) => {
  const brace = { '{':'}', '[':']', '(':')' };
  for(let i = 0; i < s.length; i++){
    if(brace[s[i]]){
      stack.push(s[i]);
    } else if(s[i].match(/}*\)*]*/) !== '' && brace[stack.pop()] !== s[i]){
      return false;
    }
  }
  return stack.length === 0;
};
