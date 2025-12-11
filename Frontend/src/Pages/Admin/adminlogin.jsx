import { useState } from "react"
import { useNavigate } from "react-router"
import  { AxiosError } from "axios"
import { Link } from "react-router"
import instance from "../../utils/apiclient"
import "../../Styles/adminlogin.css"
function Adminlogin(){
     const[data,setdata]=useState({username:"",password:""})
     const[error,seterror]=useState({})
     const navigate=useNavigate()
     function change(e){
        e.preventDefault()
        setdata({...data,[e.target.name]:e.target.value})
     }
     async function login(e){
        e.preventDefault()
        try{
            const err = {}
            if(data.username.trim()==""){
                err.username="field required"
            }
            if(data.password==""){
                err.password="field required"
            }
            seterror(err)
            if(Object.keys(err).length==0){

           
            const response=await instance.post("/admin/login",data)
            const token=response.data.token
            localStorage.setItem("Token",token)
            alert("Login Successfull")
            navigate("/admindash")
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
        <div className="admin-login">
            <div className="admin-login-home-link">
                    <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" stroke="black" fill="none" ><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg></Link>
                </div>
            <h2>Admin Login Page</h2>
            <form  className="admin-login-form">
            <label htmlFor="username">UserName:</label>
            <input type="text" name="username" onChange={change} placeholder="Enter the username"/>
            <p>{error.username}</p>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={change} placeholder="Enter the password"/>
            <p>{error.password}</p>
            <button type="submit" onClick={login}>Login</button>
            </form>
        </div>
        </>
    )
}
export default Adminlogin