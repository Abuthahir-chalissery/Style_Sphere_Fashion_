import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-gray-200 smd:bg-gray-100 p-5 flex justify-center '>
        <div className='w-full h-auto max-w-100 sm:max-w-270 flex flex-col gap-10'>
          <Navbar/> 
          <Home/>
        </div>
      </div>
    </>
  )
}

export default App
