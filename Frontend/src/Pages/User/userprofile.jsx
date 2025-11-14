import { useState, useEffect } from "react"
import instance from "../../utils/apiclient"
import { Link } from "react-router"
import "../../Styles/userprofile.css"

function Userprofile() {
    const [detailes, setdetailes] = useState()
    // const [isediting, setisediting] = useState(false)

    async function userdata() {
        const response = await instance.get("/user/profile")
        setdetailes(response.data.user)

    }
    // function change(e) {
    //     setdetailes({ ...detailes, [e.target.name]: e.target.value })
    // }

    useEffect(() => {
        userdata()
    }, [])
    // useEffect(() => {

    // }, [detailes])


    return (
        <>
        <div className="user-profile">
            

        
            <div className="profile-detailes">
                 <div className="user-dash-link">
                <Link to="/user-dash"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" stroke="black" fill="none" ><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></Link>
            </div>
                <img src={"http://localhost:8080/uploads/" + detailes?.img}
                    alt="User Profile"
                    className="profile-pic" />
                <h1>{detailes?.fullName}</h1>
                <div className="addcont">
                    
                    <div className="address">
                        <h2>Address detailes</h2>
                        <p>{detailes?.addressLine1},</p>
                        <p>{detailes?.addressLine2},</p>
                        <p>{detailes?.District},</p>
                        <p>{detailes?.State}-{detailes?.pinCode}</p>
                    </div>
                    
                    <div className="contact">
                        <h2>Contact info</h2>
                        <p> ✉️ Email:{detailes?.email}</p>
                        <p>📞 Phone Number:{detailes?.phoneNumber}</p>
                    </div>

                </div>
                <button><Link to="/updateprofile">Update Detailes</Link></button>
            

            </div>
           
            </div>
        </>
    )
}
export default Userprofile