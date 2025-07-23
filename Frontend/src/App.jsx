import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Landingpage from './pages/landing page' 
import About from './pages/about'
import Contact from './pages/contact'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Routes>
    <Route path="/" element={<Landingpage/>}/>
       <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </>
      
  )
}

export default App
