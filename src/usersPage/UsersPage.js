import React from "react";
import { useDispatch, useSelector } from "react-redux";

function UsersPage(){
    const dispatch=useDispatch()
    const {title:value,paragraphs}=useSelector(state=>state)

    const changeInput=(event)=>{
        dispatch({
            type:"CHANGE_TITLE",
            payload:event.target.value
        })
    }

    return(
        <div>
            <h1>{value}</h1>
            <input onChange={changeInput} placeholder="name" value={value}/>
        <button onClick={()=>dispatch({type:"ADD_P",payload:value})}>add</button>
        {paragraphs.map((item,index)=><p key={index}>{item}</p>)}
        </div>
    )
}

export default UsersPage
