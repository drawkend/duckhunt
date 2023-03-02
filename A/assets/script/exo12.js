function scrabble(text){
    let onepoint = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
    let twopoints= ["d", "g"];
    let threepoints= ["b", "c", "m", "p"];
    let fourpoints= ["f", "h", "v", "w", "y"];
    let fivepoints= ["k"];
    let eightpoints= ["j", "x"];
    let tenpoints= ["q", "z"];
    let ret = 0;
    for (i=0;i<text.length;i++){
        if (onepoint.includes(text[i])){
            ret += 1;
        }else if (twopoint.includes(text[i])){
            ret += 2;
        } else if (threepoint.includes(text[i])){
            ret += 3;
        } else if (fourpoint.includes(text[i])){
            ret += 4;
        } else if (fivepoint.includes(text[i])){
            ret += 5;
        } else if (eightpoint.includes(text[i])){
            ret += 8;
        } else if (tenpoint.includes(text[i])){
            ret += 10
        }
    }
    return ret;
}

console.log(scrabble("salut"));