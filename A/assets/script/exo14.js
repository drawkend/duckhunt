function randomiser(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function porc(){
    let ret = 0;
    let pates = 0;
    let queue = 0;
    let oreille = 0;
    let oeil = 0;

    while (!(pates >= 4 && queue >= 1 && oreille >= 1 && oeil >= 1)){
        ret ++;
        let rd = randomiser(1,7);
        if (rd === 1 || rd === 2 || rd === 3){
            pates++;
        }else if (rd === 4){
            queue ++;
        }else if (rd === 5){
            oreille++;
        }else{
            oeil ++;
        }
    }
    return ret;
}

console.log(porc());