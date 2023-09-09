import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from '../User'
import Friends from '../Friends'

function App() {

  function handleClick(){
    alert('button clicked');
  }
  
  const newbutton = () =>{
    alert('nice to meet you')
  }

  const thirdbutton = (wow) =>{
    alert(wow + 3)
  }

  return (
    <>
      <h1>React Core Concept 2</h1>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={newbutton}>Nice</button>
      <button onClick={() => thirdbutton(5)}>joss</button>
    </>
  )
}

export default App
