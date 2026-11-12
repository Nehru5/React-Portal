import React, { useState } from 'react'
import Toast from "./components/Toast"
const App = () => {
  const [message, setMessage] = useState("")
  function cartMessage(){
    setMessage("Item Added")
    setTimeout(()=>{
      setMessage("")
    },6000)
  }
  return (
    <>
      <button onClick={cartMessage}>Add to Cart</button>

      {message && <Toast a = {message}/>}
    </>
  )
}

export default App