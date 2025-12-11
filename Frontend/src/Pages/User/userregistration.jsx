import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import "../../Styles/userregistration.css"
import countryList from "../../utils/countries"
import { Link } from "react-router"
function Userregister(){
    const navigate=useNavigate()
    const[data,setdata]=useState({fullName:"",Gender:"",DOB:"",email:"",phoneNumber:"",addressLine1:"",addressLine2:"",District:"",State:"",pinCode:"",Country:"",password:"",cpassword:""})
    const[file,setfile]=useState(null)
    function change(e){
        e.preventDefault()
        setdata({...data,[e.target.name]:e.target.value})
    }
    function uploadimage(e){
        e.preventDefault()
        setfile(e.target.files[0])
    }
    async function register(e){
        e.preventDefault()
        try{
            const formData=new FormData()
            formData.append("fullName",data.fullName)
            formData.append("Gender",data.Gender)
            formData.append("DOB",data.DOB)
            formData.append("email",data.email)
            formData.append("phoneNumber",data.phoneNumber)
            formData.append("addressLine1",data.addressLine1)
            formData.append("addressLine2",data.addressLine2)
            formData.append("District",data.District)
            formData.append("State",data.State)
            formData.append("pinCode",data.pinCode)
            formData.append("Country",data.Country)
            formData.append("password",data.password)
            formData.append("Profile_pic",file)
            const response=await axios.post("http://localhost:8080/user/register",formData)
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
            
           
            <div className="user-home-link">
                <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" stroke="black" fill="none" ><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></Link>
            </div>
            
             <h2>User Registration Page</h2>
            
            <form className="user-reg-form">
               
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" name="fullName" placeholder="Enter your fullname" onChange={change}/>
                <label htmlFor="Gender">Gender:</label>
                  <div className="gender-group">
                   
                        <input type="radio" name="Gender" value="Male" onChange={change} /> Male
                    
                   
                        <input type="radio" name="Gender" value="Female" onChange={change} /> Female
                    
                   
                        <input type="radio" name="Gender" value="Other" onChange={change} /> Other
                    
                </div>
                <label htmlFor="DOB">DOB:</label>
                <input type="date" name="DOB" onChange={change} />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="Enter your email" onChange={change}/>
                <label htmlFor="phoneNumber">PhoneNumber:</label>
                <input type="tel" name="phoneNumber" placeholder="Enter your phonenumber" onChange={change}/>
                <label htmlFor="addressLine1">Address Line1:</label>
                <input type="text" name="addressLine1" placeholder="Enter your building name&street" onChange={change} />
                <label htmlFor="addressLine2">Address Line2:</label>
                <input type="text" name="addressLine2" placeholder="Enter your locality area/landmark" onChange={change} />
                <label htmlFor="District">District:</label>
                <input type="text" name="District" placeholder="Enter your district" onChange={change} />
                <label htmlFor="State">State:</label>
                <input type="text"name="State" placeholder="Enter your state" onChange={change}/>
                <label htmlFor="pinCode">PinCode:</label>
                <input type="text" name="pinCode" placeholder="Enter the 6digit pincode" onChange={change}/>
                <label htmlFor="countries">Country</label>
                <select name="Country" value={data.Country} id="country" onChange={change}>
                    {
                        countryList.map((country)=>{
                            return <option value={country}>{country}</option>
                        })
                    }
                </select>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="Enter the password" onChange={change}/>
                <label htmlFor="cpassword">Confirm Password:</label>
                <input type="password" name="cpassword" placeholder="Confirm your password" />
                <label htmlFor="profilePicture">Profile Image</label>
                <input type="file"  onChange={uploadimage}/>
                <button type="submit" onClick={register}>Register</button>
                <p>Have already an Account? <Link to="/userlogin">Login here</Link></p>
            </form>
          
        </div>
        </>
    )
}
export default Userregister