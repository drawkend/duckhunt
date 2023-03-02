function avg(a){
    let ret = 0;
    a.array.forEach((i) => {
        ret += i;
    });
    ret /= length(a);
    return ret;
}

