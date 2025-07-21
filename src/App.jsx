import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './components/Conversor'
import Header from './components/Header'

function App() {
  

  return (
  <div className='mb-17'>
    
    <Header/>
    <div className='sm:my-25 lg:my-30' id="conversor" >
            <Conversor/>
            </div>

  </div>
  )
}

export default App
