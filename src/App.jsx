import { useState } from 'react'
import Header from './components/header'
import Home from './components/Home'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (

    //body is defining here.
   <body className='bg-gradient-to-tr to-black from-slate-900 h-[100vh] w-[100vw]' >
       <>
    <Header/>
    <Outlet/>
    </>
   </body>
  )
}

export default App
