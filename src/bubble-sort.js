const bubbleSort = array => {
  for(z of array){
    let swapped = false;
    array.forEach((next, z)=>{
      if(array[z - 1] > next){
        [array[z - 1], array[z]] = [array[z], array[z - 1]]
        swapped = true;
      }
    })
    if (!swapped){
      break;
    }
  }
  return array;
}
