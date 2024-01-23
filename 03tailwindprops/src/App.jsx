import { useState } from 'react'
import Card from './components/card'

import './App.css'

function App() {
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>

      <Card username="waqar" btnText="click me"></Card>
      <Card username="waqar" ></Card>
     

      
    </>
  )
}

export default App
