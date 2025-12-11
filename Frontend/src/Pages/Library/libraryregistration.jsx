import "../../Styles/libraryregistration.css"
import { useState } from "react"
import instance from "../../utils/apiclient"
import { useNavigate } from "react-router"
import { Link } from "react-router"
function Libraryreg(){
    const[data,setdata]=useState({libraryName:"",regNo:"",email:"",phoneNumber:"",addressLine1:"",addressLine2:"",District:"",State:"",pinCode:"",password:""})
    const[file,setfile]=useState(null)
    const navigate=useNavigate()
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
            formData.append("libraryName",data.libraryName)
            formData.append("regNo",data.regNo)
            formData.append("email",data.email)
            formData.append("phoneNumber",data.phoneNumber)
            formData.append("addressLine1",data.addressLine1)
            formData.append("addressLine2",data.addressLine2)
            formData.append("District",data.District)
            formData.append("State",data.State)
            formData.append("pinCode",data.pinCode)
            formData.append("password",data.password)
            formData.append("Profile_pic",file)
            const response=await instance.post("/library/register",formData)
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
             
            <div className="lib-home-link">
                <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" stroke="black" fill="none" ><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></Link>
            </div>
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
                <input type="file"  onChange={uploadimage}/>
                <button type="submit" onClick={register}>Register</button>
                <p>Have already an Account? <Link to="/librarylogin">Login here</Link></p>
            </form>
        </div>
        </>
    )
}
export default Libraryreg