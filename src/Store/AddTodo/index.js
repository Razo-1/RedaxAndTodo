import { NEW_TODO,NEW_TEXT } from "./myTodoList"
import { IsThisInAccordanceWithTheRule } from '../../Utils'

const initTodo = {
    text : '',
    mytodo : []
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
        default : 
        return state
    }
}

export { manulaReducer }