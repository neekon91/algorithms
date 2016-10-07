const isPowerOfTwo = n => {
    while(n >= 2){
        if(n % 2 !== 0){
            break;
        }
        n = n/2;
    }
    return n === 1;
};
