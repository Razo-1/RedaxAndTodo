import { PAGINATION } from "./typePap"

let pagState = {
    pag : []
}

let PagReducer = (state = pagState , action) => {
    switch(action.type){
        case PAGINATION : 
        return {
            ...state,
            pag : action.payload
        }
        default : 
        return state
    }
} 

export { PagReducer }