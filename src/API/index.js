import axios, { create } from "axios";
import { taskData } from "../Store/ServerData/constructorTypr";

let base = create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})
const API = {
    getTodo(dispatch){
        base.get(`/todos?_limit=10`)
        .then(res => dispatch(taskData(res.data)))
    }

}

export { API }