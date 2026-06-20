import { NEW_TODO,NEW_TEXT,DELET_ELEMENT,TEXT,EDIT_TITLE } from "./myTodoList"
import { IsThisInAccordanceWithTheRule,Delelem,editText } from '../../Utils'



const initTodo = {
    text : '',
    mytodo : [],
    deletId : null,
}

const manulaReducer = (state = initTodo,action) => {
    switch(action.type){
        case NEW_TEXT : 
        return {
            ...state,
            text : action.payload
        }
        case NEW_TODO : 
        return {
            ...state,
            mytodo : IsThisInAccordanceWithTheRule(state.mytodo,state.text),
            text : ''
        }
        case DELET_ELEMENT : 
        return {
            ...state,
            deletId : action.payload,
            mytodo : Delelem(state.mytodo,action.payload)
        }
        case TEXT : 
        return {
            ...state,
            text : action.payload
        }
        case EDIT_TITLE : 
        return {
            ...state,
            mytodo: editText(state.mytodo,action.id,action.payload),
            text : ''
        }
        default : 
        return state
    }
}

export { manulaReducer }