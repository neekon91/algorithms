const romanToInt = s => {
const romes = {'I':1, 'IV':4, 'V':5, 'IX':9, 'X':10,'XL':40,'L':50, 'XC':90, 'C':100, 'CD':400, 'D':500, 'CM':900, 'M':1000};
  let arr = s.split(''),
  sum = 0,
  temp;
  while(arr.length > 0){
    temp = arr[0].concat(arr[1]);
    if(romes[temp]){
      sum += romes[temp];
      arr = arr.slice(2);
    } else {
      sum += romes[arr[0]];
      arr = arr.slice(1);
    }
  }
  return sum;
};
