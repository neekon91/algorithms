const reverseList = head => {
  if (head === null || head.next === null)
    return head;

  let nxtH = head.next;
  head.next = null;
  let newHead = reverseList(nxtH);
  nxtH.next = head;

  return newHead;
};
