import { DATA,NEXT_PAGE,DELET_ELEMENT,EDIT_TITLE, TEXT } from './TypeName.js';

const taskData = (serverData) => ({ type : DATA, payload : serverData})
const taskChangPage = (p) => ({type : NEXT_PAGE , payload : p})
const taskDelet = (id) => ({type : DELET_ELEMENT , payload : id })
const taskEdit = (text,id) => ({type : EDIT_TITLE, payload : text, id : id}) 
const taskText = (text) => ({type : TEXT , payload : text})

export { taskData,taskChangPage,taskDelet,taskEdit,taskText }