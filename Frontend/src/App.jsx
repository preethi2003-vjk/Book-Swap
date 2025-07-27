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
import Loginadmin from './pages/loginadmin'
import Userlogin from './pages/userlogin'
import Librarylogin from './pages/librarylogin'
import Userregisterpage from './pages/user-register'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Routes>
    <Route path="/" element={<Landingpage/>}/>
       <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
         <Route path="/admin-login" element={<Loginadmin/>}/>
          <Route path="/user-login" element={<Userlogin/>}/>
           <Route path="/library-login" element={<Librarylogin/>}/>
             <Route path="/user-register" element={<Userregisterpage/>}/>
   </Routes>

   </>
      
  )
}

export default App
