const romes = {'I':1, 'IV':4, 'V':5, 'IX':9, 'X':10,'XL':40,'L':50, 'XC':90, 'C':100, 'CD':400, 'D':500, 'CM':900, 'M':1000};
const romanToInt = s =>
  [...s].reduce((memo, val, i)=>
    memo += (romes[s[i+1]] > romes[val]) ? -romes[val]: +romes[val], 0);

// solution 2
// ===================
const Romes = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const romanToInt = RN => {
  let sol = 0;
  if(!RN.length) return 0;
  for (let i = RN.length - 1; i >= 0; i--) {
    (Romes[RN[i+1]] > Romes[RN[i]]) ?
      sol -= Romes[RN[i]]:sol += Romes[RN[i]];
  }
  return sol  ? sol : "null";
}
