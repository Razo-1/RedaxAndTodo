import { DATA,DELET_ELEMENT,NEXT_PAGE,EDIT_TITLE,TEXT } from './TypeName'
import { Delelem,editText } from '../../Utils'

const dataState = {
    page : 10,
    serverData : [],
    deletId : null,
    text : ''
}

const dataReducer = (state = dataState, action) => {
    switch(action.type){
        case NEXT_PAGE : 
        return {
            ...state,
            page : action.payload
        }
        case DATA : 
        return {
            ...state,
            serverData : action.payload
        }
        case DELET_ELEMENT : 
        return {
            ...state,
            deletId : action.payload,
            serverData : Delelem(state.serverData,action.payload)
        }
        case TEXT : 
        return {
            ...state,
            text : action.payload
        }
        case EDIT_TITLE : 
        return {
            ...state,
            serverData: editText(state.serverData,action.id,action.payload),
            text : ''
        }
        default : 
        return state
    }
}

export { dataReducer }