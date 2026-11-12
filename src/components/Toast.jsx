import React from 'react'
import ReactDOM from "react-dom"
const Toast = (props) => {
  return ReactDOM.createPortal(<div style={{backgroundColor:"black", color:"white", width:"200px", padding:"2px", position:"fixed", top:"10px", right:"0px"}}>
    <h2>{props.a}</h2>
  </div>,document.getElementById("portal"))
}

export default Toast