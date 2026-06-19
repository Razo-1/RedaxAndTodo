import { DATA } from './TypeName'

const dataState = {
    serverData : []
}

const dataReducer = (state = dataState, action) => {
    switch(action.type){
        case DATA : 
        return {
            ...state,
            serverData : action.payload
        }
        default : 
        return state
    }
}

export { dataReducer }