let mergeSort = arr => (arr.length < 2) ? arr :
  merge(mergeSort(arr.slice(0,Math.floor(arr.length /2))),
        mergeSort(arr.slice(Math.floor(arr.length /2))));
let merge = (l,r, solution = [])=> {
  while (l.length && r.length)
    solution.push(r[0] > l[0] ? l.shift() : r.shift());
  return solution.concat(l.length? l : r);
}
