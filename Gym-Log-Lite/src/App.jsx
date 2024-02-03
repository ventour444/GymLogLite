import { useState } from 'react'
import './App.css'
import ExerciseContainer from './components/ExerciseContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ExerciseContainer />
    </>
  )
}

export default App
