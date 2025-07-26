import React from 'react'
import "../styles/loginadmin.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Loginadmin() {
    const[data,setdata]=useState({email:"",password:""})
    const[error,seterror]=useState({email:"",password:""})
    function change(e){
       e.preventDefault(e);
       setdata({...data,[e.target.name]: e.target.value});
    }
    function show(e){
     e.preventDefault();
     let error = checkerror(data)
     seterror(error)
      if(Object.keys(error).length==0){
        console.log(data)
      }
    }
    function checkerror(data){
        const error ={};
        if(data.email==""){
            error.email="field required"
        }
       
        if(data.password==""){
            error.password="field required"
        }
        return error
    }
    
  return (
    <>
    <div className='admin-login'>
        <img id="admin-loginimg" src="https://static.vecteezy.com/system/resources/thumbnails/029/854/744/small/open-book-isolated-on-white-background-3d-illustration-mock-up-generative-ai-photo.jpg" />
       <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store-icon lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" /></svg></Link>
         <form className='admin-form'>
              <h1 >Admin Login</h1>
             <label htmlFor="admin-email"> Admin email:</label>
             <input onChange={change} id='admin-email' name='email' type="email" />
              <p className="text-danger">{error.email}</p>
             <label htmlFor="password"  >Password:</label>
             <input  onChange={change} id="password" name="password" type="password" />
              <p className="text-danger">{error.password}</p>
             <button onClick={show}>Login</button>
         </form>
    </div>
    </>
  )
}

export default Loginadmin
