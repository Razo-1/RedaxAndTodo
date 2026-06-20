import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { API } from "../../../../API"
import { taskChangPage } from "../../../../Store/ServerData/constructorTypr"

function Pagination(){

    let {pag} = useSelector((state) => state.paginationArray)
    let dispatch = useDispatch()
    let [page,setPage] = useState([])

    useEffect(() => {
        API.pagTodo(dispatch)
        setPage(Array.from({length : Math.floor(pag.length / 10) - 1}, (_,ind) => ind + 1))
    },[pag.length])
    
    
    let changPage = (num) => {
        dispatch(taskChangPage(num))
    }

    return(
        <div>
            {page.map(el => <button onClick={() => changPage(el)} key={el}>{el}</button>)}
        </div>
    )
}

export { Pagination }