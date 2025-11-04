import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router'
import Adminlogin from './Pages/adminlogin'
import Admindash from './Pages/admindash'
import Userlogin from './Pages/userlogin'
import Userregister from './Pages/userregistration'
import Librarylogin from './Pages/librarylogin'
import Libraryreg from './Pages/libraryregistration'
import Userprofile from './Pages/userprofile'
import Landingpage from './Pages/landingpage'
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/adminlogin" element={<Adminlogin/>}/>
        <Route path="/admindash" element={<Admindash/>}/>
        <Route path="/userlogin" element={<Userlogin/>}/>
          <Route path="/user-register" element={<Userregister/>}/>
         <Route path="/librarylogin" element={<Librarylogin/>}/> 
         <Route path="/library-register" element={<Libraryreg/>}/> 
         <Route path="/user-profile" element={<Userprofile/>}/> 
      </Routes>
    </>
  )
}

export default App
