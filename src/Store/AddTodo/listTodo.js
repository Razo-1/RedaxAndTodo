import { NEW_TODO,NEW_TEXT } from "./myTodoList"

const taskTodo = () =>  ({ type : NEW_TODO})
const taskTextAdd = (text) => ({ type : NEW_TEXT, payload : text})
const taskDelet = (id) => ({type : DELET_ELEMENT , payload : id })
const taskEdit = (text,id) => ({type : EDIT_TITLE, payload : text, id : id}) 
const taskText = (text) => ({type : TEXT , payload : text})


export { taskTodo,taskTextAdd,taskDelet,taskEdit,taskText}