import { useEffect, useState } from 'react'
import { API } from '../../../API'
import { useDispatch,useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { taskDelet } from '../../../Store/ServerData/constructorTypr';
import { ChangText } from '../../molecules'

function Container() {

    let [elem,setElem] = useState([])

    let dispatch = useDispatch()
    let {mytodo} = useSelector(state => state.addNewTodo)
    let {serverData,page} = useSelector((state) => state.serverRecourse)

     useEffect(() => {
        API.getTodo(dispatch,page)
    },[page])
    
    let handleDelete = (id) => {
        API.deletTodo(dispatch,id)
    }

    let edit = (data) => {
        console.log(data);
        setElem([data])
    }
    return(
        <div>
            {mytodo?.map(el => <div key={el.id}><p onClick={() => edit(el)}>{el.title}</p><div onClick={() => handleDelete(el.id)}><MdDelete /></div></div>)}
            {serverData.map(el => <div key={el.id}><p onClick={() => edit(el)}>{el.title}</p><div onClick={() => handleDelete(el.id)}><MdDelete /></div></div>)}
            <ChangText elem={elem}/>
        </div>
    )
    
}

export { Container }