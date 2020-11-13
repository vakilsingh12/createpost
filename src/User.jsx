import React from 'react'
const User=(props)=>{
  return <div><li>
    <span>{props.children} | {props.age}</span>&nbsp;&nbsp;&nbsp;
    <input onChange={props.inputfield} value={props.children}/>
    <button onClick={props.delevent}>Delete</button>
    </li><br/>
    </div>
}
export default User