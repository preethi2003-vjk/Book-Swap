import { useEffect, useState } from "react"
import "../../Styles/updateprofile.css"
import instance from "../../utils/apiclient"
import countryList from "../../utils/countries"
import { useNavigate } from "react-router"
function Updateprofile(){
    const[data,setdata]=useState({fullName:"",email:"",phoneNumber:"",addressLine1:"",addressLine2:"",District:"",State:"",pinCode:"",Country:""})
    const[detailes,setdetailes]=useState()
    const[file,setfile]=useState(null)
    const navigate=useNavigate()
     async function getDetailes() {
        const response=await instance.get("/user/profile")
       
        setdetailes(response.data.user)
        
    }
    useEffect(()=>{
        getDetailes()
    },[])
    
    function change(e){
        e.preventDefault()
        console.log(e);
        
        setdetailes({...detailes,[e.target.name]:e.target.value})
    }
    function uploadimage(e){
        e.preventDefault()
        setfile(e.target.files[0])
    }
   
    async function updatedetailes(e){
        e.preventDefault()
        try{
               const formData=new FormData()
            formData.append("fullName",detailes.fullName)
            formData.append("email",detailes.email)
            formData.append("phoneNumber",detailes.phoneNumber)
            formData.append("addressLine1",detailes.addressLine1)
            formData.append("addressLine2",detailes.addressLine2)
            formData.append("District",detailes.District)
            formData.append("State",detailes.State)
            formData.append("pinCode",detailes.pinCode)
            formData.append("Country",detailes.Country)
            formData.append("Profile_pic",file)
            const response=await instance.put("/user/updateprofile",formData)
            alert("Updation Success")
            navigate("/user-profile")

        }
        catch{
            alert("Updation failed")
        }
    }
    
    return(
        <>
        <div className="update-profile">
            <form className="updateprofile-form">
               <label htmlFor="fullName">Full Name:</label>
                <input type="text" name="fullName" value={detailes?.fullName} onChange={change} />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={detailes?.email} onChange={change}/>
                <label htmlFor="phoneNumber">PhoneNumber:</label>
                <input type="tel" name="phoneNumber" value={detailes?.phoneNumber} onChange={change}/>
                <label htmlFor="addressLine1">Address Line1:</label>
                <input type="text" name="addressLine1" value={detailes?.addressLine1}  onChange={change}/>
                <label htmlFor="addressLine2">Address Line2:</label>
                <input type="text" name="addressLine2"  value={detailes?.addressLine2} onChange={change}/>
                <label htmlFor="District">District:</label>
                <input type="text" name="District"  value={detailes?.District} onChange={change}/>
                <label htmlFor="State">State:</label>
                <input type="text"name="State" value={detailes?.State} onChange={change}/>
                <label htmlFor="pinCode">PinCode:</label>
                <input type="text" name="pinCode" value={detailes?.pinCode} onChange={change}/>
                <label htmlFor="countries">Country</label>
                <select name="Country" value={detailes?.Country} id="country" >
                    {
                        countryList.map((country)=>{
                            return <option value={country}>{country}</option>
                        })
                    }
                </select>
               
                <label htmlFor="profilePicture">Profile Image</label>
                <input type="file" onChange={uploadimage}/>
                <button type="submit" onClick={updatedetailes}>Update</button>
            </form>
        </div>
        </>
    )
}
export default Updateprofile