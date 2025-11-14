import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router'
import Adminlogin from './Pages/adminlogin'
import Admindash from './Pages/admindash'
import Userlogin from './Pages/User/userlogin'
import Userregister from './Pages/User/userregistration'
import Librarylogin from './Pages/librarylogin'
import Libraryreg from './Pages/libraryregistration'
import Userprofile from './Pages/User/userprofile'
import Landingpage from './Pages/landingpage'
import Userdash from './Pages/User/userdash'
import Userdonation from './Pages/User/userdonation'
import ViewDonation from './Pages/User/viewdonations'
import Updateprofile from './Pages/User/updateprofile'
import ViewRequest from './Pages/User/viewrequest'
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
         <Route path="/user-dash" element={<Userdash/>}/> 
         <Route path="/user-donation" element={<Userdonation/>}/> 
         <Route path="/viewdonation" element={<ViewDonation/>}/> 
         <Route path="/updateprofile" element={<Updateprofile/>}/> 
         <Route path="/viewrequest" element={<ViewRequest/>}/> 
      </Routes>
    </>
  )
}

export default App
