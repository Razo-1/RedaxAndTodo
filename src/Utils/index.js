function IsThisInAccordanceWithTheRule(mytodo,text){
    
    if(text.trim()){
        return [...mytodo,{ id : Date.now() , title : text}]
    }
    return mytodo
}   

export { IsThisInAccordanceWithTheRule }