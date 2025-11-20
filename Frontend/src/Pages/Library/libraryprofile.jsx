import "../../Styles/libprofile.css"
import { Link } from "react-router"
import { useState, useEffect } from "react"
import instance from "../../utils/apiclient"
function LibraryProfile() {
    const [detailes, setdetailes] = useState()
    // const[formData,setformData]=useState()
    const[isediting,setisediting]=useState(false)
    function change(e){
        setdetailes({...detailes,[e.target.name]:e.target.value})
    }
    async function getprofile() {
        const response = await instance.get("/library/profile")
        setdetailes(response.data.library)

    }
    useEffect(() => {
        getprofile()
    }, [])
    return (
        <>
            <div className="libraryprofile">
                <div className="profiledetailes">
                    <div className="lib-dash-link">
                        <Link to="/libdash"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" stroke="black" fill="none" ><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg></Link>
                    </div>
                    <img src={"http://localhost:8080/uploads/" + detailes?.profilePicture}
                    alt="Library Profile"
                    className="lib-profile-img" />
                    {isediting?<input type="text" name="libraryName" value={detailes?.libraryName} onChange={change}></input>:<h1>{detailes?.libraryName}</h1>}
                    {isediting?<input type="text" name="regNo" value={detailes?.regNo} onChange={change}></input>:<p><strong>{detailes?.regNo}</strong></p>}
                    <div className="lib-info-card">
                       {isediting?<input type="email" name="email" value={detailes?.email} onChange={change}></input>:<p><strong>Email:</strong> {detailes?.email}</p>} 
                    </div>

                    <div className="lib-info-card">
                        {isediting?<input type="tel" name="phoneNumber" value={detailes?.phoneNumber} onChange={change}></input>:<p><strong>Phone:</strong> {detailes?.phoneNumber}</p>}
                       
                    </div>

                    <div className="lib-info-card">
                        <p><strong>Address:</strong> {detailes?.addressLine1}, {detailes?.addressLine2}, {detailes?.District}, {detailes?.State}</p>
                    </div>
                    <button type="submit" onClick={
                        async()=>{
                            setisediting(!isediting)
                            if(isediting){
                               await instance.put("/library/updateprofile",detailes)
                              
                            }
                        }
                    }>Edit</button>

                </div>
            </div>
        </>
    )
}
export default LibraryProfile