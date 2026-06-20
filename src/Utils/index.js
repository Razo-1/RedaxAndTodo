import { useEffect } from "react"

function IsThisInAccordanceWithTheRule(mytodo,text){
    
    if(text.trim()){
        return [...mytodo,{ id : Date.now() , title : text}]
    }
    return mytodo
}   

function Delelem(arr,id){
    return arr.filter(el => el.id !== id)
}

function editText(arr,id,text){
    console.log(text);
    
    if(text.trim() && id){
        for(let i = 0 ;i < arr.length ;i++){
        if(arr[i].id === id){
            arr[i].title = text
        }
        }
    }  
    return arr
}

export { IsThisInAccordanceWithTheRule,Delelem,editText }

