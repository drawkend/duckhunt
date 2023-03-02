function pangram(text){
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","."];
    for(i=0;i<text.length;i++){
        if (!alphabet.includes(text[i])){
            return false;
        }
    }
    return true;
}


console.log(pangram("the quick brown fox jumps over the lazy dog."))