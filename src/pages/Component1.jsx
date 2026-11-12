import React,{useState} from 'react'
import Component2 from './Component2'

const Component1 = () => {
  const [count, setCount] = useState(0)
  function increment(){
    setCount(count+1)
  }
  console.log("Component 1 rendered");
  
  return (
    <>
    <h1>Component 1</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Click</button> <hr />
      <Component2/>
    </>
  )
}
export default React.memo(Component1)