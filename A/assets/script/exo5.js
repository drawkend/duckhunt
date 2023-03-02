function del_doublon(tab){
    for (i = 0; i < length(tab); i++){
        for (j=i; j<lenght(tab);j++){
            if(tab[i]===tab[j]){
                tab.splice(j);
            }
        }
    }
    return tab;
}