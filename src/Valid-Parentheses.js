const isValid = s => {
  const brace = { '{':'}', '[':']', '(':')' };
  let stack = [];
  for(let i = 0; i < s.length; i++){
    let cur = s[i];
    if(brace[cur]){
      stack.push(cur);
    } else if( cur === '}' || cur === ']' || cur === ')' ){
      if( brace[stack.pop()] !== cur ){
        return false;
      }
    }
  }
  return stack.length === 0;
};

// both work on is just condensed to look nice

const isValid = s => {
  const brace = {'{':'}','[':']','(':')'},shelf = [];
  for (let i = 0; i < s.length; i++){
    if(s[i] in brace) shelf.push(s[i]);
     if((s[i]===']'||s[i] ==='}'||s[i]===')')&&s[i] !== brace[shelf.pop()])
      return false;
  }
  return !(shelf.length !== 0);
}
