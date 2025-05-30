import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './components/Conversor'

function App() {
  

  return (
    <div className=' sm:my-25 lg:my-10' >
  <h1 className=" sm:text-9xl sm:my-25 lg:text-6xl text-cyan-500 lg:my-1 ">Conversor de Moedas:</h1>
  <Conversor/>
    </div>
  
  )
}

export default App
