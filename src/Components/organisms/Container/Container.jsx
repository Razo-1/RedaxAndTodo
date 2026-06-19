import { useEffect, useState } from 'react'
import { API } from '../../../API'
import { useDispatch,useSelector } from 'react-redux'

function Container() {

    let dispatch = useDispatch()
    let {serverData} = useSelector((state) => state.serverRecourse)
    useEffect(() => {
        API.getTodo(dispatch)
    },[])

    return(
        <div>
            {serverData.map(el => <p key={el.id}>{el.title}</p>)}
        </div>
    )
    
}

export { Container }