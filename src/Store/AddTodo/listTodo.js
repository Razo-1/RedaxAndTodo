import { NEW_TODO,NEW_TEXT } from "./myTodoList"

const taskTodo = () =>  ({ type : NEW_TODO})
const taskText = (text) => ({ type : NEW_TEXT, payload : text})

export { taskTodo,taskText }