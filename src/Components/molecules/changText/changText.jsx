import { useDispatch, useSelector } from "react-redux"
import { taskText,taskEdit } from "../../../Store/ServerData/constructorTypr"
import { API } from "../../../API"


function ChangText({elem}){

    let dispatch = useDispatch()
    let { serverData,text } = useSelector((state) => state.serverRecourse)

    let handlChange = (e) => {
        e.preventDefault()
        API.editTodo(dispatch,elem[0].id)
        dispatch(taskEdit(text,elem[0].id))
    }

    return(
        <form onSubmit={(e) => handlChange(e)}>
            <input value={text} type="text" onChange={(e) => dispatch(taskText(e.target.value))}/>
            <button>edit</button>
        </form>
    )
}

export { ChangText }