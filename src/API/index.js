import axios, { create } from "axios";
import { taskData, taskDelet, taskEdit } from "../Store/ServerData/constructorTypr";
import { pagTask } from '../Store/PaginationList/pagList'

let base = create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})
const API = {
    getTodo(dispatch,page = 10){
        base.get(`/todos?_start=${page}&_limit=10`)
        .then(res => dispatch(taskData(res.data)))
    },
    pagTodo(dispatch){
        base.get(`/todos`)
        .then(res => dispatch(pagTask(res.data)))
    },
    deletTodo(dispatch,id){
        base.delete(`/todos/${id}`)
        .then(res => {
            dispatch(taskDelet(id))
            return res.data
        })
    },
    editTodo(dispatch,id){
        base.patch(`/todos/${id}`)
        .then(res => {
            dispatch(taskEdit(id))
            return res.data
        })
    }

}

export { API }