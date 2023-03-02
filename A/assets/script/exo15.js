function randomiser(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function yahtzee(){
    let tab = [];
    for(i=0;i<5;i++){
        tab.push(randomiser(1,7));
    }
    let is_grosse_suite = big_suite(tab);
    let is_petite_suite = small_suite(tab);
    let is_yatzhee = yams(tab);
    let is_square = equals(tab,4);
    let is_full = is_full(tab);
    let is_brelan= equals(tab,3);
    if (is_grosse_suite){
        console.log("grosse suite : OUI");
    }else{
        console.log("grosse suite : Non");
    }
    if (is_petite_suite){
        console.log("petite suite : OUI");
    }else{
        console.log("petite suite : Non");
    }
    if (is_yatzhee){
        console.log(" yatzeh : OUI");
    }else{
        console.log(" yatzeh : Non");
    }
    if (is_square){
        console.log(" Carré : OUI")
    }else{
        console.log(" Carré : Non")
    }
    if (is_full){
        console.log(" full : OUI")
    }else{
        console.log(" full : non")
    }
    if (is_brelan){
        console.log(" brelan : OUI")
    }else{
        console.log(" brelan : non")
    }
}

function equals(tab,num){
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    for (i=0;i<tab.length;i++){
        if (tab[i]=== 1){
            one++;
        }
        if (tab[i]=== 2){
            two++;
        }
        if (tab[i]=== 3){
            three++;
        }
        if (tab[i]=== 4){
            four++;
        }
        if (tab[i]=== 5){
            five++;
        }
    }
    if ((one === num || two === num ||three === num||four === num||five===num)){
        if (one === num){
            return [true,1];
        }
        if (two === num){
            return [true,2];
        }
        if (three === num){
            return [true,3];
        }
        if (four === num){
            return [true,4];
        }
        if (five === num){
            return [true,5];
        }
    }
    return false;
}


function is_full(tab){
    let not = equals(tab,3)[1]
    if (equals(tab,3)[0]){
        for (i=0; i<5;i++){
            if ((!i===not)&&equals(tab,2)[0]){
                return true;
            }
        }
    }
    return false;
}

function big_suite(tab){
    let preced = tab[0];
    for (i=1;i<5;i++){
        if (preced===(tab[i]-1)){
            console.log(preced, tab[i]);
            preced = tab[i];
        }else{
            return false;
        }
    }
    return true;
}

function small_suite(tab){
    for (i=0; i<3; i++){
        if (tab[i] === tab[i+1] && tab[i] === tab[i+2]){
            return true;
        }
    }
    return false;
}

function yams(tab){
    if (tab === [tab[0],tab[0],tab[0],tab[0],tab[0]]){
        return true;
    }
    return false;
}

