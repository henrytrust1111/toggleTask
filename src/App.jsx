import { useState } from 'react'
import './App.css'

function App() {
  const days = ["monday","tuesday","wednesday","thursday","friday","saturday"]
  const [count,setCount]= useState(0);

  const handleDaysOfTheWeek = ()=>{
    if (count <= days.length) {
      setCount((count + 1) % days.length);
    } else {
      setCount(count + 1);
    }
  }
  return (
    <>
    <button onClick={handleDaysOfTheWeek}>Click to go to the next day</button>
    <p>{days[count]}</p>
    </>
  )
}

export default App
