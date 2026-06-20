import { useDispatch,useSelector } from "react-redux"
import { taskTodo,taskTextAdd } from '../../../Store/AddTodo/listTodo.js'

function PanelTask(){

    let dispatch = useDispatch()
    let {text} = useSelector((state) => state.addNewTodo)

    let addTask = (e) => {
        e.preventDefault()
        dispatch(taskTodo())
    }

    return(
        <form onSubmit={(e) => addTask(e)}>
            <input value={text} onChange={(e) => dispatch(taskTextAdd(e.target.value))} type="text"/>
            <button>add</button>
        </form>
    )
}

export { PanelTask }