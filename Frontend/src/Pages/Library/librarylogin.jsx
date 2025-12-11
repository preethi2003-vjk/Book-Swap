import { useState } from "react"
import instance from "../../utils/apiclient"
import "../../Styles/librarylogin.css"
import { AxiosError } from "axios"
import { Link } from "react-router"
import { useNavigate } from "react-router"
function Librarylogin(){
    const navigate=useNavigate()
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
            const response=await instance.post("/library/login",data)
            const token=response.data.token
            localStorage.setItem("Token",token)
            alert("Login Successfully")
            window.location.href="/libdash"    //page reload cheyum
            // navigate("/libdash")        //page reload cheyathilla dom vechu update cheyumm paskhe speed performance loading
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
        <div className="lib-login-home-link">
                    <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" stroke="black" fill="none" ><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg></Link>
                </div>
        <h2>Library Login Page</h2>
        <form className="lib-login-form">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="Enter your registered email"  onChange={change}/>
            <p>{error.email}</p>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter your password" onChange={change}/>
            <p>{error.password}</p>
            <button type="submit" onClick={login}>Login</button>
             <h3>Don't have an account?? <Link to="/library-register">Click here!!</Link></h3>
        </form>
      </div>
     
     </>
    )
}
export default Librarylogin