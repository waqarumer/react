import { useState } from 'react'

import './App.css'

function App() {

  // following is the changing the state

    let [counter,setCounter] = useState(10)
 
    //let counter = 15

    const addValue = () => {
      //console.log('value added',Math.random());

      counter = counter + 1
      //console.log("clicked",counter);

      setCounter(counter)
    }
    const removeValue = ()=>{
      if(counter > 1){ // condition for not less then 
        setCounter(counter -1)
      }
      
    }

  return (
    <>
      <h1>Counter with React</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
