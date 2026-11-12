import React,{useState} from 'react'

const Component2 = () => {
  const [count,setCount] = useState(0)
  function increment(){
    setCount(count+1)
  }
  console.log("Component 2 rendered");
  
  return (
    <>
        <h1>This is component 2</h1>
        <button onClick={increment}>Click</button>
    </>
  )
}

export default React.memo(Component2)