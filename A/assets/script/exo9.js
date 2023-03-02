function add_fe(text){
    let voyelle = ["a","e","i","o","u","y"];
    let ret = ""
    for(i=0;i<text.length;i++){
        if(voyelle.includes(text.charAt(i))){
            ret+= text.charAt(i) + "fe" + text.charAt(i);
        }else{
            ret+= text.charAt(i);
        }
    }
    return ret;
}

console.log(add_fe("Chat"));