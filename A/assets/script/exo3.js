function state(temp){
    if (temp >= 100){
        return "gazeu";
    }else if (temp <= 0){
        return "solide";
    }else{
        return "liquide";
    }
}