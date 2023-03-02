function shorter(text){
    let ret;
    for(i=0;i<15;i++){
        ret += text.charAt(i);
    }
    ret += "..."
}