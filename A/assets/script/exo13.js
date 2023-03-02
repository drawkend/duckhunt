function randomiser(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function decrem(num){
    let rdm = getRandomInt(1,50);
    ret = 0;
    while(num >0){
        num -= rdm;
        ret ++;
    }
    return ret;
}