import { manulaReducer } from './AddTodo'
import { PagReducer } from './PaginationList';

import { dataReducer } from './ServerData'
import { combineReducers, createStore } from "redux";


let rootReducer = combineReducers({
    addNewTodo : manulaReducer,
    serverRecourse : dataReducer,
    paginationArray : PagReducer
})

const store = createStore(rootReducer)


export { store }

