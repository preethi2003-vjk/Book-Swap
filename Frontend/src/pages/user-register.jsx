import "../styles/userregister.css"
import Countries from "../components/countries"
import { Link } from "react-router-dom"
import { useState } from "react"
function Userregisterpage() {
    const[data,setdata]=useState({firstname:"",lastname:"",gender:"",dob:"",email:"",mbno:"",hname:"",vc:"",dist:"",state:"",ctry:"",pcode:"",password:"",cpassword:""})
        const[error,seterror]=useState({firstname:"",lastname:"",gender:"",dob:"",email:"",mbno:"",hname:"",vc:"",dist:"",state:"",ctry:"",pcode:"",password:"",cpassword:""})
    function change(e){
        e.preventDefault();
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
        if(data.firstname=="")
        {
            error.firstname="filed required"
        }
        return error
    }
    return (
       
    <>
        <img src="/userregpic.png"  id="userimg"/>
        
        <div className="user-signup">

       <Link to="/" id="home"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-store-icon lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" /></svg></Link>
        <form className="user-regform">
            <h1>User Registration Form</h1>
            <div className="name-row">
                <div className="form-group">
                    <label htmlFor="first-name">Firstname</label>
                    <input onChange={change} type="text" id="first-name" name="firstname" />
                    <p className="text-danger">{error.firstname}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Lastname</label>
                    <input onChange={change} type="text" id="last-name" name="lastname" />
                </div>
            </div>
            <label htmlFor="gen">Gender</label>
            <div className="d-flex gap-2">
                <input  onChange={change}type="radio" id="gen"  name="gender" value="male" />
                <label htmlFor="male">Male</label>
                <input onChange={change} type="radio" id="gen"  name="gender" value="female" />
                <label htmlFor="female">Female</label>
                <input onChange={change} type="radio" id="gen"  name="gender" value="others" />
                <label htmlFor="others">Others</label>
            </div>
            <label htmlFor="birth">Date of Birth</label>
            <input  onChange={change}type="date" id="birth" name="dob" />
            <label htmlFor="mail">Email</label>
            <input onChange={change} type="email" id="mail" name="email" />
            <label htmlFor="mno">Mobile No:</label>
            <input onChange={change} type="number" id="mno" name="mbno" />
            <label htmlFor="hname">Housename</label>
            <input onChange={change} type="text" id="hname" name="hname" />
            <label htmlFor="vc">Village/City</label>
            <input onChange={change} type="text" id="vc" name="vc" />
            <label htmlFor="dist">District</label>
            <input onChange={change} type="text" id="dist" name="dist" />
            <label htmlFor="state">State</label>
            <input onChange={change} type="text" id="state" name="state" />
            <label htmlFor="pcode">Pincode</label>
            <input onChange={change} type="number" id="pcode" name="pcode" />
            <label htmlFor="ctry">Country</label>
            <Countries />
            <label htmlFor="password">Password</label>
            <input onChange={change} type="password" id="password" name="password" />
            <label htmlFor="cpassword">Confirm Password</label>
            <input onChange={change} type="password" id="cpassword" name="cpassword" />
            <button className="btn btn-primary" onClick={show}>Sign Up</button>
            <h5>Already have an account? <Link to="/user-login">Login</Link></h5>
            
        </form>
         </div>
         </>
  
    )
}

export default Userregisterpage
