import { DATA } from './TypeName.js';

const taskData = (serverData) => ({ type : DATA, payload : serverData})

export { taskData }