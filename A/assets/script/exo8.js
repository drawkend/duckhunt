function valid(mdp){
    if (length(mdp) < 9){
        return false;
    }
    for (i=0;i<length(mdp);i++){
        if (mdp.charAt(i) === "@"){
            return true;
        }
    }
}