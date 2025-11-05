import { useState } from "react"
import { useNavigate } from "react-router"
import  { AxiosError } from "axios"
import instance from "../utils/apiclient"
import "../Styles/adminlogin.css"
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
            <h2>Admin Login Page</h2>
            <form  className="admin-login-form">
            <label htmlFor="username">UserName:</label>
            <input type="text" name="username" onChange={change} />
            <p>{error.username}</p>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={change} />
            <p>{error.password}</p>
            <button type="submit" onClick={login}>Login</button>
            </form>
        </div>
        </>
    )
}
export default Adminlogin