import { manulaReducer } from './AddTodo'
import { dataReducer } from './ServerData'
import { combineReducers, createStore } from "redux";


let rootReducer = combineReducers({
    addNewTodo : manulaReducer,
    serverRecourse : dataReducer,
})

const store = createStore(rootReducer)


export { store }

