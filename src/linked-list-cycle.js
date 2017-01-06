const hasCycle = (linkedList, double) => {
  double = double ? double : linkedList.next;

  if (linkedList === double){
    return true;
  } else if (linkedList.next === null || double.next === null){
    return false;
  } else {
    return hasCycle(linkedList.next, double.next.next);
  }

};

// solution 2
// ==============
const hasCycle = (linkedList) => {
  let gas = true, fast = linkedList;
  let slow = linkedList;
  while (fast = fast.next) {
    if (fast === slow) return true;
    slow = gas ? slow : slow.next;
    gas = !gas;
  }
  return false;
};

// solution 3
// ==============
const hasCycle = head => {
  if(!head) return false;
  if(head.prev) return head.prev;
  else{
      head.prev = true;
      return hasCycle(head.next);
  }
};
