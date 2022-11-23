import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



function App(){
  let number  = 0;
  const [counter, setCounter] = useState(number);
  const [name, setName] = useState("Name Unknown")

  return (
    <div className="App">

      <button onClick={function(){setCounter(function(prevCounter){
       return prevCounter - 1
      })}}> - </button>
      <h1>{counter}</h1>
      <button onClick={function(){setCounter(function(prevCounter){
       return prevCounter + 1
      })}}> + </button>
    </div>
  )
}

export default App
