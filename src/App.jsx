import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Terminal from './components/Terminal'
import Dock from './components/Dock'

function App() {

  return (
    <div>
    <Terminal/>
    <Dock />
    </div>
  )
}

export default App
