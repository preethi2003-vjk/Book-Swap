import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import "../Styles/userregistration.css"
import countryList from "../utils/countries"
function Userregister(){
    const navigate=useNavigate()
    const[data,setdata]=useState({fullName:"",email:"",phoneNumber:"",addressLine1:"",addressLine2:"",District:"",State:"",pinCode:"",Country:"",password:"",cpassword:""})
    const[file,setfile]=useState()
    function change(e){
        e.preventDefault()
        setdata({...data,[e.target.name]:e.target.value})
    }
    async function register(e){
        e.preventDefault()
        try{
            const response=await axios.post("http://localhost:8080/user/register",data)
            alert("Registration Successfull")
            navigate("/userlogin")
        }
        catch{
            alert("Registration Failed")
        }
    }
    return(
        <>
        <div className="user-reg">
             <h2>User Registration Page</h2>
            <form className="user-reg-form">
               
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" name="fullName" placeholder="Enter your fullname" onChange={change}/>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Enter your email" onChange={change}/>
                <label htmlFor="phoneNumber">PhoneNumber:</label>
                <input type="tel"  placeholder="Enter your phonenumber" onChange={change}/>
                <label htmlFor="addressLine1">Address Line1:</label>
                <input type="text" name="addressLine1" placeholder="Enter your building name&street" onChange={change} />
                <label htmlFor="addressLine2">Address Line2:</label>
                <input type="text" name="addressLine2" placeholder="Enter your locality area/landmark" onChange={change} />
                <label htmlFor="District">District:</label>
                <input type="text" name="District" placeholder="Enter your district" onChange={change} />
                <label htmlFor="State">State:</label>
                <input type="text" placeholder="Enter your state" onChange={change}/>
                <label htmlFor="pinCode">PinCode:</label>
                <input type="text" placeholder="Enter the 6digit pincode" onChange={change}/>
                <label htmlFor="countries">Country</label>
                <select name="Country" value={data.Country} id="country" onChange={change}>
                    {
                        countryList.map((country)=>{
                            return <option value={country}>{country}</option>
                        })
                    }
                </select>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Enter the password" onChange={change}/>
                <label htmlFor="cpassword">Confirm Password:</label>
                <input type="password" name="cpassword" placeholder="Confirm your password" />
                <label htmlFor="profilePicture">Profile Image</label>
                <input type="file" />
                <button type="submit" onClick={register}>Register</button>
            </form>
        </div>
        </>
    )
}
export default Userregister