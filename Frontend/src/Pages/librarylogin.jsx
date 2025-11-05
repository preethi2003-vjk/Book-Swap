import { useState } from "react"
import axios from "axios"
import "../Styles/librarylogin.css"
import { AxiosError } from "axios"
import { Link } from "react-router"
function Librarylogin(){
     const[data,setdata]=useState({email:"",password:""})
     const[error,seterror]=useState({})
     function change(e){
        e.preventDefault()
        setdata({...data,[e.target.name]:e.target.value})
     }
     async function login(e){
        e.preventDefault()
        try{
            const err = {}
            if(data.email.trim()==""){
                err.email="field required"
            }
            if(data.password==""){
                err.password="field required"
            }
            seterror(err)
            
            if(Object.keys(err).length==0){
            const response=await axios.post("http://localhost:8080/library/login",data)
            const token=response.data.token
            localStorage.setItem("Token",token)
            alert("Login Successfully")
        }
    }
        catch(err){
            console.log(err)
            if(err instanceof AxiosError){
                if(err.response?.data){
                    seterror({password:err.response.data.message})
                        }
                     }
            alert("Login Failed")
        }
     }
    return(
       
     <>
      <div className="lib-form">
        <h2>Library Login Page</h2>
        <form className="lib-login-form">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="Enter your registered email"  onChange={change}/>
            <p>{error.email}</p>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter your password" onChange={change}/>
            <p>{error.password}</p>
            <button type="submit" onClick={login}>Login</button>
             <h3>Don't have an account?? <Link to="/user-register">Click here!!</Link></h3>
        </form>
      </div>
     
     </>
    )
}
export default Librarylogin