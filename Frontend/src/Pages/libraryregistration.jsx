import "../Styles/libraryregistration.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
function Libraryreg(){
    const[data,setdata]=useState({libraryName:"",regNo:"",email:"",phoneNumber:"",addressLine1:"",addressLine2:"",District:"",State:"",pinCode:"",password:""})
    const navigate=useNavigate()
    function change(e){
        e.preventDefault()
        setdata({...data,[e.target.name]:e.target.value})
    }
    async function register(e){
        e.preventDefault()
        try{
            const response=await axios.post("http://localhost:8080/library/register",data)
            alert("Registration Successfull")
            navigate("/librarylogin")
        }
        catch{
            alert("Registration Failed")
        }
    }
    return(
        <>
        <div className="lib-reg">
            <h2>Library Registration Page</h2>
            <form className="lib-reg-form">
                <label htmlFor="libraryName">Library Name:</label>
                <input type="text" name="libraryName" placeholder="Enter your library name" onChange={change}/>
                <label htmlFor="regNo">Librari ID:</label>
                <input type="text" name="regNo" placeholder="Enter yout library id/regNo" onChange={change}/>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="Enter your library email" onChange={change}/>
                <label htmlFor="phoneNumber">ContactNumber:</label>
                <input type="tel" name="phoneNumber" placeholder="Enter your library contactnumber" onChange={change}/>
                <label htmlFor="addressLine1">Address Line1:</label>
                <input type="text" name="addressLine1" placeholder="Enter your building name&street" onChange={change}/>
                <label htmlFor="addressLine2">Address Line2</label>
                <input type="text" name="addressLine2" placeholder="Enter your locality area/landmark" onChange={change}/>
                <label htmlFor="District">District:</label>
                <input type="text" name="District" placeholder="Enter your district" onChange={change}/>
                <label htmlFor="State">State:</label>
                <input type="text" name="State" placeholder="Enter your State" onChange={change}/>
                <label htmlFor="pinCode">PinCode:</label>
                <input type="number" name="pinCode" placeholder="Enter your pincode" onChange={change}/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="enter your password" onChange={change}/>
                <label htmlFor="cpassword">Confirm Password:</label>
                <input type="password" name="cpassword" placeholder="Confirm your password" onChange={change}/>
                <label htmlFor="profilePicture">Profile Image:</label>
                <input type="file" name="profilePicture" onChange={change}/>
                <button type="submit" onClick={register}>Register</button>
            </form>
        </div>
        </>
    )
}
export default Libraryreg