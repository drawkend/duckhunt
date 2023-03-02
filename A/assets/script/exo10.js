function reverse(text){
    let ret = "";
    for(i = text.length;i >=0;i--){
        ret+= text.charAt(i);
    }
    return ret;
}
console.log(reverse("salut"));