import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './components/Conversor'

function App() {
  

  return (
    <div className=' my-32'>
  <h1 className="text-xl text-green-600 my-8 ">Conversor de Moedas:</h1>
  <Conversor/>
    </div>
  
  )
}

export default App
