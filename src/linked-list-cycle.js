const hasCycle = head => {
    if(!head) return false;
    if(head.prev){
        return head.prev;
    }else{
        head.prev = true;
        return hasCycle(head.next);
    }
};
